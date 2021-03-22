import {spinInitialize} from './spin.js';
import {getCode} from './editor.js';
import {clearLog} from './logs.js';
import {executeTest} from './tests.js';
import {getTestData} from './firebase.js';
import {selectHandler} from './selectHandler.js';

selectHandler();

const formChooseSelects = document.querySelectorAll('.form-choose-test-select');

for (const elem of formChooseSelects) {
  elem.addEventListener('change', selectHandler);
}

document.querySelector('#check-button').addEventListener('click', () => {
  clearLog();

  const mochaTest = sessionStorage.getItem('mochaTest');
  // console.log(mochaTest);
  if (!mochaTest) return;

  executeTest(getCode(), mochaTest);
});

document.querySelector('#clear-log-button').addEventListener('click', () => {
  clearLog();
});
