import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  deployment: {
    appId: "b6d6c03019f5a3bbd56aec40"
  },
  api: {
    projectId: "kcm0835a",
    dataset: "production"
  },
  typegen: {
    schema: "schema.json",
    path: "../app/src/lib/cms/queries.ts",
    generates: "../app/src/lib/generated/sanity-types.d.ts"
  }
});
