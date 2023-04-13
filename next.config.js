module.exports = (phase) => {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;

  let assetPrefix = "";
  let basePath = "";

  if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
  }

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
    images: {
      unoptimized: true,
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
  };
};
