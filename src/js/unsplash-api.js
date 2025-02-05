import axios from "axios";

const API_KEY = "LF9TkEj0ZsmXJP4kvq9DeO5PzMMyd2Zn07lJBNkpYOY";

export default async function getPage(page, query) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      page,
      query,
      per_page: 20,
    },
  });
  return response.data;
}
