import { axiosWithoutAuth } from 'src/services/index.js'

export const getBlock = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestBlocks');
	} catch (error) {
	}
}

export const getBlockDetail = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getDetailBlock?blockIdentifier=' + data);
	} catch (error) {
	}
}

export const getLatestTransactions = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestTransactions');
	} catch (error) {
	}
}

export const getTransactionDetail = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getTransaction?transactionHash=' + data);
	} catch (error) {
	}
}

export const getExchangeRateBNBtoUSD = () => {
	try {
		return axiosWithoutAuth('api/explorer/getExchangeRateBNBtoUSD');
	} catch (error) {
	}
}

export const getTransactionReceiptEventLogs = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getTransactionReceiptEventLogs?transactionHash=' + data)
	} catch (error) {
	}
}

export const getBlockReward = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getBlockReward?blockIdentifier=' + data)
	} catch (error) {

	}
}

export const getAddressData = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getAddressData?address=' + data)
	} catch (error) {

	}
}

export const getLatestTransactionsByAddress = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestTransactionsByAddress?address=' + data);
	} catch (error) {
	}
}

export const search = (keyword) => {
	try {
		return axiosWithoutAuth.post('api/explorer/search', {
			keyword
		})
	} catch (error) {
		console.log(error);
	}
}