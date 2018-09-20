import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { graphql } from "gatsby"


import Layout from '../components/layout'



const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    {/* <Img fluid={data.fileName.childImageSharp.fluid}  /> */}
    {/* <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p> */}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)


export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/bg.png/"}) {
        sizes(maxWidth: 1240) {
          ...GatsbyImageSharpSizes
        }
      }
  }
`;

// export const query = graphql`
//   query GatsbyImageSampleQuery {
//     site {
//         siteMetadata {
//           title
//           desc
//         }
//       }
//     file(relativePath: { eq: "images/bg.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
// export const query = graphql`
//   query {
//     fileName: file(relativePath: { eq: "images/bg.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

