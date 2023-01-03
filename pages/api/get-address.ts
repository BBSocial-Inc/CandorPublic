import { getAllInfoByISO } from "iso-country-currency";
import requestIp from 'request-ip'

export default async (req: any, res: any) => {
	try {
		const ip = requestIp.getClientIp(req)//req?.connection?.remoteAddress?.split(":")[req?.connection?.remoteAddress?.split(":")?.length-1]
		const country = (await fetch(`https://ipinfo.io/${ip}/json`).then(res => res.json()))
		const currency = getAllInfoByISO(country.country)
		const rate = (await fetch(`https://open.er-api.com/v6/latest/${currency?.currency}`).then(res => res.json()))
		res.status(200).json({
			ip: ip,
			...country,
			...currency,
			rate: rate?.rates?.USD || 1
		});
		//else res.status(404).json({msg: "Invalid User Data"})
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ msg: "Something went wrong" });
	}
};
