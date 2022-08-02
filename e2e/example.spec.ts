import { test, expect } from '@playwright/test';
import { isContext } from 'vm';


// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test('fail', async ({ page}) => {

  //await isContext.tracing.start({screenshots: true, snapshots: true});
  // Go to https://www.timocom.de/
  await page.goto('https://www.timocom.de/');
  // Click [aria-label="Verweigern"]
  await page.locator('[aria-label="Verweigern"]').click();
  // Click [aria-label="Categories"] >> text=Karriere
  await page.locator('[aria-label="Categories"] >> text=Karriere').click();
  await expect(page).toHaveURL('https://www.timocom.de/#');
  // Click [aria-label="Categories"] >> text=Jobs
  await page.locator('[aria-label="Categories"] >> text=Jobs').click();
  await expect(page).toHaveURL('https://www.timocom.de/karriere/jobs');
  // Select 2794552
  await page.locator('select[name="departmentFilter"]').selectOption('2794552');
  // Click [placeholder="Stichwort"]
  await page.locator('[placeholder="Stichwort"]').click();
  // Fill [placeholder="Stichwort"]
  await page.locator('[placeholder="Stichwort"]').fill('auto');
  // Press Enter
  await page.locator('[placeholder="Stichwort"]').press('Enter');
  await expect(page).toHaveURL('https://www.timocom.de/karriere/jobs?departmentFilter=2794552&jobLevelFilter=&searchString=auto#resultList');
  // Click text=Software Tester - Automation - remote or onsite (m/w/d) IT
  await page.locator('text=Software Tester - Automation - remote or onsite (m/w/d) IT').click();
  await expect(page).toHaveURL('https://www.timocom.de/karriere/jobs/743999837007067-software-tester-automation-remote-or-onsite-m-w-d-');
});

test('pass', async ({ page }) => {
  // Go to https://www.timocom.de/
  await page.goto('https://www.timocom.de/');
  // Click [aria-label="Verweigern"]
  await page.locator('[aria-label="Verweigern"]').click();
  // Click [aria-label="Categories"] >> text=Karriere
  await page.locator('[aria-label="Categories"] >> text=Karriere').click();
  await expect(page).toHaveURL('https://www.timocom.de/#');
  // Click [aria-label="Categories"] >> text=Jobs
  await page.locator('[aria-label="Categories"] >> text=Jobs').click();
  await expect(page).toHaveURL('https://www.timocom.de/karriere/jobs');
  // Select 2794552
  await page.locator('select[name="departmentFilter"]').selectOption('2794552');
  // Click [placeholder="Stichwort"]
  await page.locator('[placeholder="Stichwort"]').click();
  // Fill [placeholder="Stichwort"]
  await page.locator('[placeholder="Stichwort"]').fill('automation');
  // Press Enter
  await page.locator('[placeholder="Stichwort"]').press('Enter');
  await expect(page).toHaveURL('https://www.timocom.de/karriere/jobs?departmentFilter=2794552&jobLevelFilter=&searchString=automation#resultList');
  // Click text=Software Tester - Automation - remote or onsite (m/w/d)
  await page.locator('text=Software Tester - Automation - remote or onsite (m/w/d)').click();
  await expect(page).toHaveURL('https://www.timocom.de/karriere/jobs/743999837007067-software-tester-automation-remote-or-onsite-m-w-d-');
});