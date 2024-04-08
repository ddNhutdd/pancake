import Button2, {button2Type} from 'src/components/button-2';
import css from './search-not-found.module.scss';
import {NavLink} from 'react-router-dom';
import {localStorageVariable, url} from 'src/constants';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getLocalStorage, removeLocalStorage} from 'src/utils';

const SearchNotFound = function () {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState();

	const redirectPage = (page) => navigate(page);

	useEffect(() => {
		const search = getLocalStorage(localStorageVariable.search);
		setSearchValue(search);
		removeLocalStorage(localStorageVariable.search);
	}, []);

	return (
		<div className={css.searchNotFound}>
			<div className={css.container}>
				<div className={css.searchNotFound__content}>
					<h1>Search not found</h1>
					<p>
						<div>
							Oops! The search string you entered was:{' '}
							{searchValue}
						</div>
						<div className='mb-4'>
							Sorry! This is an invalid search string.
						</div>
					</p>
					<p className='mb-4'>
						If you think this is a problem with us, please{' '}
						<NavLink className={`--link-no-underline`}>
							tell us.
						</NavLink>
					</p>
					<div classname={`py-5`}>
						<Button2
							onClick={redirectPage.bind(null, url.home2)}
							type={button2Type.primary}
						>
							Back Home
						</Button2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchNotFound;
