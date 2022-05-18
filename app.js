const express = requiere('express');
const request = requiere('request');
const https = requiere('https');

const app = express();

//Indico con el metodo get enviar un archivo desde el directorio raiz + la entrada html que quiero mostrar
app.get('/', (req,res)=>{
    res.sendFile(__dirname +'entre.html')
});



app.listen(3000, ()=>{
    console.log('Server est marcchée')
})