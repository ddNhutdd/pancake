import { defaultConfig } from '@web3modal/ethers/react';

export const url = {
  home: "/home-cake",
  swap: "/swap",
  staking: '/staking',
  cakeStaking: '/cake-staking',
  profile: '/profile',
  home2: "/",
  transactions: "/transactions",
  transactionsPending: '/transactions-pending',
  login: '/login',
  register: '/register',
  contractInternalTransactions: '/contract-internal-transactions',
  viewBlock: '/view-blocks',
  passwordRecovery: '/password-recovery',
  forkedBlocks: '/forked-blocks',
  topAccount: '/top-account',
  verifiedContracts: "/verified-contracts",
  validatorsLeaderboard: "/validators-leaderboard",
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
  accountBalanceChecker: '/account-balance-checker'
};

export const localStorageVariable = {
  darkTheme: "darkTheme",
};

export const chainList = [
  { 
    blockChain: 'Ethereum Mainnet',
    ChainID: '1',
    Currency: 'ETH'
  },
  { 
    blockChain: 'BNB Smart Chain Mainnet',
    ChainID: '56',
    Currency: 'BNB'
  },
]

// config web3
export const  projectId = '5cfce0ac0d25591fa3ce98011db61342';
export const  mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}
export const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: '...',
  defaultChainId: 1,
})

// string 
export const commonString = {
  success: 'Success',
  tooLong: 'Too long',
  tooShort: 'Too short',
  require: 'Require',
  formatInvalid: 'Format invalid',
  emailNotMatch: 'Email not match',
  passwordNotMatch: 'Password not match'
}

export const regular = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
} 

export const dateFormat = `d-M-yyyy`;