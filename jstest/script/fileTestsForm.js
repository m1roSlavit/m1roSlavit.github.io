import {checkFileTestsReq} from './requests.js';
import {setCode} from './editor.js'
import {state} from './state.js';

const testIndexInput = document.querySelector('#form-group-test-index');
const fileTestInput = document.querySelector('#form-group-test-file');
const scoreDataReqBlock = document.querySelector('#score-data-req');

const checkFileTests = () => {
  const testIndex = parseInt(testIndexInput.value);
  const fileTest = fileTestInput.files[0];

  console.log(testIndex, fileTest);

  const reader = new FileReader();
  reader.onload = function(event) {
    const data = event.target.result;
    const workbook = XLSX.read(data,{
      type: 'binary'
    });
    workbook.SheetNames.forEach(function(sheetName){       
      const XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      const json_object = JSON.stringify(XL_row_object);

      console.log(json_object);
    
      checkFileTestsReq(json_object, testIndex)
        .then((d) => JSON.parse(d).score)
        .then((data) => {
          console.log(typeof data, data);
          if (data) {
            scoreDataReqBlock.innerHTML = `Ви набрали очків ${data[0]} з ${data[1]} можливих`
          } else {
            scoreDataReqBlock.innerHTML = 'Помилка';
          }
        })
        .catch((err) => alert(err));

    });
  };
  reader.onerror = function(event) {
    alert("Файл не может быть прочитан. Код ошибки: " + event.target.error.code);
  };
  reader.readAsBinaryString(fileTest);


}

export {checkFileTests};