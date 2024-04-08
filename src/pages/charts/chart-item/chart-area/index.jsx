import {AreaChart, Area, ResponsiveContainer} from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 4300,
		amt: 2100,
	},
];

export default function ChartArea() {
	return (
		<ResponsiveContainer
			width={`100%`}
			height={200}
		>
			<AreaChart
				data={data}
				margin={{
					top: 5,
					right: 0,
					left: 0,
					bottom: 5,
				}}
				style={{cursor: 'pointer'}}
			>
				<defs>
					<linearGradient
						id='colorUv'
						x1='0'
						y1='0'
						x2='0'
						y2='1'
					>
						<stop
							offset='5%'
							stopColor='#dddddd'
							stopOpacity={0.8}
						/>
						<stop
							offset='95%'
							stopColor='#dddddd'
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>
				<Area
					type='monotone'
					dataKey='uv'
					stroke='#b4b4b8'
					fill='url(#colorUv)'
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}
