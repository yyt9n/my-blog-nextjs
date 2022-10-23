import { PortableText } from '@portabletext/react'
import HighlightCode from 'components/HighlightCode';

const components = {
  types: {
    code: ({value: {language, code, filename}}) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      )
    },
    image: ({value: {asset, alt}}) => {
        return (
            <img
            src={asset?.url}
            fit="max"
            height="320px"
            width="240px"
            alt={alt}/>
        )
    }
  }
}

const BlogContent = (content) => {
    return (
    <PortableText
        components={components}
        value={content.value}
    />
    )
}

export default BlogContent;