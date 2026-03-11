import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, 'Screenshots');

// Ensure Screenshots directory exists
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const BASE = 'http://localhost:5173';

// All routes from routes.ts (using hash router)
const pages = [
  { name: 'home', path: '/#/' },
  { name: 'waitlist', path: '/#/waitlist' },
  { name: 'brochure', path: '/#/brochure' },
  { name: 'referral', path: '/#/referral' },
  { name: 'about', path: '/#/about' },
  { name: 'faq', path: '/#/faq' },
  { name: 'privacy', path: '/#/privacy' },
  { name: 'cookies', path: '/#/cookies' },
  { name: 'audit', path: '/#/audit' },
  { name: 'audit-final', path: '/#/audit-final' },
  { name: '404', path: '/#/nonexistent-page' },
];

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  for (const { name, path: pagePath } of pages) {
    console.log(`Capturing: ${name}...`);
    const pg = await browser.newPage();
    await pg.setViewport({ width: 1440, height: 900 });
    await pg.goto(`${BASE}${pagePath}`, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for fonts and images to load
    await new Promise(r => setTimeout(r, 2000));

    // Take full page screenshot
    await pg.screenshot({
      path: path.join(screenshotsDir, `${name}.png`),
      fullPage: true,
    });

    console.log(`  ✓ ${name}.png saved`);
    await pg.close();
  }

  await browser.close();
  console.log('\nAll screenshots saved to ./Screenshots/');
}

run().catch(console.error);
