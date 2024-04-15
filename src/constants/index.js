
export const urlParams = {
	blockNumber: ':blocknumber',
	transactionNumber: ':transactionnumber',
	addressNumber: ':addressnumber',
	tokenNumber: ':tokennumber'
};

export const url = {
	home2: '/',
	transactions: '/transactions',
	transactionsPending: '/transactions-pending',
	login: '/login',
	register: '/register',
	contractInternalTransactions: '/contract-internal-transactions',
	viewBlock: '/view-blocks',
	passwordRecovery: '/password-recovery',
	forkedBlocks: '/forked-blocks',
	topAccount: '/top-account',
	verifiedContracts: '/verified-contracts',
	validatorsLeaderboard: '/validators-leaderboard',
	setInfo: '/set-info',
	topToken: '/top-token',
	settings: '/settings',
	tokenTransfer: '/token-transfer',
	nftTop: '/nft-top',
	topMint: '/top-mind',
	nftTrades: '/nft-trades',
	charts: '/charts',
	topStatics: '/top-statics',
	unitConverter: '/unit-converter',
	csvExport: '/csv-export',
	accountBalanceChecker: '/account-balance-checker',
	tokenSupplyChecker: '/token-supply-checker',
	similarContractsSearch: '/similar-contracts-search',
	blockDetail: '/block-detail/' + urlParams.blockNumber,
	transactionDetail: '/transaction-detail/' + urlParams.transactionNumber,
	addressDetail: '/address-detail/' + urlParams.addressNumber,
	searchNotFound: '/search-not-found',
	token: '/token/' + urlParams.tokenNumber,
};

export const localStorageVariable = {
	darkTheme: 'darkTheme',
	search: '',
};

export const chainList = [
	{
		blockChain: 'Ethereum Mainnet',
		ChainID: '1',
		Currency: 'ETH',
	},
	{
		blockChain: 'BNB Smart Chain Mainnet',
		ChainID: '56',
		Currency: 'BNB',
	},
];

export const headerTime = {
	age: 'Age',
	dateTime: 'Date Time (UTC + 7)'
}
export const headerTimePopup = {
	age: 'Click to show datetime format',
	dateTime: 'Click to show age format'
}
export const headerTimeDefault = headerTime.dateTime;
export const headerTimePopupDefault = headerTimePopup.dateTime;


// string
export const commonString = {
	success: 'Success',
	tooLong: 'Too long',
	tooShort: 'Too short',
	require: 'Require',
	formatInvalid: 'Format invalid',
	emailNotMatch: 'Email not match',
	passwordNotMatch: 'Password not match',
	getLastedTransactionFail: 'Get Lasted Transaction Fail',
	contract: 'Contract',
	address: 'Address',
	transfer: 'Transfer'
};

export const regular = {
	email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

export const dateFormat = `d-M-yyyy`;

//api status
export const apiStatus = {
	pending: 'pending',
	fetching: 'fetching',
	fullfiled: 'fullfiled',
	rejected: 'rejected',
};

//locates
export const location = {
	en: 'en-US',
	vi: 'vi-VN',
};

//transaction status
export const transactionStatus = {
	success: 'Success',
	unKnow: 'Unknow',
};

// transaction type 
export const transactionType = {
	transfer: 2,

}

export const searchType = {
	transaction: 'transaction',
	addressEoa: 'address-eoa',
	addressContract: 'address-contract',
	block: 'block',
};

export const apiResponse = {
	notFound: 'Not found',
};
