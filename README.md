# Image-Processing-API

## Description
A website ( based on node.js and express framework) using `sharp` framework to resizing the image and serve the prefiouse one if it has been resized before.
Written in `typescript` enhanced with `jasmine` unit test framework to ensure the websita has less errors rather than `plain js`

## Directory Structure

```
.
├── node_modules/
├── assets/
│   ├── fullSize/
│   ├── thumb/
│   └── index.html
├── dist/
│   ├── controllers/
│   │   └── resize.js
│   ├── routes/
│   │   └── index.js
│   ├── tests/
│   │   ├── helpers/
│   │   │   └── reporter.js
│   │   └── indexSpec.js
│   └── index.js
├── spec/
│   └── support/
│       └── jamsine.json
├── src/
│   ├── controllers/
│   │   └── resize.ts
│   ├── routes/
│   │   └── index.ts
│   ├── tests/
│   │   ├── helpers/
│   │   │   └── reporter.js
│   │   └── indexSpec.js
│   └── index.js
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .README
├── package-lock.json
├── package.json
└── tsconfig.json
```

### Installing

* Download the dependencies with `npm` package manager
```
npm install
```

### Executing program

* The website worked on `process.env.PORT || 8081` by `nodemon` developer monitoring server
* OR on production mode `node dist/index`
```
nodemon index.js
```

## Instructions on how to access endpoint
`URL/api/images?filename=imagename&width=widthNumber&height=heightNumber`

Example
filename=fjord 
width=200
height=200
`http://localhost:8081/api/images?filename=fjord&width=200&height=200`

## Help

Any advise for common problems or issues.

Send an E-mail [mohammd.alkhamisi@gmail.com]()

## License

This project is licensed under the [Apache License 2.0](https://github.com/El-khamisi/Image-Processing-API/blob/main/LICENSE.md) License - see the LICENSE.md file for details