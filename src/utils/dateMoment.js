export default function getMonth(type) {
	const date = new Date();
	if (type == 1) {
		if (date.getMonth() === 0) {
			date.setFullYear(date.getFullYear() - 1);
			date.setMonth(11); // 十二月份
		} else {
			date.setMonth(date.getMonth() - 1);
		}
	}
	const lastMonth = date.toISOString().slice(0, 7);
	const month = date.toISOString().slice(0, 7);
	if (type) {
		return month;
	} else {
		return lastMonth;
	}
}
