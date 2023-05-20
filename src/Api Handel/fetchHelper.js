import axios from "axios";

const api_key = "live_CcYTAxZNd93SsshorCb0dClgBw5ExgJI932pqtrwLy7y9YKj7BKqfoykG9lrXOjN";

const apiUrl = `https://api.thecatapi.com/v1/breeds?limit=`

export const adoptableCats = async () => {
    const { data } = await axios.get(apiUrl, {
        headers: {
            "x-api-key": api_key,
        },

    })
    return data;
}

