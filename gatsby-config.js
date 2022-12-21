/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Reading School of Dance",
    siteUrl: "https://www.readingschoolofdance.com/",
    image: "/icon.png",
    description:
      "Reading School of Dance opened in April 2013. Our aim is to share our passion for dance and to support the younger generation",
    twitterUsername: "@RSODance",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Raleway",
            file: "https://fonts.googleapis.com/css2?family=Raleway:wght@200..900&display=swap",
          },
        ],
      },
    },
  ],
};
