export const fetchUserData = async (searchInput) => {
  return await fetch("/.netlify/functions/fetch-images", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: searchInput }),
  }).then((res) => res.json());
};
