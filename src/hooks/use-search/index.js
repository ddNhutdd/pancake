import {useState} from 'react';
import {apiStatus, searchType, url, urlParams} from 'src/constants';
import {search} from 'src/services/explorer.services';
import {useNavigate} from 'react-router-dom';

export const useSearch = function () {
	const [fetchApiStatus, setFetchApiStatus] = useState(apiStatus.pending);
	const [error, setError] = useState();
	const navigate = useNavigate();

	const redirectPage = (searchData) => {
		switch (searchData.type) {
			case searchType.block:
				navigate(
					url.blockDetail.replace(
						urlParams.blockNumber,
						searchData.blockNumber,
					),
				);
				return;
			case searchType.transaction:
				navigate(
					url.transactionDetail.replace(
						urlParams.transactionNumber,
						searchData.transactionHash,
					),
				);
				return;
			case searchType.addressEoa:
				navigate(
					url.addressDetail.replace(
						urlParams.addressNumber,
						searchData.address,
					),
				);
				return;
			default:
				break;
		}
	};

	const fetchSearch = async (keyword) => {
		try {
			if (fetchApiStatus === apiStatus.fetching) return;
			setFetchApiStatus((state) => apiStatus.fetching);
			const resp = await search(keyword);
			const data = JSON.parse(resp?.data?.data);
			setFetchApiStatus(apiStatus.fullfiled);
			redirectPage(data);
		} catch (error) {
			const errorMess = error?.response?.data?.message;
			setError((state) => errorMess || error);
			setFetchApiStatus(apiStatus.rejected);
		}
	};

	return [fetchApiStatus, fetchSearch, error];
};
