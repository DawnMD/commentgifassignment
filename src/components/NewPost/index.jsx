import Container from 'components/Shared/Container';
import GIF from 'components/Shared/GIF';
import SearchGIF from 'components/Shared/SearchGIF';
import { useState } from 'react';

const NewPost = () => {
	const [gifWindow, setGifWindow] = useState(false);
	const [selectedGIF, setSelectedGIF] = useState(null);
	const handleGifWindow = () => {
		setGifWindow(!gifWindow);
	};
	return (
		<Container>
			<div className='flex items-center gap-2 bg-gray-100 rounded-tl-lg rounded-tr-lg'>
				<div className='flex items-center gap-1 px-4 py-2 font-semibold cursor-pointer '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
						/>
					</svg>
					<span>Compose Post</span>
				</div>
				<div className='flex items-center gap-1 px-4 py-2 font-semibold cursor-pointer text-facebook'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>
					<span>Photos/Videos Album</span>
				</div>
				<div className='flex items-center gap-1 px-4 py-2 font-semibold cursor-pointer text-facebook'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
						/>
					</svg>
					<span>Compose Post</span>
				</div>
			</div>
			<div className='flex gap-2 pl-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-12 h-12 text-gray-400'
					viewBox='0 0 20 20'
					fill='currentColor'>
					<path
						fillRule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
						clipRule='evenodd'
					/>
				</svg>
				<textarea
					name='comment'
					id='comment'
					cols='30'
					rows='5'
					className='w-full h-32 border-none outline-none focus:outline-none focus:ring-0'
					placeholder='Write Something Here...'
				/>
			</div>
			{selectedGIF && (
				<div className='mx-auto'>
					<GIF
						src={selectedGIF.images?.downsized?.url}
						alt={selectedGIF.title}
					/>
				</div>
			)}
			<div className='grid grid-cols-2 gap-3 px-4 py-2'>
				<div className='flex items-center gap-1 px-4 py-2 font-medium bg-gray-100 cursor-pointer rounded-3xl hover:bg-gray-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
							clipRule='evenodd'
						/>
					</svg>
					<span>Tag Friends</span>
				</div>
				<div className='flex items-center gap-1 px-4 py-2 font-medium bg-gray-100 cursor-pointer rounded-3xl hover:bg-gray-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
							clipRule='evenodd'
						/>
					</svg>
					<span>Add Location</span>
				</div>
				<div
					className='relative flex items-center gap-1 px-4 py-2 font-medium bg-gray-100 cursor-pointer rounded-3xl hover:bg-gray-200'
					onClick={handleGifWindow}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
							clipRule='evenodd'
						/>
					</svg>
					<span>GIF</span>
					{gifWindow && <SearchGIF onClickGIF={(gif) => setSelectedGIF(gif)} />}
				</div>
				<div className='flex items-center gap-1 px-4 py-2 font-medium bg-gray-100 cursor-pointer rounded-3xl hover:bg-gray-200'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
							clipRule='evenodd'
						/>
					</svg>
					<span>Tag Event</span>
				</div>
			</div>
			<div className='flex items-center justify-end gap-6 p-2 bg-gray-100'>
				<button className='flex items-center gap-1 px-2 py-1 font-medium border bg-gray-50'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 h-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={1.5}
							d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
						/>
					</svg>
					<span>Only Me</span>
				</button>
				<button className='px-3 py-1 font-medium text-gray-100 border bg-facebook'>
					Post
				</button>
			</div>
		</Container>
	);
};
export default NewPost;
