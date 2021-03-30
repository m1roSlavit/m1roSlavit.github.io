import {clearLog, writeLog} from './logs.js';
import {_Xr98_scopeEval} from './testEvalScope.js';

const executeTest = (userCode, testCode) => {

  try {
    _Xr98_scopeEval(userCode + testCode);
    mocha.run(failures => console.log('failures: ' + failures));
  }
  catch (e) {
    writeLog(e.message, 'danger', 'Error');
  }
};

export {executeTest};