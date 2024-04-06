import {axiosWithoutAuth} from 'src/services/index.js'

export const getBlock = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestBlocks');
	} catch (error) {
		console.log(error);
	}
}

export const getBlockDetail = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getDetailBlock?blockIdentifier=' + data);
	} catch (error) {
		console.log(error);
	}
}

export const getLatestTransactions = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestTransactions');
	} catch (error) {
		console.log(error);
	}
}

export const getTransactionDetail = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getTransaction?transactionHash=' + data);
	} catch (error) {
		console.log(error);
	}
}

export const getExchangeRateBNBtoUSD = () => {
	try {
		return axiosWithoutAuth('api/explorer/getExchangeRateBNBtoUSD');
	} catch (error) {
		console.log(error);
	}
}

export const getTransactionReceiptEventLogs = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getTransactionReceiptEventLogs?transactionHash=' + data)
	} catch (error) {
		console.log(error);
	}
}

export const getBlockReward = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getBlockReward?blockIdentifier=' + data)
	} catch (error) {
		console.log(error);
	}
}

export const getAddressData = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getAddressData?address=' + data)
	} catch (error) {
		console.log(error);
	}
}