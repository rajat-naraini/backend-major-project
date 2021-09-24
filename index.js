const express = require('express')
const app = express()
const port = 8000


app.listen(port, (err)=>{
    if (err) {
        console.log('Err::',err);
    }
    console.log(`Server is running on port : ${port}`);
})