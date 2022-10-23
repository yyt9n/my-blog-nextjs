import { PortableText } from '@portabletext/react'
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

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
            <div className="blog-image">
                <img src={urlFor(asset).height(300).fit('max').url()} />
                <div className="image-alt">{alt}</div>
            </div>
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