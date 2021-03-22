import {clearLog, writeLog} from './logs.js';

const executeTest = (userCode, testCode) => {

  try {
    eval(userCode + testCode);
    mocha.run(failures => console.log('failures: ' + failures));
  }
  catch (e) {
    writeLog(e.message, 'danger', 'Error');
  }
};

export {executeTest};