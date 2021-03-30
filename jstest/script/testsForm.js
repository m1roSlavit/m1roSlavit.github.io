import {getExerciseByFilter} from './requests.js';
import {setCode} from './editor.js'
import {state} from './state.js';

const taskBlockData = document.querySelector('#task-block-data');

const labInput = document.querySelector('#form-group-lab');
const taskInput = document.querySelector('#form-group-exercise');
const variantInput = document.querySelector('#form-group-variant');

const testsForm = () => {
  const lab = parseInt(labInput.value);
  const task = parseInt(taskInput.value);
  const variant = parseInt(variantInput.value);

  const filter = {lab, task, variant};

  console.log(filter)

  getExerciseByFilter(filter)
    .then((d) => JSON.parse(d).data)
    .then((data) => {
      console.log(typeof data, data);
      if (data) {
        taskBlockData.innerHTML = data.description;
        setCode(data.basicCode);
        state.currTest = data.test;
      } else {
        alert('Не знайдено завдання');
      }
    })
    .catch((err) => console.log(err));
}

export {testsForm};