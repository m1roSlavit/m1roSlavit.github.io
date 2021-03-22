const LOGS_BLOCK_ID = 'logs-block';
const logsBlockMocha = document.querySelector(`#${LOGS_BLOCK_ID} #mocha`);
const logsBlockSelfError = document.querySelector(`#${LOGS_BLOCK_ID} #self-error`);

const clearLog = () => {
  logsBlockMocha.innerHTML = '';
  logsBlockSelfError.innerHTML = '';
  mocha.suite.suites = [];
  mocha.suite._bail = false;
};

const writeLog = (text, type = 'normal', prefix = '()') => {
  logsBlockSelfError.innerHTML += `
        <span class="badge bg-${type}">${prefix}:</span> ${text} \n
        <hr class="mb-1 mt-1"/>
      `;
};

export {clearLog, writeLog};