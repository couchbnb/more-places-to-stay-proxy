const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));
// app.use(express.static('public'));


app.use('/place', createProxyMiddleware({
  target: '127.0.0.1',
  changeOrigin: true,
  router() {
    return 'http://54.183.142.121';
  },
}));
app.use('/api/listing', createProxyMiddleware({
  target: '127.0.0.1',
  changeOrigin: true,
  router() {
    return 'http://ec2-52-14-202-167.us-east-2.compute.amazonaws.com';
  },
}));
app.use('/api/reservations', createProxyMiddleware({
  target: '127.0.0.1',
  changeOrigin: true,
  router() {
    return 'http://ec2-52-14-202-167.us-east-2.compute.amazonaws.com';
  },
}));
app.use('/data', createProxyMiddleware({
  target: '127.0.0.1',
  changeOrigin: true,
  router() {
    return 'http://3.101.106.19';
  },
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.get('/place', (req, res) => {
//   const id = req.query.roomid;
//   axios.get(`http://54.183.142.121/place?roomid=${id}`)
//     .then((response) => {
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

/* ---------------------------gallery 3061---------------------*/

// app.get('/data/:id', (req, res) => {
//   console.log(req.params);
//   axios.get(`http://localhost:3061/data/${req.params.id}`)
//     .then((response) => {
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.patch('/data/:id', (req, res) => {
//   console.log(req.params);
//   axios.get(`http://localhost:3061/data/${req.params.id}`)
//     .then((response) => {
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
/* ----------------------------reservation 3005 -----------------------*/

// app.get('/api/listing', (req, res) => {
//   console.log(req.query);
//   axios.get(`http://3.135.212.193/api/listing?listing_id=${req.query.listing_id}`)
//     .then((response) => {
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.post('/api/reservations', (req, res) => {
//   console.log(req.body);
//   axios.post('http://3.135.212.193/api/reservations', req.body)
//     .then((response) => {
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.get('/api/reservations', (req, res) => {
//   axios.get(`http://3.135.212.193/api/reservations?listing_id=${req.query.listing_id}`)
//     .then((response) => {
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
