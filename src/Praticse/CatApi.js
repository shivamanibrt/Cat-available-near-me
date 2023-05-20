import axios from 'axios';
import { useState, useEffect } from 'react';

export const useAdoptableCats = (searchTerm, location) => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api_key = 'live_CcYTAxZNd93SsshorCb0dClgBw5ExgJI932pqtrwLy7y9YKj7BKqfoykG9lrXOjN';
                const response = await axios.get(
                    `https://api.thecatapi.com/v1/images/search?size=full&limit=100&q=${searchTerm}&location=${location}`,
                    {
                        headers: {
                            'x-api-key': api_key,
                        },
                    }
                );
                setCats(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [searchTerm, location]);

    return { cats, loading };
};