import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';

function PreviewView(props) {
  if(props.show) {
    return (
      <div id="preview" className="container-view-preview">

        <ReactMarkdown components={components} remarkPlugins={[gfm]}>{props.markdown}</ReactMarkdown>
      </div>
    );
  } else {
    return null;
  }
}

const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export default PreviewView;