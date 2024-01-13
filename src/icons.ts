import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';

export interface Icons {
  name: string;
  d: string;
  viewBox: string;
}

const svgFolderPath = path.join(__dirname, 'svg');

function readSvgFiles(folderPath: string): Icons[] {
  const svgObjects: Icons[] = [];

  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const svgContent = fs.readFileSync(path.join(folderPath, file), 'utf-8');
      const iconName = removeSvgExtension(file);
      const svgObject = parseSvgContent(iconName, svgContent);
      svgObjects.push(svgObject);
    }
  });

  return svgObjects;
}

function removeSvgExtension(fileName: string): string {
  return fileName.replace(/\.svg$/, '');
}

function parseSvgContent(fileName: string, content: string): Icons {
  let svgObject: Icons = { name: fileName, d: '', viewBox: '' };

  xml2js.parseString(content, { explicitArray: false }, (err, result) => {
    if (!err) {
      if (result && result.svg) {
        if (result.svg.path && result.svg.path['$'] && result.svg.path['$'].d) {
          svgObject.d = result.svg.path['$'].d;
        } else if (result.svg.g && result.svg.g.path && result.svg.g.path['$'] && result.svg.g.path['$'].d) {
          svgObject.d = result.svg.g.path['$'].d;
        }

        if (result.svg['$'] && result.svg['$'].viewBox) {
          svgObject.viewBox = result.svg['$'].viewBox;
        } else {
          console.error(`Erro ao analisar o arquivo SVG: ${fileName}`);
        }
      }
    } else {
      console.error(`Erro ao analisar o arquivo SVG: ${fileName}`);
    }
  });

  return svgObject;
}

export const icons = readSvgFiles(svgFolderPath);
