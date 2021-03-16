let codeEditor = CodeMirror(document.querySelector('#code-text-area'), {
  value: 'function func() {\n	return;\n}\n',
  mode:  'javascript',
  theme: 'dracula',
  tabSize: 2,
  lineNumbers: true,
  extraKeys: {'Tab-Space': 'autocomplete'}
});

const TEXT_AREA_ID = 'code-text-area';
const TEXT_AREA = document.querySelector('#' + TEXT_AREA_ID);
const LOGS_BLOCK_ID = 'logs-block';
const LOGS_BLOCK = document.querySelector('#' + LOGS_BLOCK_ID);

const clearLog = () => {
  LOGS_BLOCK.querySelector('#mocha').innerHTML = '';
  LOGS_BLOCK.querySelector('#self-error').innerHTML = '';
  mocha.suite.suites = []
  mocha.suite._bail = false
};

const writeLog = (text, type = 'normal', prefix = '()') => {
  LOGS_BLOCK.querySelector('#self-error').innerHTML += `
        <span class="badge bg-${type}">${prefix}:</span> ${text} \n
        <hr class="mb-1 mt-1"/>
      `;
};

const getCode = () => {
  return codeEditor.getValue()
};

const getTest = (id) => {
  return "describe(\"pow\", function() {it(\"возводит число в степень n\", function() {assert.equal(func(2, 3), 8);assert.equal(func(3, 4), 81);});});";
}

const executeTest = testData => {
  clearLog()

  const userCode = getCode();
  const testCode = getTest();

  try {
    eval(userCode + testCode);
    mocha.run(failures => console.log(failures));
  }
  catch (e) {
    writeLog(e.message, 'danger', 'Error');
  }
};

document.querySelector('#check-button').addEventListener('click', () => {
  executeTest();
});

document.querySelector('#clear-log-button').addEventListener('click', () => {
  clearLog();
});
