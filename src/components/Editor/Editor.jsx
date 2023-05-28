import ace from "ace-builds";
import AceEditor from "react-ace";
ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

function Editor() {
  return (
    <>
      <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="dracula"
        name="blah2"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          // useWorker: false,
        }}
      />
    </>
  );
}

export default Editor;
