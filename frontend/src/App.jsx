import React, { useEffect, useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "@monaco-editor/react";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const App = () => {
  const [code, setCode] = useState(`function sum(){
       return a+b
     }`);

  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    const response = await axios.post(
      "http://localhost:3001/api/ai/get-response",
      { code }
    );
    setReview(response.data.data);
    console.log(response.data);
  };

  return (
    <>
      <div className="main">
        <div className="left">
          <div className="code">
            <Editor
              height="100%"
              width="100%"
              language="javascript"
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                fontSize: 16,
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                padding: { top: 10, bottom: 10 },
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                lineNumbers: "on",
                roundedSelection: true,
                selectOnLineNumbers: true,
              }}
            />
          </div>
          <div className="review-button" onClick={reviewCode}>
            Review
          </div>
        </div>

        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review || "Click the Review button to get feedback on your code."}
          </Markdown>
        </div>
      </div>
    </>
  );
};

export default App;
