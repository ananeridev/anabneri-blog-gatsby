const path = require("path");

module.exports = ({ contentPath = `contents` }) => {
    return {
        plugins: [
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
            `gatsby-plugin-react-helmet`,
            {
                resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                        "gatsby-remark-copy-linked-files",
                        "gatsby-remark-reading-time",
                        {
                            resolve: `gatsby-remark-images`,
                            options: {
                                maxWidth: 1280
                            }
                        },
                        {
                            resolve: `gatsby-remark-twitter-cards`,
                            options: {
                              title: 'anabneri.com.br', // website title
                              separator: '|', // default
                              author: 'Ana Beatriz Neri',
                              background: require.resolve('/site/static/images/thumb-anabneri2.png'), // path to 1200x630px file or hex code, defaults to black (#000000)
                              fontColor: '#ffffff', // defaults to white (#ffffff)
                              titleFontSize: 96, // default
                              subtitleFontSize: 60, // default
                              fontStyle: 'monospace', // default // will override fontStyle - path to custom TTF font
                              useFrontmatterSlug: false // default, if true it will use the slug defined in the post frontmatter
                            },
                          },
                    ]
                }
            },
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    name: `contents`,
                    path: path.resolve(contentPath)
                }
            },
            {
                resolve: `gatsby-plugin-page-creator`,
                options: {
                    path: path.join(__dirname, `src`, `pages`)
                }
            },
            {
                resolve: `gatsby-plugin-less`,
                options: {
                    strictMath: true,
                },
            },
        ],
    }
}
