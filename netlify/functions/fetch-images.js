exports.handler = async (event) => {
  const { username } = JSON.parse(event.body);

  const response = await fetch(
    `https://www.reddit.com/user/${username}/submitted/.json?limit=${100}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Mobile Safari/537.36",
      },
    }
  );

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: `Failed to fetch data. Error: ${response.statusText}`,
    };
  }

  const data = await response.json();
  const posts = data.data.children;
  const images = posts
    .map((post) => {
      if (
        post.data.url.endsWith(".jpg") ||
        post.data.url.endsWith(".png") ||
        post.data.url.endsWith(".gifv")
      )
        return post.data.url;
    })
    .filter((image) => image !== undefined);

  return {
    statusCode: 200,
    body: JSON.stringify({ images }),
  };
};
