const http = require('http');
const express = require('express');
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const rename = date.toLocaleString().toString().split('/').join('').split(':').join('').split(' ').join().split(',').join('');
    cb(null, rename + ' - ' + file.originalname)
  }
})
const upload = multer({storage: storage})
const fs = require('fs');

const app = express();
const routes = express.Router();


routes.use(express.static('./'))

routes.post('/teste', upload.array('uploadFiles[]'), (request, response) => { 
    return response.json("sucesso");
})

app.use(express.json());
app.use(routes);


const server = http.createServer(app);
server.listen(3001);