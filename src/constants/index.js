import { defaultConfig } from '@web3modal/ethers/react';

export const url = {
  home: "/",
  swap: "/swap",
  staking: '/staking',
  cakeStaking: '/cake-staking',
  profile: '/profile'
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