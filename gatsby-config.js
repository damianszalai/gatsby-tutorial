/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: "@juanroman",
    person: {name: "Juan Roman", age:32},
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {name: "Juan", age:32},
      {name: "Roman", age:21} 
    ]
  },
  plugins: [`gatsby-plugin-styled-components`,`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  }]
  
}
