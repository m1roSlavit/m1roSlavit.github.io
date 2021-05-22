import {spinInitialize} from './spin.js';
import {getCode} from './editor.js';
import {clearLog} from './logs.js';
import {executeTest} from './tests.js';
import {getExerciseByFilter, getCountByFilter, checkFileTestsReq} from './requests.js';
import {selectHandler} from './selectHandler.js';
import {testsForm} from './testsForm.js';
import {state} from './state.js';
import {checkFileTests} from './fileTestsForm.js';

document.querySelector('#check-button').addEventListener('click', () => {
  clearLog();

  const mochaTest = state.currTest;
  if (!mochaTest) return;

  executeTest(getCode(), mochaTest);
});

document.querySelector('#check-file-button').addEventListener('click', () => {
  console.log(1);
  checkFileTests();
  
});

document.querySelector('#clear-log-button').addEventListener('click', () => {
  clearLog();
});

document.querySelector('#load-data-button').addEventListener('click', () => {
  testsForm();
});
