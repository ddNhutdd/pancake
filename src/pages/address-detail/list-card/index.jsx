import Card from "src/components/card";
import css from "./list-card.module.scss";

const ListCard = function () {
	return (<div className={css.listCard}>
		<Card className={css.listCard__card}>
			<div className={css.listCard__header}>
				Overview
			</div>
			<div className={css.listCard__record}>
				<div className={css.listCard__record__title}>
					BNB BALANCE
				</div>
				<div className={css.listCard__record__content}>
					<img src="https://bscscan.com/assets/bsc/images/svg/logos/token-light.svg?v=24.3.4.0" alt="bnb" />
					1.133365125520722458 BNB
				</div>
			</div>
			<div className={css.listCard__record}>
				<div className={css.listCard__record__title}>
					BNB VALUE
				</div>
				<div className={css.listCard__record__content}>
					$655.50 (@ $578.37/BNB)
				</div>
			</div>
			<div className={css.listCard__record}>
				dropdown
			</div>
		</Card>
		<Card className={css.listCard__card}>
			<div className={css.listCard__header}>
				More Info
			</div>
			<div className={css.listCard__record}>
				<div className={css.listCard__record__title}>
				PRIVATE NAME TAGS
				</div>
				<div className={css.listCard__record__content}>
					Add
				</div>
			</div>
			<div className={css.listCard__record}>
				<div className={css.listCard__record__title}>
					LAST TXN SENT
				</div>
				<div className={css.listCard__record__content}>
					0x2c1c339f4eb329b3cf417b388ddd813cfea16e9e5f4dd7cf1916fa4481d92ecf
					from 57 secs ago
				</div>
			</div>
			<div className={css.listCard__record}>
				<div className={css.listCard__record__title}>
					FIRST TXN SENT
				</div>
				<div className={css.listCard__record__content}>
					0x738404f1600536254789295a501da470a48fd906e2b558d61f0e48a67a505350
					from 1236 days ago
				</div>
			</div>
		</Card>
		<Card className={css.listCard__card}>
			<div className={css.listCard__header}></div>
			<div className={css.listCard__record}></div>
			<div className={css.listCard__record}></div>
			<div className={css.listCard__record}></div>
		</Card>
	</div>)
}

export default ListCard;