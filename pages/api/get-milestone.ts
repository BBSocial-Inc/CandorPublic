/* eslint-disable import/no-anonymous-default-export */
import { getMinifiedItem, isComingTable } from "../../utils/airtable";

export default async (req: any, res: any) => {
	try {
		const records = await isComingTable.select({filterByFormula: `Key = '${req?.query?.key}'`}).firstPage();
		const formattedRecords = records.map(getMinifiedItem);
		if(formattedRecords.length>0)
			res.status(200).json(formattedRecords[0]);
		else res.status(404).json({msg: "Invalid User Data"})
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
