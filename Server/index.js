
const express = require('express');

const app = express();

app.use(express.static('www/browser'));

const fs = require('firebase-admin');
const serviceAccount = require('./key.json');

fs.initializeApp({ credential: fs.credential.cert(serviceAccount) });
const db = fs.firestore();

app.get('/api/alumne/:id', async (req, res) => {
    try {
       const alumneRef = db.collection ("alumnes").doc(req.params.id);
       const response = await alumneRef.get();
       res.send(response.data()); 
    } catch(error) {
        res.send(error);
    }
});

app.get('/api/alumnes', async (req, res) => {
    try {
        const docsRef = await db.collection ("alumnes");
        const mainDocs = [];

        const docs = await docsRef.get();

        docs.forEach(async (doc) => {
            mainDocs.push({ ...doc.data(), _id: doc.id });
        });
        
        res.send(mainDocs); 
     } catch(error) {
         res.send(error);
     }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});