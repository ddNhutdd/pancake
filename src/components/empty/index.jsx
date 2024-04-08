import {TbDatabaseX} from 'react-icons/tb';
import css from './empty.module.scss';

export default function Empty() {
	return (
		<div className={css.empty}>
			<div>
				<TbDatabaseX />
			</div>
			No Data
		</div>
	);
}
