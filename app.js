import express from 'express';
import router from './routers/books.js'

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('/books', router);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`)
});