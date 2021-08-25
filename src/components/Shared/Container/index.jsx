const Container = (props) => {
	return (
		<div className='flex flex-col max-w-2xl gap-2 overflow-hidden border rounded-lg shadow-lg'>
			{props.children}
		</div>
	);
};
export default Container;
