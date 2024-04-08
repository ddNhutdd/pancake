import Card from 'src/components/card';
import css from './chart-item.module.scss';
import ChartArea from './chart-area';

function ChartItem() {
	return (
		<div className={css.chartItem}>
			<Card className={css.chartItem__card}>
				<div className={css.chartItem__header}>
					BNB Daily Price (USD) Chart
				</div>
				<div>
					<ChartArea />
				</div>
			</Card>
		</div>
	);
}

export default ChartItem;
