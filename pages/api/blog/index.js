import condb from '../../../condb/condb';
import Content from "../../../models/content.model";

export default async function blog(req, res) {
    const { title, description, slug } = req.body; 
    console.log("connecting db");
    await condb();
    console.log("conenectd db");
    console.log("creating doc");
    const content = await Content.create(req.body)
    console.log("created doc");

    res.status(200).json({content});
}