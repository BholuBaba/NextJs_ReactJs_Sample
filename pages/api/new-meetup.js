
//POST /api/new-meetup
import {MongoClient} from 'mongodb';
async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body;

        const { title, image, address, description} = data;

        //Storing data into database Mongodb
        const client = await MongoClient.connect('Connection string');
        const db = client.db();

        const meetupsCollection = db.collection('database_name');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
    }
}
export default handler;