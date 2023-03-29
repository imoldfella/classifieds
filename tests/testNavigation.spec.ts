import { test, expect } from "@playwright/test";

test("Check Theme black/white works", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.locator("#theme").click();
  await page.locator("#theme").click();
});
