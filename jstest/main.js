'use strict';

const test = {
  name: 'lab-1',
  cases: [
    [[1], 1],
    [[2], 4],
    [[3], 9],
    [[4], 16],
  ]
};

const TEXT_AREA_ID = 'code-text-area';
const TEXT_AREA = document.querySelector('#' + TEXT_AREA_ID);
const LOGS_BLOCK_ID = 'logs-block';
const LOGS_BLOCK = document.querySelector('#' + LOGS_BLOCK_ID);

const clearLog = () => {
  LOGS_BLOCK.innerHTML = '';
};

const writeLog = (text, type = 'normal', prefix = '') => {
  LOGS_BLOCK.innerHTML += `
        <span class="badge bg-${type}">${prefix}:</span> ${text} \n
        <hr class="mb-1 mt-1"/>
      `;
};

const getFunction = () => {
  const textareaValue = TEXT_AREA.value;
  let userCommand;
  try {
    if (textareaValue === '') throw new Error('empty command');

    userCommand = eval(textareaValue);

    if (typeof(userCommand) !== 'function')
      throw new Error('its not a function');

  } catch (e) {
    writeLog(e.message, 'danger', 'Error');
    return false;
  }

  return userCommand;
};

const tryTest = (testfunc, test) => {
  for (let i = 0; i < test.cases.length; i++) {
    try {
      const argumentsF = test.cases[i][0];
      const result = testfunc(...argumentsF);
      const expectedResult = test.cases[i][1];

      if (result !== expectedResult)
        throw new Error(`
          Неправильне рішення,
          очікувалось: ${expectedResult},
          отримано: ${result}
        `);
      writeLog(`
        очікувалось: ${expectedResult},
        отримано: ${result}
      `, 'info', 'Успішно');

    } catch (e) {
      writeLog(e.message, 'danger', 'Error');
      return false;
    }
  }
  return true;
};

const executeTest = testData => {
  const userFunction = getFunction();
  if (!userFunction) return;

  if (tryTest(userFunction, testData))
    writeLog('Пройдено всі тести успішно', 'success', '()');
};

document.querySelector('#check-button').addEventListener('click', () => {
  executeTest(test);
});
document.querySelector('#clear-log-button').addEventListener('click', () => {
  clearLog();
});
