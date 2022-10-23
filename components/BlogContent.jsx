import { PortableText } from '@portabletext/react'

const components = {
  types: {
    code: ({value: {language, code, filename}}) => {
      return (
        <pre data-language={language}>
          <code>{code}</code>
          <p>{filename}</p>
        </pre>
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