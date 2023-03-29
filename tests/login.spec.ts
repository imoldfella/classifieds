import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page
    .getByRole("navigation", { name: "main" })
    .getByRole("link", { name: "Login" })
    .click();
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("german");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("zarko");
  await page.getByRole("button", { name: "Submit" }).click();
});
