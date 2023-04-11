module.exports = (phase) => {
  return {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/dashboard",
          permanent: false,
        },
        {
          source: "/index.html",
          destination: "/dashboard",
          permanent: false,
        },
      ];
    },
    reactStrictMode: true,
  };
};
