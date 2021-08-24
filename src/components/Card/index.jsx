import CardBody from './CardBody';
import CardHead from './CardHead';
import CardInteraction from './CardInteraction';

const Card = () => {
	return (
		<div className='flex flex-col w-full gap-2 border rounded-lg shadow-lg'>
			<CardHead name='Mainak Das' date='24 August, 2021' />
			<CardBody />
			<hr className='w-11/12 mx-auto' />
			<CardInteraction />
		</div>
	);
};
export default Card;
