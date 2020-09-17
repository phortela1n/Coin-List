function getCoinDetails(coin, userID) {
  switch (coin) {
    case "Bitcoin":
      return {
        userID,
        name: coin,
        description: "BTC",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/4caf2b16a0174e26a3482cea69c34cba.png",
      };
    case "Ethereum":
      return {
        userID,
        name: coin,
        description: "ETH",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/604ae4533d9f4ad09a489905cce617c2.png",
      };
    case "Litecoin":
      return {
        userID,
        name: coin,
        description: "LTC",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/a201762f149941ef9b84e0742cd00e48.png",
      };
    case "Swipe":
      return {
        userID,
        name: coin,
        description: "SXP",
        moves: [],
        img: "https://swipe.io/images/network-img.svg",
      };
    case "XLM":
      return {
        userID,
        name: coin,
        description: "XLM",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/99ab21c646f04f17b919a433eeeb816d.png",
      };
    case "IOTA":
      return {
        userID,
        name: coin,
        description: "IOTA",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/77e3e9252ad046eeb2c4d5e5c6bb504c.png",
      };
    case "XRP":
      return {
        userID,
        name: coin,
        description: "XRP",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/ba90bcb0cafb4801ac5dd310f47d6411.png",
      };
    case "USDT":
      return {
        userID,
        name: coin,
        description: "USDT",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/5ed65416963e4e57998a3c302da8936e.png",
      };

    case "EOS":
      return {
        userID,
        name: coin,
        description: "EOS",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/ae00905dc9d74f40876ad59e7da32e81.png",
      };

    case "TRON":
      return {
        userID,
        name: coin,
        description: "TRON",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/1de619dbc75c42e8902c48a517dd35ee.png",
      };

    case "NEO":
      return {
        userID,
        name: coin,
        description: "NEO",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/5aeb2323d78f4de5acc379a09a3e13f0.png",
      };
    case "DASH":
      return {
        userID,
        name: coin,
        description: "DASH",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/73fb6d7915a24f51930809b9e2b84c8f.png",
      };

    case "Monero":
      return {
        userID,
        name: coin,
        description: "XMR",
        moves: [],
        img:
          "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/e342d99d4648423e9fb5f68785dd2adf.png",
      };

    default:
      throw new Error("Coin details lookup failed");
  }
}

module.exports = getCoinDetails;
