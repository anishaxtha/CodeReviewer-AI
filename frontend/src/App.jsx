import React, { useEffect, useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <div className="code">
            <pre>
              <code className="language-js">
                {`  function sum(){
       return a+b
     }`}
              </code>
            </pre>
          </div>
          <div className="review-button">Review</div>
        </div>

        <div className="right"></div>
      </div>
    </>
  );
};

export default App;
