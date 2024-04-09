import {location} from 'src/constants';
import * as XLSX from 'xlsx/xlsx.mjs';

export const setLocalStorage = (key, data) => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		error;
	}
};

export const getLocalStorage = (key) => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (error) {
		error;
	}
};

export const removeLocalStorage = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		error;
	}
};

export const debounce = function (func, ms) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), ms);
	};
};

export const createIntersectionObserve = (htmlElement, animationClass) => {
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.2,
	};
	const callback = function (entries) {
		for (const entry of entries) {
			const element = entry.target;
			if (!entry.isIntersecting) return;
			else
				!element.classList.contains(animationClass) &&
					element.classList.add(animationClass);
		}
	};

	const observer = new IntersectionObserver(callback, options);
	const element = document.getElementById(htmlElement);
	observer.observe(element);
	return observer;
};
export const addAnimation = (listId, listAnimation) => {
	const listObserse = [];
	for (let i = 0; i < listId.length; i++) {
		const temp = createIntersectionObserve(
			listId.at(i),
			listAnimation.at(i),
		);
		listObserse.push(temp);
	}
	return listObserse;
};

export const truncatedWalletAddress = (address) => {
	try {
		const last4Chars = address.slice(-4);
		return `0x...${last4Chars}`;
	} catch (error) {
		error;
		return `0x...`;
	}
};

export const scrollToTop = () => {
	document.documentElement.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

export const countCharacterOccurrences = (str, char) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) {
			count++;
		}
	}
	return count;
};

export const generateString = (char, numChars) => {
	let result = '';
	for (let i = 0; i < numChars; i++) {
		result += char;
	}
	return result;
};

export const formatDay = (format, value) => {
	const day = value.getDate();
	const month = value.getMonth() + 1;
	const year = value.getFullYear();

	const countNumberDay = countCharacterOccurrences(format, 'd');
	const dayString = day.toString().padStart(countNumberDay, '0');

	const countNumberMonth = countCharacterOccurrences(format, 'M');
	const monthString = month.toString().padStart(countNumberMonth, '0');

	const countNumberYear = countCharacterOccurrences(format, 'y');
	const yearString = year.toString().padStart(countNumberYear, '0');

	const result = format
		.replace(generateString('d', countNumberDay), dayString)
		.replace(generateString('M', countNumberMonth), monthString)
		.replace(generateString('y', countNumberYear), yearString);
	return result;
};

export const hasKey = (obj, key) => {
	if (!obj || !key) return false;
	const keys = Object.keys(obj);
	return keys.includes(key);
};

export const formatNumber = (value, locales = location.en, digits) => {
	if (digits) {
		return new Intl.NumberFormat(locales, {
			maximumSignificantDigits: digits,
		}).format(value);
	} else {
		return new Intl.NumberFormat(locales).format(value);
	}
};

export const addClass = (element, className) => {
	if (!element) return;
	!element.classList.contains(className) && element.classList.add(className);
};

export const removeClass = (element, className) => {
	if (!element) return;
	element.classList.remove(className);
};

export const convertBnbToUsd = (bnbAmount, exchangeRate) => {
	if (typeof bnbAmount !== 'number' || typeof exchangeRate !== 'number') {
		('Số lượng BNB và tỷ giá hối đoái phải là số');
	}

	if (bnbAmount < 0 || exchangeRate <= 0) {
		('Số lượng BNB và tỷ giá hối đoái phải là số');
	}

	const usdAmount = bnbAmount * exchangeRate;
	return usdAmount.toFixed(2);
};

/**
 * Trả về giây, phút hoặc giờ + với text ago
 * @param {*} timestamp
 * @returns
 */
export const getTimeAgo = (timestamp) => {
	const currentTime = Math.floor(Date.now() / 1000);
	const seconds = currentTime - timestamp;

	if (seconds < 60) {
		return `from ${seconds} secs ago`;
	} else if (seconds < 3600) {
		const minutes = Math.floor(seconds / 60);
		return `from ${minutes} mins ago`;
	} else if (seconds < 86400) {
		const hours = Math.floor(seconds / 3600);
		return `from ${hours} hours ago`;
	} else {
		const days = Math.floor(seconds / 86400);
		return `from ${days} days ago`;
	}
};

export const shortenHash = (hash) => {
	if (!hash) return;
	const length = hash.length;
	if (length <= 12) {
		return hash;
	}
	const prefix = hash.substring(0, 6);
	const suffix = hash.substring(length - 6);
	return `${prefix}...${suffix}`;
};

export const exportExcel = function (data, nameSheet, nameFile) {
	return new Promise((resolve) => {
		let wb = XLSX.utils.book_new();
		let ws = XLSX.utils.json_to_sheet(data);
		XLSX.utils.book_append_sheet(wb, ws, nameSheet);
		XLSX.writeFile(wb, `${nameFile}.xlsx`);
		resolve(true);
	});
};

export const caclAbsTimestamp = (t1, t2) => Math.abs(t1 - t2);

/**
 * Trả về second ago
 * @param {*} t1
 * @returns
 */
export const calcTimeCreate = (t1) => {
	const now = new Date().getTime();
	const result = caclAbsTimestamp(t1 * 1000, now);
	return Math.floor(result / 1000);
};

/**
 * Lấy time ago với utc +7
 * @param {*} timestamp
 * @returns
 */
export const calcTimestamp = (timestamp) => {
	// Chuyển đổi timestamp sang Date
	const date = new Date(timestamp * 1000);

	// Lấy thông tin thời gian
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const day = date.getDate();
	const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
	const year = date.getFullYear();

	// Tính toán thời gian trôi qua
	const currentTime = Date.now();
	const timeDiff = currentTime - timestamp * 1000;
	const secondsAgo = Math.floor(timeDiff / 1000);
	const minutesAgo = Math.floor(secondsAgo / 60);
	const hoursAgo = Math.floor(minutesAgo / 60);

	// Xác định đơn vị thời gian
	let timeUnit = 'seconds';
	let timeAmount = secondsAgo;

	if (minutesAgo >= 1) {
		timeUnit = 'minutes';
		timeAmount = minutesAgo;
	}

	if (hoursAgo >= 1) {
		timeUnit = 'hours';
		timeAmount = hoursAgo;
	}

	// Định dạng chuỗi thời gian
	const formattedTime = `${timeAmount} ${timeUnit} ago`;
	const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm} UTC + 7`;

	// Trả về chuỗi kết quả
	return `${formattedTime} (${formattedDate})`;
};

export const formatTimestamp = (timestamp) => {
	const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
