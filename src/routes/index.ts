import express, { Request, Response } from 'express';
import resize from '../controllers/resize';
import path from 'path';

const routes = express.Router();

routes.get('/api/images', async (req: Request, res: Response) => {
  const filename = req.query.filename as unknown as string;
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);

  resize(filename, width, height)
    .then((fm) => {
      res.sendFile(
        path.join(
          __dirname,
          '..',
          '..',
          'assets',
          'thumb',
          'cached_' + fm + '.jpg'
        )
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(505).send('Error has been happend Input file is missing');
    });
});

routes.get('/', (req, res) => {
  res.send('Hello Server');
});

export default routes;
