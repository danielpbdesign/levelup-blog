import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import { graphql } from "gatsby";


import Layout from '../components/layout'



const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    
    {/* <Img> sizes={data.background.sizes} </Img> */}
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing post ={node} />  
    })}
  </Layout>
)

const PostListing = () => <div>hello</div>

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
      
    }
    background: imageSharp(id: {regex: "/bg.jpeg/"}) {
        sizes(maxWidth: 1240) {
          ...GatsbyImageSharpSizes
        }
      }
    
    allMarkdownRemark{
        edges{
          node{
            frontmatter {
              title
              date(formatString: "MMMM DD YYYY")
            }
            html
            
          }
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



// query {
//     allFile{
//       edges{
//         node{
//           childImageSharp {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//     }
//   }

//interesting query that actually works and shows "src": "/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-92f95.png" ??