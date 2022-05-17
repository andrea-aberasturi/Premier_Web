const express = requiere('express');
const request = requiere('request');

const app = express();

app.listen(3000, ()=>{
    console.log('Server est marcchée')
})