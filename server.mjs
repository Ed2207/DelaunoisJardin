import express from 'express';
import path from 'path';


const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static('public'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
