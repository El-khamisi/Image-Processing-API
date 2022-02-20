import supertest from 'supertest';
import app from '../index';
import resize from '../controllers/resize';

const req = supertest(app);

interface MockFile {
  filename: string;
  width: number;
  height: number;
}

describe('Test image prcessing utilities ', () => {
  it('gets the image processing endpoint', () => {
    const newMockFile = {
      filename: 'fjord',
      width: 200,
      height: 200,
    };
    return resize(
      newMockFile.filename,
      newMockFile.width,
      newMockFile.height
    ).then((resFilename) => {
      expect(resFilename).toBe(newMockFile.filename);
    });
  });
});

describe('Test endpoint responses', () => {
  it('gets the image processing endpoint', (done) => {
    const newMockFile: MockFile = {
      filename: 'fjord',
      width: 200,
      height: 200,
    };

    req
      .get(
        `/api/images?filename=${newMockFile.filename}&width=${newMockFile.width}&height=${newMockFile.height}`
      )
      .expect(200, (err) => {
        if (err) done.fail(err);
        else done();
      });
  });

  it('gets home page endpoint', (done) => {
    req.get('/').expect(200, (err) => {
      if (err) done.fail(err);
      else done();
    });
  });
});
