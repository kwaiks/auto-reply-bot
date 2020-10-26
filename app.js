const loader = require('./config/loader');
const nlp = require('./modules/nlp');
const mongo = require('./config/db');

const app = loader.initialize();

app.post("/chat", async (req,res) => {
    const {question} = req.body;
    const response = await nlp.ask('en', question);
    res.status(200).send(response)
})

app.post("/tes", async (req,res) => {
    console.log(req.body)
    const request = req.body;
    try {
        await mongo.db.collection("chat-bot").insertOne(request)
    }catch(err){
        console.error(err)
    }
    res.status(200).send("Success")
})

app.listen(4002, ()=>{
    console.log("Server started at 4002")
})