import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import A from './A'
import Ol from './Ol'
import Ul from './Ul'
import Code from './Code'
import Image from './Image'
import Section from './Section'
import Article from './Article'
import Bildtitel from './Titel'

import Figure from './Figure'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h4: props => <Bildtitel  {...props} />,
  p: props => <Paragraph {...props} />,
  a : props => <A {...props} />,
  ul : props => <Ul {...props} />,
  ol : props => <Ol {...props} />,
  img: props => <Image {...props} />,
  figure: props => <Figure {...props} />,
  section : props => <Section {...props} />,
  article: props => <Article {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
