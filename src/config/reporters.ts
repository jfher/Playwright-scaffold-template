export const Reporters = [
    ["html"],
    ["list"],
    ["allure-playwright", {
        resultsDir: "reports/allure-results",
    }]
] as const;