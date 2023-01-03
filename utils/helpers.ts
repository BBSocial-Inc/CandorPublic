export default function getNumberSuffix(number: number): string {
	/**
	 * example: 1 => 1st
	 * example: 2 => 2nd
	 */

	const lastDigit = number % 10;
	const lastTwoDigits = number % 100;

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `${number}st`;
	}

	if (lastDigit === 2 && lastTwoDigits !== 12) {
		return `${number}nd`;
	}

	if (lastDigit === 3 && lastTwoDigits !== 13) {
		return `${number}rd`;
	}

	return `${number}th`;
}

export const numberFormatter = (num: number, digits: number): string => {
	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
	];

	const item = lookup
		.slice()
		.reverse()
		.find((item) => num >= item.value);

	return item
		? (num / item.value)
				.toFixed(digits)
				.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + item.symbol
		: "0";
};

const endDate = new Date("2023-03-15T00:00:00");

// a function that gets the current date and the remaining days, hours , minutes and seconds to the end date
export const getRemainingTime = () => {
	const currentDate = new Date();
	const total = endDate.getTime() - currentDate.getTime();
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds,
	};
}

export const getHiddenEmail = (email: string, hide:boolean=true): string => {
	if (!hide) return email;
	const [first, second] = email.split("@");
	const firstLetters = first.slice(0, 4);
	const hiddenEmail = `${firstLetters}*****@${second}`;
	return hiddenEmail;
}