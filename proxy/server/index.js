const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(morgan('dev'));
app.use('/static', express.static(path.join(__dirname, '../public')));
/* ----------------------------reservation 3005 -----------------------*/

app.get('/api/listing', (req, res) => {
  console.log(req.query);
  axios.get(`http://localhost:3005/api/listing?listing_id=${req.query.listing_id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post('/api/reservations', (req, res) => {
  console.log(req.body);
  axios.post('http://localhost:3005/api/reservations', req.body)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get('/api/reservations', (req, res) => {
  axios.get(`http://localhost:3005/api/reservations?listing_id=${req.query.listing_id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

/* ---------------------------gallery 3061---------------------*/

app.get('/data/:id', (req, res) => {
  console.log(req.params);
  axios.get(`http://localhost:3061/data/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
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
/* -------------------------more places 1128 -----------------------*/
app.get('/place', (req, res) => {
  const id = req.query.roomid;
  axios.get(`http://localhost:1128/place?roomid=${id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

