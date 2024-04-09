import { useEffect, useState } from 'react';
import { Dropdown } from '../dropdown';
import Paging2 from '../paging-2';
import css from './table.module.scss';
import Loader from '../loader';
import Empty from '../empty';
import PropTypes from 'prop-types';
import { listShowRow } from './list-show-row.js';

export const tableRow = listShowRow?.at(0).content;

function Table(props) {
	const {
		listCol,
		listRecord,
		fetching,
		headerLeftContent,
		page,
		totalPage,
		pageChangeHandle,
		showPagingTop,
		showHeader,
		showFooter,
		showRowChangeHandle,
	} = props;

	const [totalCol, setTotalCol] = useState(0);

	const [dropdownRowSelected, setDropdownRowSelected] = useState(
		listShowRow?.at(0),
	);

	const dropdownRowChangeHandle = (item) => {
		setDropdownRowSelected(item);
		showRowChangeHandle(item.content);
	};
	const renderShowFetching = () => {
		return fetching ? '' : 'd-0';
	};
	const renderShowEmpty = () => {
		return (!listRecord || listRecord.length <= 0) && fetching !== true
			? ''
			: 'd-0';
	};
	const renderMainData = () => {
		return listRecord && listRecord.length > 0 && fetching !== true
			? ''
			: 'd-0';
	};
	const renderTableHeader = () => {
		if (!listCol || listCol.length <= 0) {
			return;
		}

		return listCol.map((item) => <th key={item.id}>{item.header}</th>);
	};
	const renderTableBody = () => {
		if (!listRecord || listRecord.length <= 0) {
			return;
		}

		const renderCol = (arr) =>
			arr.map((item, index) => <td key={index}>{item}</td>);

		return listRecord.map((item) => (
			<tr key={item.id}>{renderCol(item.cols)}</tr>
		));
	};
	const renderClassShowTopPaging = () => {
		return showPagingTop ? '' : 'd-0';
	};
	const renderClassShowHeader = () => {
		return showHeader ? '' : 'd-0';
	};
	const renderClassShowFooter = () => {
		return showFooter ? '' : 'd-0';
	};
	const renderPaddingWithShowFooter = () => (showFooter ? 0 : 20);
	const renderClassHideItemWhenFetching = () => fetching ? css['table--hide'] : '';

	useEffect(() => {
		setTotalCol(listCol?.length || 0);
	}, [listCol]);

	return (
		<div className={css.table}>
			<div className={`${css.table__header} ${renderClassShowHeader()}`}>
				<div className={css.table__header__left}>
					{headerLeftContent}
				</div>
				<div
					className={`${css.table__header__right} ${renderClassShowTopPaging()}
					${renderClassHideItemWhenFetching()}
					`}
				>
					<Paging2
						page={page}
						totalPage={totalPage}
						onChange={pageChangeHandle}
					/>
				</div>
			</div>
			<div
				style={{ paddingBottom: renderPaddingWithShowFooter() }}
				className={css.table__container}
			>
				<table>
					<thead>
						<tr>{renderTableHeader()}</tr>
					</thead>
					<tbody className={renderMainData()}>
						{renderTableBody()}
					</tbody>
					<tbody className={renderShowFetching()}>
						<tr>
							<td colSpan={totalCol}>
								<Loader />
							</td>
						</tr>
					</tbody>
					<tbody className={renderShowEmpty()}>
						<tr>
							<td colSpan={totalCol}>
								<Empty />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={`${css.table__footer} ${renderClassShowFooter()} ${renderClassHideItemWhenFetching()}`}>
				<div className={css.table__footer__left}>
					<span>Show rows:</span>
					<span>
						<Dropdown
							id={`transactionRowDropdownd`}
							selectedItem={dropdownRowSelected}
							onChange={dropdownRowChangeHandle}
							list={listShowRow}
						/>
					</span>
				</div>
				<div className={css.table__footer__right}>
					<Paging2
						page={page}
						totalPage={totalPage}
						onChange={pageChangeHandle}
					/>
				</div>
			</div>
		</div>
	);
}

Table.propTypes = {
	listCol: PropTypes.array,
	listRecord: PropTypes.array,
	fetching: PropTypes.bool,
	headerLeftContent: PropTypes.node,
	page: PropTypes.number,
	totalPage: PropTypes.number,
	pageChangeHandle: PropTypes.func,
	showPagingTop: PropTypes.bool,
	showHeader: PropTypes.bool,
	showFooter: PropTypes.bool,
	showRowChangeHandle: PropTypes.func,
};

Table.defaultProps = {
	fetching: false,
	page: 1,
	totalPage: 1,
	pageChangeHandle: () => { },
	showPagingTop: true,
	showHeader: true,
	showFooter: true,
};

export default Table;
