import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
  }}
);

  

app.post('/', (req, res)=>{
    const { name, prenon, email, telephone, message } = req.body;
    
    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: `Demande de Devis de ${name} ${prenon}`,
        text: `Email: ${email}\nPhone: ${telephone}\nMessage: ${message}`,
      };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Erro" + error);
        //   res.status(500).send('Internal Server Error');
        } else {
         res.send('Demande envoyé');
        }
      });
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
