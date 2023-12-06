// useLocation.js
import useSWR from 'swr';

const fetcher = (url, token) =>
    fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

export const useLocations = (inputLocation, token) => {
    const { data, error } = useSWR(
        inputLocation ? `https://pm.prdx.one/api/locations?query=${inputLocation}` : null,
        (url) => fetcher(url, token)
    );

    return {
        locations: data?.data || [],
        isLoading: !data && !error,
        isError: error,
    };
};
