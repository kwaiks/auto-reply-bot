const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/project";

class Mongo {
    constructor(){
        this.client = new MongoClient(uri, {useUnifiedTopology: true});
    }
    async init() {
        try {
            await this.client.connect();
            this.db = await this.client.db("project");
        }catch(err){
            console.error(err);
            this.client.close();
        }
    }
}

module.exports = new Mongo();