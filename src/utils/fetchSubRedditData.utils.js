export const fetchSubRedditData = async (searchInput) => {
  return await fetch("/.netlify/functions/fetch-images", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ subreddit: searchInput }),
  }).then((res) => res.json());
};
