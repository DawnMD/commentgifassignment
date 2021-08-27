import { useGIF } from 'api/useGIF';
import GIF from '../GIF';

const SearchGIF = (props) => {
	let trendingPreload = useGIF('/trending');

	return (
		<div className='absolute flex flex-col gap-4 px-4 py-2 overflow-y-scroll bg-gray-200 rounded-md shadow-lg max-h-80 w-72 top-12'>
			<input
				type='text'
				className='w-full h-8 outline-none rounded-3xl'
				onClick={(e) => e.stopPropagation()}
			/>
			<div className='flex flex-col gap-2'>
				{trendingPreload.isLoading && (
					<small className='font-light text-center'>Loading...</small>
				)}
				{trendingPreload.isData &&
					trendingPreload.isData.data.map((gif) => (
						<GIF
							src={gif.images.downsized.url}
							alt={gif.title}
							onClick={() => props.onClickGIF(gif)}
							key={gif.id}
						/>
					))}
				{trendingPreload.isError && (
					<small className='font-light text-center text-red-100'>
						Error loading GIFs
					</small>
				)}
			</div>
		</div>
	);
};
export default SearchGIF;
