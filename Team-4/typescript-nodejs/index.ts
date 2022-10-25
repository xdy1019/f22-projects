import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello! My name is John Bestavros, and this is DS219 Team 4. Here is our base webpage, running locally!');

})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})