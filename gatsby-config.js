/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Irina Kramer - Frontend Developer",
    description:
      "Front End Web Developer, ecommerce and enterprise sites, web apps, UI components.",
    url: "https://www.irinakramer.com",
    image: "/images/irina.jpg",
    twitterUsername: "@irinakramer",
  },
  plugins: [
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
    },
    [`gatsby-plugin-react-helmet`]
  ]
}