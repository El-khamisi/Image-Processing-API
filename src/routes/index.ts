import express, { Request, Response } from 'express';
import resize from '../controllers/resize';
import path from 'path';

const routes = express.Router();

routes.get(
  '/api/images',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const filename = req.query.filename as unknown as string;
      const width = parseInt(req.query.width as unknown as string);
      const height = parseInt(req.query.height as unknown as string);

      if (!filename || !width || !height) throw 'Provide an invalide pramaters';

      if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0)
        throw 'Provide a correct numbers in width and height';

      resize(filename, width, height)
        .then((fm) => {
          res.sendFile(path.join(__dirname, '..', '..', 'assets', 'thumb', fm));
        })
        .catch((err) => {
          console.log(err);
          res.status(505).send('Error has been happend Input file is missing');
        });
    } catch (err) {
      res.json({ errmsg: err });
    }
  }
);

routes.get('/', (req: Request, res: Response): void => {
  res.send('Hello Server');
});

export default routes;
