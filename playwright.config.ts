import { Browsers } from '@config/browsers';
import { Environment } from '@config/environment';
import { Reporters } from '@config/reporters';
import { Timeouts } from '@config/timeouts';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: Timeouts.DEFAULT,
  expect: {
    timeout: Timeouts.MEDIUM
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: Reporters as any,

  use: {
    baseURL: Environment.baseUrl,
    headless: Environment.headless,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    actionTimeout: Timeouts.MEDIUM,
    navigationTimeout: Timeouts.MEDIUM,
  },


  projects: [
    Browsers.chromium,
    Browsers.firefox,
    Browsers.webkit,
  ]
});
