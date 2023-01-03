/* eslint-disable import/no-anonymous-default-export */
import { getMinifiedItem, marketingTable } from "../../utils/airtable";

export default async (req: any, res: any) => {
	try {
		const records = await marketingTable.select({}).all();
		const formattedRecords = records.map(getMinifiedItem);
		//if(formattedRecords.length>0)
		res.status(200).json(formattedRecords);
		//else res.status(404).json({msg: "Invalid User Data"})
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
