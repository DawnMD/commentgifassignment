import Card from 'components/Card';
import NewPost from 'components/NewPost';
function App() {
	return (
		<div className='flex flex-col items-center min-h-screen gap-4 p-4 lg:px-36 xl:px-96'>
			<NewPost />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default App;
