import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import { type CustomPlugin, optimize } from "svgo";

const customSvgoStuff: CustomPlugin = {
  name: "customSvgoStuff",
  fn: () => ({
    element: {
      enter: (node) => {
        node.attributes["stroke-width"] &&= "2.5";
      }
    }
  })
};

const names = [
  "arrow-left",
  "arrow-right",
  "arrow-up-right",
  "calendar",
  "clock",
  "mail",
  "menu",
  "phone",
  "map-pin",
  "xmark"
] as const;

const files = await glob(
  names.map(name => path.join(
    import.meta.dirname,
    `../node_modules/iconoir/icons/regular/${name}.svg`
  ))
);

const icons = await Promise.all(files.map(async (file) => {
  const name = path.basename(file, ".svg");
  const markup = await fs.readFile(file, "utf8");
  const optimized = optimize(markup, {
    multipass: true,
    plugins: [
      {
        name: "removeDimensions"
      },
      {
        name: "mergePaths"
      },
      customSvgoStuff
    ]
  }).data;

  return [name, optimized];
}));

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-unsafe-type-assertion
const map = Object.fromEntries(icons) as Record<string, string>;

await fs.mkdir("src/lib/generated", { recursive: true });
await fs.writeFile(
  "src/lib/generated/icons.ts",
  `export const icons = ${JSON.stringify(map)} as const;\n`
);
