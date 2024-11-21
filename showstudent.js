import { MongoClient } from 'mongodb';
const uri = "mongodb://localhost:27017";
const dbName = "411630337";
const connectionName = "studentlist";

(async () => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("成功連結到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(connectionName);
        const student = await collection.find().toArray();
        console.log("學生資料列表: ");
        student.forEach(student => {
            console.log(student);
        });
    } catch (error) {
        console.error("發生錯誤", error);
    } finally {
        await client.close();
        console.log("已斷開 MongoDB 連接");
    }

}
)();