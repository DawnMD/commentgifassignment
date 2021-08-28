import { useGIF } from 'api/useGIF';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GIF from '../GIF';

const fetchSearchGIF = async (query) => {
	const data = await axios.get('https://api.giphy.com/v1/gifs/search', {
		params: {
			api_key: 'T76V8Fr3TiWY6YSc5BqkKE3medMpekoy',
			limit: 10,
			rating: 'g',
			q: query,
		},
	});
	return data;
};
const SearchGIF = (props) => {
	const [searchedGIF, setSearchedGIF] = useState(null);
	const [searchVal, setSearchVal] = useState('');
	const { isData, isError, isLoading } = useGIF('/trending');
	//setting trending results
	useEffect(() => {
		setSearchedGIF(isData);
	}, [isData]);
	//setting search results
	useEffect(() => {
		if (searchVal !== '') {
			const debounceHandle = setTimeout(async () => {
				const gifsSearch = await fetchSearchGIF(searchVal);
				setSearchedGIF(gifsSearch.data);
			}, 500);
			return () => clearTimeout(debounceHandle);
		}
	}, [searchVal]);

	return (
		<div className='absolute flex flex-col gap-4 px-4 py-2 overflow-y-scroll bg-gray-200 rounded-md shadow-lg max-h-80 w-72 top-12'>
			<input
				type='text'
				className='w-full h-8 outline-none rounded-3xl'
				onClick={(e) => e.stopPropagation()}
				value={searchVal}
				onChange={(e) => setSearchVal(e.target.value)}
			/>
			<div className='flex flex-col gap-2'>
				{isLoading && (
					<small className='font-light text-center'>Loading...</small>
				)}
				{searchedGIF &&
					searchedGIF.data.map((gif) => (
						<GIF
							src={gif.images.downsized.url}
							alt={gif.title}
							onClick={() => props.onClickGIF(gif)}
							key={gif.id}
						/>
					))}
				{isError && (
					<small className='font-light text-center text-red-100'>
						Error loading GIFs
					</small>
				)}
			</div>
		</div>
	);
};
export default SearchGIF;
