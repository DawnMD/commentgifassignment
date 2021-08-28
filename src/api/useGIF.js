import useSWR from 'swr';
import axios from 'axios';

export const fetcher = (type, query) =>
	axios
		.get(`https://api.giphy.com/v1/gifs${type}`, {
			params: {
				api_key: 'T76V8Fr3TiWY6YSc5BqkKE3medMpekoy',
				rating: 'g',
				limit: 10,
				q: query,
			},
		})
		.then((res) => res.data);

export function useGIF(type, query) {
	const { data, error } = useSWR(type, (type) => fetcher(type, query));

	return {
		isData: data,
		isLoading: !error && !data,
		isError: error,
	};
}
