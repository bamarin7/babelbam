import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return <MonacoEditor
    height='500px'
    language="javascript"
    theme="dark"
    options={{
      wordWrap: 'on',
      minimap: { enabled: false },
      showUnused: false,
      lineNumbersMinChars: 3,
      fontSize: 15,
      scrollBeyondLastLine: false,
      automaticLayout: true
    }}
  />;
};

export default CodeEditor;