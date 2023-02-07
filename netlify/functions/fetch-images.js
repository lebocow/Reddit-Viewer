const axios = require("axios");

exports.handler = async (event) => {
  const { username } = JSON.parse(event.body);

  try {
    const response = await axios.get(
      `https://www.reddit.com/user/${username}/submitted/.json?limit=${100}`,
      {
        headers: {
          "User-Agent": "MyBot/0.0.1",
        },
      }
    );

    const data = response.data;
    const posts = data.data.children;
    images = posts
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
      body: images,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: `Failed to fetch data. Error: ${error.response.statusText}`,
    };
  }
};
