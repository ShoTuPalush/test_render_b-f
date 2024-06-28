import { EDITOR_JS_TOOLS } from "./tools/tools";

import EditorJs from "@natterstefan/react-editor-js";
export default function Editor({ data, setData }) {
  let editor = null;

  const onReady = () => {
    console.log("Editor.js is ready to work!");
  };

  const onChange = () => {
    console.log("Now I know that Editor's content changed!");
  };

  const onSave = async () => {
    try {
      const outputData = await editor.save();
      setData(outputData);
      console.log("Article data: ", outputData);
    } catch (e) {
      console.log("Saving failed: ", e);
    }
  };

  return (
    <div>
      <button onClick={onSave}>Save</button>
      <EditorJs
        data={data}
        tools={EDITOR_JS_TOOLS}
        holder="custom-editor-container"
        onReady={onReady}
        onChange={onChange}
        editorInstance={(editorInstance) => {
          editor = editorInstance;
        }}
      >
        <div id="custom-editor-container" />
      </EditorJs>
    </div>
  );
}
