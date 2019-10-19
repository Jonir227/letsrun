const port = process.env.PORT || 3000;

const getCurrentUrl = (url: string) => {
  const isServer = typeof window === 'undefined';

  return isServer ? `http://localhost:${port}${url}` : url;
};

export default getCurrentUrl;
