import { getMinifiedItem, marketingTable } from "./../../utils/airtable";
import { getAllInfoByISO } from "iso-country-currency";
import requestIp from 'request-ip'
/* eslint-disable import/no-anonymous-default-export */

//use email address to generate a key for the user
// the format is the names listed in the email address before the @ sign + a 3 to 6 digit number
// it should take any number of names and generate a key
const generateKey = (email:string) => {
	const names = email.split("@")[0].split(".")
	const key = names[0] + Math.floor(Math.random() * 100000)
	return key
}


export default async (req: any, res: any) => {
	try {
		// first check if body.email already exists in the table
		const body = req.body
		body.email = (body?.email || "").trim().toLocaleLowerCase()
		const ip = requestIp.getClientIp(req) //req?.connection?.remoteAddress?.split(":")[req?.connection?.remoteAddress?.split(":")?.length-1]
		const country = (await fetch(`https://ipinfo.io/${ip}/json`).then(res => res.json()))
		const existingRecords = await marketingTable
			.select({ filterByFormula: `Email = '${body.email}'` })
			.firstPage();
		const formattedRecords = existingRecords.map(getMinifiedItem);

		if (!formattedRecords.length) {
			const id = generateKey(body?.email)
			let referrer;
			if(!!body?._referrer){
				referrer = await marketingTable
				.select({ filterByFormula: `Key = '${body?._referrer}'` })
				.firstPage();
				
				if(referrer.length>0){
					const currentRef = parseInt((referrer[0]?.fields?.Referrals || 0).toString())
					await referrer[0].updateFields({"Referrals": currentRef + 1})

					const super_referrer = await marketingTable
					.select({ filterByFormula: `Key = '${referrer[0]?.fields?.ReferredBy}'` })
					.firstPage();
					if(super_referrer.length>0){
						const ref = parseInt((super_referrer[0]?.fields?.Network || 0).toString())
						await super_referrer[0].updateFields({"Network": ref + 1})
					}
				}
			}
			const newRecords = await marketingTable.create([{fields:{
				Email: body?.email,
				Key: id,
				Referrals: 0,
				Network: 0,
				Country: country?.country || ip,
				Date: new Date(Date.now()).toISOString(),
				...referrer && {ReferredBy: referrer[0]?.fields.Key}
			}}]);
			res.status(200).json(getMinifiedItem(newRecords[0]));
		} else {
			res.status(200).json(formattedRecords[0]);
		}
	} catch (err) {
		console.error(err);
		throw "Something went wrong";
	}
};
