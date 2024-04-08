import Search from './search';
import css from './top.module.scss';

export default function Top() {
	return (
		<div className={css.top}>
			<div className={css.container}>
				<div className={css.top__header}>BNB Smart Chain Explorer</div>

				<div className={css.top__search}>
					<Search />
				</div>

				<div className={css.top__text}>
					<span className={css['top__text--bold']}>Featured:</span>{' '}
					<span className={css['top__text--opacity']}>
						Build Precise & Reliable Apps with
					</span>{' '}
					<span className={css['top__text--bold']}>BscScan APIs</span>
					.{' '}
					<span className={css['top__text--blue']}>Learn More!</span>
				</div>
			</div>
		</div>
	);
}
