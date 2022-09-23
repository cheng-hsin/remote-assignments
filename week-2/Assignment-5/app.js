const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!!</h1>');
});
app.get('/data', (req, res) => {
  const data = req.query.data;
  const number = req.query.number;
  var sum = 0;
  var count = number;

  if (number && isNaN(number) == false) {
    for (var i = 1; i <= count; i++) {
      sum += i;
    }
    res.send(`${sum}`);
  } else if (number && isNaN(number) == true) {
    res.send('Wrong Parameter');
  } else {
    res.send('Lack of Parameter');
  }

  return res.json({
    data: req.query.data,
    number: req.query.number,
  });
});
// app.use((req, res, next) => {
//   console.log('Hello');
//   const err = new Error('Oh noes!');
//   err.status = 500;
//   next(err);
// });

// app.use((req, res, next) => {
//   console.log('World');
//   next();
// });

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   res.render('error');
// });

// app.get('/data/:id', (req, res) => {
//   var id = req.params.id;
//   if (isNaN(id) == true) {
//     res.send('<h1>Wrong Parameter</h1>');
//   } else {
//     var sum = 0;
//     for (var i = 1; i <= id; i++) {
//       sum += i;
//     }
//     res.send(`<h1>${sum}</h1>`);
//   }
// });

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
