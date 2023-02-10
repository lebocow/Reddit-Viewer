export const fetchSubRedditData = async (searchInput: string) => {
  try {
    const response = await fetch("/.netlify/functions/fetch-images", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subreddit: searchInput }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return { error };
  }
};
