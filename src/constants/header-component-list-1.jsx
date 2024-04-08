import {CiShare1} from 'react-icons/ci';
import {url as urlConstant} from './index';

export const HeaderComponentList1 = [
	{content: 'Swap', url: urlConstant.swap},
	{content: 'Liquidity'},
	{
		content: (
			<>
				Perpetual <CiShare1 style={{fontWeight: 600}} />
			</>
		),
	},
	{
		content: (
			<>
				Bridge <CiShare1 />
			</>
		),
	},
	{content: 'Limit (V2)'},
	{content: 'Buy Crypto'},
	{content: 'Trading Reward'},
];
