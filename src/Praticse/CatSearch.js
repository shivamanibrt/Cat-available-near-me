import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CatSearch = ({ location, searchTerm }) => {
    const [cats, setCats] = useState({});
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
    }, [location, searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Search Results</h2>
            {cats.map((cat) => (
                <img key={cat.id} src={cat.url} alt="Cat" />
            ))}
        </div>
    );
}