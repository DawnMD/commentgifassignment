import CardButton from './CardButton';
import CardButtonLikeSVG from './assets/SVG/CardButtonLikeSVG';
import CardButtonCommentSVG from './assets/SVG/CardButtonCommentSCG';
import CardButtonShareSVG from './assets/SVG/CardButtonShareSVG';

const CardInteraction = () => {
	return (
		<div className='flex items-center justify-around p-2'>
			<CardButton icon={<CardButtonLikeSVG />} buttonFor='Like' />
			<CardButton icon={<CardButtonCommentSVG />} buttonFor='Comment' />
			<CardButton icon={<CardButtonShareSVG />} buttonFor='Share' />
		</div>
	);
};
export default CardInteraction;
