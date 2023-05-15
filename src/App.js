import React, { useState } from "react";
import marked from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(`# Markdown Previewer

## Sub-heading

Here's some code, \`<inline style="color:red;">console.log('Hello World')</inline>\`, within a paragraph.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc) asdasdasd`);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="App">
      <div className="editor-wrapper">
        <label htmlFor="editor">Editor</label>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div className="preview-wrapper">
        <label htmlFor="preview">Preview</label>
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  );
}

export default App;
