import Container from 'components/Shared/Container';
import CardBody from './CardBody';
import CardHead from './CardHead';
import CardInteraction from './CardInteraction';
import CardReaction from './CardReaction';

const Card = () => {
	return (
		<Container>
			<CardHead name='Mainak Das' date='24 August, 2021' />
			<CardBody />
			<CardReaction />
			<hr className='w-11/12 mx-auto' />
			<CardInteraction />
		</Container>
	);
};
export default Card;
