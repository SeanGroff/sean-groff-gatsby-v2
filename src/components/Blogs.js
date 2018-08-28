import React from 'react'
import styled from 'react-emotion'

import Colors from '../utils/Colors'

const { darkText } = Colors

const BlogsWrapper = styled.main`
  color: ${darkText};
`

export default function Blogs() {
  return <BlogsWrapper />
}
