import React, { Component } from 'react';
import marked from 'marked';

class Readme extends Component {
  state = {
    markdown: ''
  };

  async componentDidMount() {
    const response = await fetch('./readme.md');
    const markdown = await response.text();
  
    this.setState({ markdown });
  }

  render() {
    const html = marked(this.state.markdown);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

export default Readme;

// This is a React component that fetches the content of a markdown file and displays it in a webpage using the 
// marked library. The marked library is used to convert the markdown content into HTML, which is then rendered to 
// the page using dangerouslySetInnerHTML. It is generally safe to use dangerouslySetInnerHTML when the source of 
// the markdown content is trusted, but one should always be cautious when using it since it can potentially lead 
// to security vulnerabilities if untrusted content is rendered on the page.