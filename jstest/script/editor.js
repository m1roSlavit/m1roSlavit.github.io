let codeEditor = CodeMirror(document.querySelector('#code-text-area'), {
  value: '',
  mode:  'javascript',
  theme: 'eclipse',
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