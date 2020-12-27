import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        logo
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const ogImage = image || site.siteMetadata.logo;

    const srcImg = `https://anabneri.com.br${ogImage}`;
    console.log('og', ogImage, srcImg)
    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={
                title === site.siteMetadata.title
                    ? title
                    : `%s | ${site.siteMetadata.title}`
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    property: `twitter:image`,
                    content: srcImg
                },
                {
                    property: `twitter:image:src`,
                    content: srcImg
                },
                {
                    name: `twitter:summary_large_image`,
                    content: `summary`,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    property: `og:image`,
                    content: srcImg
                }
            ].concat(meta)}
        />
        
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

export default SEO;
