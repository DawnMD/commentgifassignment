import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) =>
	axios
		.get(url, {
			params: {
				api_key: 'T76V8Fr3TiWY6YSc5BqkKE3medMpekoy',
				rating: 'g',
			},
		})
		.then((res) => res.data);

export function useGIF(type) {
	const { data, error } = useSWR(
		`https://api.giphy.com/v1/gifs${type}`,
		fetcher
	);

	return {
		isData: data,
		isLoading: !error && !data,
		isError: error,
	};
}
