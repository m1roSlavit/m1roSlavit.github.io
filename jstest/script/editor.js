let codeEditor = CodeMirror(document.querySelector('#code-text-area'), {
  // value: 'function func() {\n	return;\n}\n',
  value: '',
  mode:  'javascript',
  theme: 'dracula',
  tabSize: 2,
  lineNumbers: true,
  extraKeys: {'Tab-Space': 'autocomplete'}
});

const getCode = () => {
  return codeEditor.getValue()
};

const setCode = (val) => {
  codeEditor.getDoc().setValue(val);
}

export {getCode, setCode};