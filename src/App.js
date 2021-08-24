import demoIng from './assets/images/adi-goldstein-mDinBvq1Sfg-unsplash.jpg';
function App() {
	return (
		<div className='flex flex-col items-center h-screen gap-4 p-4'>
			{/* card */}
			<div className='flex flex-col w-full gap-2 border rounded-lg shadow-lg'>
				{/* card header */}
				<div className='flex justify-between p-2'>
					<div className='flex items-center gap-1'>
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
						<div className='flex flex-col'>
							<h3 className='text-sm font-semibold'>Mainak Das</h3>
							<span className='flex items-center gap-1 text-xs text-gray-500'>
								<span>24 August, 2021</span>
								<span>&#8226;</span>
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
										d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</span>
						</div>
					</div>
					{/* options */}
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 text-gray-700 cursor-pointer'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
							/>
						</svg>
					</div>
				</div>
				{/* card body */}
				<div>
					<img
						src={demoIng}
						alt='Demo for showcasing a comment card'
						className='w-full h-full'
					/>
				</div>
				{/* card interactions */}
				<div className='flex items-center justify-between p-2 text-sm text-gray-500'>
					<div className='flex items-center gap-1'>
						<span>👍</span>
						<span>11</span>
					</div>
					<span>2 Shares</span>
				</div>
				<hr className='w-11/12 mx-auto' />
				{/* card comment */}
				<div className='flex items-center justify-around p-2'>
					<button type='button' className='flex items-center gap-2 font-medium'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-4 h-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
								/>
							</svg>
						</span>
						<span>Like</span>
					</button>
					<button type='button' className='flex items-center gap-2 font-medium'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-4 h-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
								/>
							</svg>
						</span>
						<span>Comment</span>
					</button>
					<button type='button' className='flex items-center gap-2 font-medium'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-4 h-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
								/>
							</svg>
						</span>
						<span>Share</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
