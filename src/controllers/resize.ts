import sharp from 'sharp';
import path from 'path';
import * as fs from 'fs';

const resize = (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const cachedFile =
      'cached_' + width + 'x' + height + '_' + filename + '.jpg';
    const inputFile = path.join('assets', 'fullSize', filename + '.jpg');
    const outputFile = path.join('assets', 'thumb', cachedFile);

    try {
      fs.access(outputFile, fs.constants.F_OK, (err) => {
        if (err) {
          sharp(inputFile)
            .resize(width, height)
            .toFile(outputFile)
            .then(() => {
              console.log('succesfully resizing');
              resolve(cachedFile);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          console.log('The image already exist');
          resolve(cachedFile);
        }
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export default resize;
