import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => resolve(event, {
  preload: ({ type }) => new Set<typeof type>(["css", "js", "font"]).has(type)
});
