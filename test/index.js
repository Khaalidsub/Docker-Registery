const axios = require("axios");

const getDocker = async () => {
  try {
    const result = await axios.get("http:ff:6666/registry/v2/_catalog");
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

getDocker();
