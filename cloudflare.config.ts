import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "sourabh-org",
		compatibilityDate: "2026-09-25",
		assets: {
			htmlHandling: "auto-trailing-slash",
			notFoundHandling: "none",
		},
		domains: ["sourabh.org"],
	},
});
