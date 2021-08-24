import demoImage from 'assets/images/adi-goldstein-mDinBvq1Sfg-unsplash.jpg';
const CardBody = () => {
	return (
		<div>
			<img
				src={demoImage}
				alt='Demo for showcasing a comment card'
				className='w-full h-full'
			/>
		</div>
	);
};
export default CardBody;
