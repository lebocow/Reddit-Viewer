const axios = require("axios");

exports.handler = async (event) => {
  const { subreddit } = JSON.parse(event.body);

  try {
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddit}/.json?limit=${100}`,
      {
        headers: {
          "User-Agent": "MyBot/0.0.1",
        },
      }
    );

    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: `Failed to fetch data. Error: ${error.response.statusText}`,
    };
  }
};
