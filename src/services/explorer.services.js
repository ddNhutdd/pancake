import { axiosWithoutAuth } from 'src/services/index.js';

export const getBlock = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestBlocks');
	} catch (error) { }
};

export const getBlockDetail = (data) => {
	try {
		return axiosWithoutAuth(
			'api/explorer/getDetailBlock?blockIdentifier=' + data,
		);
	} catch (error) { }
};

export const getLatestTransactions = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestTransactions');
	} catch (error) { }
};

export const getTransactionDetail = (data) => {
	try {
		return axiosWithoutAuth(
			'api/explorer/getTransaction?transactionHash=' + data,
		);
	} catch (error) { }
};

export const getExchangeRateBNBtoUSD = () => {
	try {
		return axiosWithoutAuth('api/explorer/getExchangeRateBNBtoUSD');
	} catch (error) { }
};

export const getTransactionReceiptEventLogs = (data) => {
	try {
		return axiosWithoutAuth(
			'api/explorer/getTransactionReceiptEventLogs?transactionHash=' +
			data,
		);
	} catch (error) { }
};

export const getBlockReward = (data) => {
	try {
		return axiosWithoutAuth(
			'api/explorer/getBlockReward?blockIdentifier=' + data,
		);
	} catch (error) { }
};

export const getAddressData = (data) => {
	try {
		return axiosWithoutAuth('api/explorer/getAddressData?address=' + data);
	} catch (error) { }
};

export const getLatestTransactionsByAddress = (address) => {
	try {
		return axiosWithoutAuth(
			'api/explorer/getLatestTransactionsByAddress?address=' + address,
		);
	} catch (error) { }
};

export const search = (keyword) => {
	try {
		return axiosWithoutAuth.post('api/explorer/search', {
			keyword,
		});
	} catch (error) { }
};

export const getCurrentBlockNumber = () => {
	try {
		return axiosWithoutAuth('api/explorer/getCurrentBlockNumber');
	} catch (error) { }
};

export const getListPaginatedBlocks = (page, limit) => {
	try {
		return axiosWithoutAuth(
			`api/explorer/getListPaginatedBlocks?limit=${limit}&page=${page}`,
		);
	} catch (error) { }
};

export const getListPaginatedTransactions = (page, limit) => {
	try {
		return axiosWithoutAuth(`api/explorer/getListPaginatedTransactions?limit=${limit}&page=${page}`);
	} catch (error) {
	}
}

export const getContractData = (address) => {
	try {
		return axiosWithoutAuth(`api/explorer/getContractData?address=${address}`);
	} catch (error) {
	}
}

export const getDetailToken = (address) => {
	try {
		return axiosWithoutAuth(`api/explorer/getDetailToken?address=${address}`);
	} catch (error) {
		console.log(error);
	}
}
