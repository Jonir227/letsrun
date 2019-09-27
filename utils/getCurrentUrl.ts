const getCurrentUrl = (url: string) => {
  const isServer = typeof window === "undefined";

  return isServer ? `http://localhost:${process.env.PORT || 3000}${url}` : url;
};

export default getCurrentUrl;
