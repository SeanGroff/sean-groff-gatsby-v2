import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import LinkGatsby from '../components/LinkGatsby'
import Heading from '../components/Heading'
import Colors from '../utils/Colors'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import '../fonts/LoraRegular.css'

const { lightBlueText } = Colors

const BlogPreviewText = styled.p`
  font-size: 16px;
  font-family: Lora-Regular;
  line-height: 26px;
  color: #2c3e50;
  margin: 0;
  max-width: 512px;
  padding: 0 8px;
`

const DateText = styled.small`
  font-family: Lora-Regular;
  color: #2c3e50;
`

class BlogIndex extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              key={node.fields.slug}
            >
              <Heading>
                <LinkGatsby
                  style={{ color: lightBlueText, display: 'block', textDecoration: 'none' }}
                  to={node.fields.slug}
                >
                  {title}
                </LinkGatsby>
              </Heading>
              <DateText>{node.frontmatter.date}</DateText>
              <BlogPreviewText dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
