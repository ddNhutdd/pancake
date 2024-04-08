import css from './info-transaction.module.scss';
import {MdArrowOutward} from 'react-icons/md';
import {GoCheckCircleFill} from 'react-icons/go';

function InfoTransaction() {
	return (
		<div className={css.infoTransaciton}>
			<div className={css.infoTransaciton__header}>Additional Info</div>
			<div className={css.infoTransaciton__record}>
				<div className={css.infoTransaciton__title}>Status:</div>
				<div
					className={`${css.infoTransaciton__text} flex items-center justify-start gap-1`}
				>
					<span
						className={`${css['infoTransaciton--green']} inline-flex items-center justify-start gap-1`}
					>
						<GoCheckCircleFill />
						Success
					</span>
					<span className={css['infoTransaciton--gray']}>
						{' '}
						(4 Block Confirmations)
					</span>
				</div>
			</div>
			<div className={css.infoTransaciton__line}></div>
			<div className={css.infoTransaciton__record}>
				<div className={css.infoTransaciton__title}>
					Transaction Fee:
				</div>
				<div className={css.infoTransaciton__text}>
					<span>0 BNB</span>
					<span className={css['infoTransaciton--gray']}>
						($0.00)
					</span>
				</div>
			</div>
			<div className={css.infoTransaciton__line}></div>
			<div className={css.infoTransaciton__record}>
				<div className={css.infoTransaciton__title}>Gas Info:</div>
				<div className={css.infoTransaciton__text}>
					<div>
						51,008 gas used from 9,223,372,036,854,775,807 limit{' '}
					</div>
					<div className={css['infoTransaciton--gray']}>
						@ 0 BNB (0 BNB)
					</div>
				</div>
			</div>
			<div className={css.infoTransaciton__line}></div>
			<div className={css.infoTransaciton__record}>
				<div className={css.infoTransaciton__title}>Nonce:</div>
				<div className={css.infoTransaciton__text}>
					<span>1923799</span>
					<span className={css['infoTransaciton--gray']}>
						{' '}
						(in the position 80)
					</span>
				</div>
			</div>
			<div className={css.infoTransaciton__line}></div>
			<div className={css.infoTransaciton__last}>
				see more details
				<div
					className={`${css['infoTransaciton--gray']} flex items-center justify-start ml-2`}
				>
					<MdArrowOutward />
				</div>
			</div>
		</div>
	);
}

export default InfoTransaction;
