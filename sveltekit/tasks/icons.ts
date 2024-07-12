import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import { optimize } from "svgo";

const files = await glob("src/lib/assets/icons/*.svg");
const icons = await Promise.all(files.map(async file => {
	const name = path.basename(file, ".svg");
	const markup = await fs.readFile(file, "utf8");
	const optimized = optimize(markup, {
		multipass: true,
		plugins: [{
			name: "removeDimensions"
		}, {
			name: "convertColors",
			params: {
				currentColor: true
			}
		}]
	}).data;

	return [ name, optimized ];
}));

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const map = Object.fromEntries(icons) as Record<string, string>;

await fs.mkdir("src/lib/generated", { recursive: true });
await fs.writeFile(
	"src/lib/generated/icons.ts",
	`export const icons = ${JSON.stringify(map)} as const;\n`
);
