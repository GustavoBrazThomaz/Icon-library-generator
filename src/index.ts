import fs from "fs-extra";
import { icons } from "./icons";
import {svelteIcons } from './component-builder'

async function generateIcons() {
  try {
    for (const icon of icons) {
      const iconDir = `src/lib/`;
      await fs.ensureDir(iconDir);

      const filePath = `${iconDir}/${icon.name}Icon.svelte`;
      const fileContent = svelteIcons(icon)

      await fs.writeFile(filePath, fileContent);
    }
  } catch (error) {
    console.error(error);
  }
}

generateIcons();
