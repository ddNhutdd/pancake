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
		return axiosWithoutAuth('api/explorer/getDetailBlock?blockIdentifier=' + data)
	} catch (error) {
		console.log(error);
	}
}

export const getLatestTransactions = () => {
	try {
		return axiosWithoutAuth('api/explorer/getLatestTransactions')
	} catch (error) {
		console.log(error);
	}
}