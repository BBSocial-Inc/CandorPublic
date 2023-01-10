import Airtable from "airtable";

Airtable.configure({
	apiKey: "keyHkJUPwishFYgr1",
});

const base = Airtable.base("appTOufqdDFoSg7SW");

//export const table = base(process.env.AIRTABLE_TABLE_NAME || "");

export const isComingTable = base("Is Coming Database");

export const minifyItems = (records: any) =>
	records.map((record: any) => getMinifiedItem(record));

// to make record meaningful.
export const getMinifiedItem = (record: any) => {
	if (!record.fields.brought) {
		record.fields.brought = false;
	}
	return {
		id: record.id,
		fields: record.fields,
	};
};
