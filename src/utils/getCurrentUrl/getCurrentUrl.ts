const getCurrentUrl = (url: string) => {
  const isServer = typeof window === 'undefined';
  const port = process.env.PORT || 3000;

  return isServer ? `http://localhost:${port}${url}` : url;
};

export default getCurrentUrl;
