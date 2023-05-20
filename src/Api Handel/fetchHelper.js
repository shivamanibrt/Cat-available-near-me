import axios from "axios";

const api_key = "live_CcYTAxZNd93SsshorCb0dClgBw5ExgJI932pqtrwLy7y9YKj7BKqfoykG9lrXOjN";

export const adoptableCats = async (searchTerm, location) => {
    const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/search?size=full&limit=1&q=${searchTerm}&location=${location}`,
        {
            headers: {
                "x-api-key": api_key,
            },

        }
    );

    return data;
}
