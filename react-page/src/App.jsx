import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
// import { nanoid } from "nanoid";

import Editor from "./components/editor/Editor";
import EditorTextParser from "./components/editor-parser/EditorTextParser";
import jsona from "./components/editor/data/exampleData.json";

// const fetchInfo = async () => {
//   const response = await axios.get(
//     `https://test-render-b-f.onrender.com/api/aaa`
//   );
//   return response.data;
// };

function App() {
  // useEffect(() => {
  //   const FetchMovies = async () => {
  //     try {
  //       const response = await fetchInfo();
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   FetchMovies();
  // }, []);

  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState(jsona);

  function toggleEditMode() {
    if (isEditMode) {
      setIsEditMode(false);
      console.log("Edit mode is now disabled");
    } else {
      setIsEditMode(true);
      console.log("Edit mode is now enabled");
    }
  }

  return (
    <div className="App">
      <button id="toggle-edit-btn" onClick={toggleEditMode}>
        Toggle Edit Mode
      </button>

      <div className="app-content">
        {isEditMode ? (
          <Editor data={data} setData={setData} />
        ) : (
          <EditorTextParser data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
