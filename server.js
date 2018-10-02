const express = require('express')
const path = require('path')
app = express();

app.use((req, res, next) => {
  if(req) 
  next()
})

app.get('*.js', function (req, res, next) {
  console.log("js", req.url)
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//Binding the server to a port(3000)
app.listen(3000,()=>console.log('express server started at port 3000'));