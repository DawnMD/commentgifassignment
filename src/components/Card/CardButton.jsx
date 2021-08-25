const CardButton = ({ icon, buttonFor }) => {
	return (
		<button type='button' className='flex items-center gap-2 font-medium'>
			<span>{icon}</span>
			<span>{buttonFor}</span>
		</button>
	);
};
export default CardButton;
