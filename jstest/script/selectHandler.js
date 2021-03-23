import {getTestData} from './firebase.js';
import {spinInitialize} from './spin.js';
import {setCode} from './editor.js'


const checkButton = document.querySelector('#check-button');
const taskBlockData = document.querySelector('#task-block-data');
const taskBlockSpin = spinInitialize('#task-block__spin');
// const codeSandBoxSpin = spinInitialize('#code-sandbox__spin');

const selectHandler = () => {
  const varient = document.querySelector('#form-group-varient').value;
  const lab = document.querySelector('#form-group-lab').value;
  const exercise = document.querySelector('#form-group-exercise').value;

  const request = `${varient}-${lab}-${exercise}`

  taskBlockSpin.show();
  // codeSandBoxSpin.show();

  checkButton.classList.add('disabled');

  getTestData(request, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      sessionStorage.setItem('mochaTest', data.testCode);
      checkButton.classList.remove('disabled');
      // codeSandBoxSpin.hide();
      taskBlockSpin.hide();
      taskBlockData.innerHTML = data.description;
      if (data.startCode) {
        setCode(data.startCode);
      }
    }
    else {
      alert("No data available");
    }
  });
};

export {selectHandler};