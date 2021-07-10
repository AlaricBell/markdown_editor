import React, {PureComponent} from 'react';

import EditorView from './EditorView';
import PreviewView from './PreviewView';

class Editor extends PureComponent {
  state = {
    editorShow: true,
    previewShow: true,
    title: 'Editor / Preview',
    markdownText: "",
  }

  handleMarkdown = (e) => {
    this.setState({
      markdownText: e.target.value,
    });
  }

  handleVisibility = (target) => {
    if(target === null) {
      document.getElementById('btn-split').classList.add('active');
      document.getElementById('btn-editor').classList.remove('active');
      document.getElementById('btn-preview').classList.remove('active');

      this.setState({
        editorShow: true,
        previewShow: true,
        title: 'Editor / Preview'
      }, () => {
        document.getElementById('preview').classList.remove('active');
        document.getElementById('editor').classList.remove('active');
      })
    }
    else if(target === "preview") {
      document.getElementById('btn-preview').classList.add('active');
      document.getElementById('btn-editor').classList.remove('active');
      document.getElementById('btn-split').classList.remove('active');

      this.setState({
        editorShow: false,
        previewShow: true,
        title: 'Preview'
      }, () => {
        document.getElementById('preview').classList.add('active');
      })
    } 
    else if(target === "editor") {
      document.getElementById('btn-editor').classList.add('active');
      document.getElementById('btn-preview').classList.remove('active');
      document.getElementById('btn-split').classList.remove('active');

      this.setState({
        editorShow: true,
        previewShow: false,
        title: 'Editor'
      }, () => {
        document.getElementById('editor').classList.add('active');
      })
    }
  }

  render() {
    return (
      <>
        
        <div className="container">
          <div className="header-editor">
            <div className="options">
              <button id="btn-editor" className="btn-option" onClick={() => this.handleVisibility('editor')}>Editor</button>
              <button id="btn-preview" className="btn-option" onClick={() => this.handleVisibility('preview')}>Preview</button>
              <button id="btn-split" className="btn-option" onClick={() => this.handleVisibility(null)}>Split</button>
            </div>

            <h3>{this.state.title}</h3>
          </div>
          <div className="container-editor">
            <EditorView 
            show={this.state.editorShow}
            handleMarkdown={this.handleMarkdown}
            markdown={this.state.markdownText}/>
            <PreviewView 
            show={this.state.previewShow}
            markdown={this.state.markdownText}/>
          </div>
        </div>
      </>
    );
  }
}

export default Editor;