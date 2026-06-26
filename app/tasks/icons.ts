import fs from "node:fs/promises";
import path from "node:path";
import { type CustomPlugin, optimize } from "svgo";

const overrideStrokeWidth: CustomPlugin = {
  name: "overrideStrokeWidth",
  fn: () => ({
    element: {
      enter: (node) => {
        node.attributes["stroke-width"] &&= "2.5";
      }
    }
  })
};

const files = Array.from(
  [
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
  ],
  name => path.join(
    import.meta.dirname,
    `../node_modules/iconoir/icons/regular/${name}.svg`
  )
);

const icons = await Promise.all(
  files.map(async (file) => {
    const name = path.basename(file, ".svg");
    const markup = await fs.readFile(file, "utf8");

    const { data } = optimize(markup, {
      multipass: true,
      plugins: [
        {
          name: "removeDimensions"
        },
        {
          name: "mergePaths"
        },
        overrideStrokeWidth
      ]
    });

    return [name, data];
  })
);

const map: unknown = Object.fromEntries(icons);

await fs.mkdir("src/lib/generated", { recursive: true });
await fs.writeFile(
  "src/lib/generated/icons.ts",
  `export const icons = ${JSON.stringify(map)} as const;\n`
);
