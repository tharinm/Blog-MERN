const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
   // console.log('This is main URL')
})

app.listen(8080, () => {
    console.log('Backend is running..!')
})
