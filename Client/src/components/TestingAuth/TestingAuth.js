import React, { useEffect } from "react";
var axios = require("axios");

const TestingAuth = () => {
  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:3000/coins",
      headers: {
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "http://localhost:3000/user",
        "Accept-Language": "es-ES,es;q=0.9,en-IE;q=0.8,en;q=0.7",
        // Cookie:
        //   "Idea-74f5d8a8=1be7c964-1d1d-474c-a582-fcc037f641c9; auth0.is.authenticated=true; connect.sid=s%3AvuJ3oqnFXhKS4erVXNN3mLCBb2LfroBJ.DvLlLX7Zu4oCx7GI%2BYSLsXkha%2FrLK5DD79ebUXmM96U; connect.sid=s%3AntXHt6dLrwKZo9DXHmKsrUfIo4gFcXgI.OO7Bp%2FPXV1uS3Y7OlSUlbx0O9yReK1cNgV31PIB8CJE",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <>Hi</>;
};

export default TestingAuth;
