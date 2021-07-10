function EditorView(props) {
  if(props.show) {
    return (
        <form id="editor" className="container-view-editor">
          <textarea rows="auto" onChange={props.handleMarkdown}>{props.markdown}</textarea>
        </form>
    );
  } else {
    return null;
  }
}

export default EditorView;