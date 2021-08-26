import { useGIF } from 'api/useGIF';

const SearchGIF = () => {
	const trendingPreload = useGIF('/trending');

	return (
		<div className='absolute flex flex-col gap-4 px-4 py-2 overflow-y-scroll bg-gray-200 rounded-md shadow-lg max-h-80 w-72 top-12'>
			<input
				type='text'
				className='w-full h-8 outline-none rounded-3xl'
				onClick={(e) => e.stopPropagation()}
			/>
			<div className='flex flex-col gap-2'>
				{trendingPreload.isData &&
					trendingPreload.isData.data.map((gif) => <div>{gif.title}</div>)}
			</div>
		</div>
	);
};
export default SearchGIF;
