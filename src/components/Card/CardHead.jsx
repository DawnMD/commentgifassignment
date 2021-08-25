import Option from './assets/SVG/CardOptionSVG';
import CardProfileSVG from './assets/SVG/CardProfileSVG';
import CardPublicSVG from './assets/SVG/CardPublicSVG';
const CardHead = ({ name, date }) => {
	return (
		<div className='flex justify-between p-2'>
			<div className='flex items-center gap-1'>
				<CardProfileSVG />
				<div className='flex flex-col'>
					<h3 className='text-sm font-semibold'>{name}</h3>
					<span className='flex items-center gap-1 text-xs text-gray-500'>
						<span>{date}</span>
						<span>&#8226;</span>
						<CardPublicSVG />
					</span>
				</div>
			</div>
			<div>
				<Option />
			</div>
		</div>
	);
};
export default CardHead;
