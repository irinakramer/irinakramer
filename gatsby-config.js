/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Irina Kramer - Frontend Engineer",
    description:
      "Building ecommerce and enterprise sites, personalized web apps, UI components.",
    url: "https://www.irinakramer.com",
    author: 'irinakramer',
    image: "/images/irina.jpg",
    twitterUsername: "@irinakramer",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-44539226-2",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `700`]
          },
          {
            family: `Lato`,
            subsets: [`latin`]
          },
        ],
      },
    }
  ],
}