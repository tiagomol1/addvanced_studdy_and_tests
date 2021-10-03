const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000
app.get('/', (req, res) => {
 
    var dataToSend;

    const python = spawn('python3', ['hello.py']);

    python.stdout.on('data', (data) => {
        console.log('> Executando script Python ...\nResultado:');
        dataToSend = data.toString();

        console.log(dataToSend)
    });

    python.on('close', (code) => {
        console.log(`> Finalizando child process ${code}`);
        res.send(dataToSend)
    });
 
})

app.listen(port, () => console.log(`> listening on port ${port}!`))