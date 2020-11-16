const refs = {
  input: document.querySelector(".js-input"),
  row1: document.querySelector(".message1"),
  row2: document.querySelector(".message2"),
  message: document.querySelector(".message"),
};

refs.input.addEventListener("input", handlerInput);

function handlerInput() {
  require(getValueData());
}

function getValueData() {
  const data = {
    row1: refs.row1.value.toLowerCase(),
    row2: refs.row2.value.toLowerCase(),
    inputValue: refs.input.value.toLowerCase(),
  };
  return data;
}

function require(data) {
  if (data.row1 && data.row2) {
    getRowMatch(data);
  } else {
    alert("Вы не ввели сообщения в соответствующие поля");
    refs.input.value = "";
  }
}

function getRowMatch({ row1, row2, inputValue }) {
  const countWordOfRow1 = getCountWordInRow(row1, inputValue);
  const countWordOfRow2 = getCountWordInRow(row2, inputValue);

  const result = countWordOfRow1 > countWordOfRow2 ? row1 : row2;

  renderMessage(result, countWordOfRow1, countWordOfRow2, inputValue);
}

function getCountWordInRow(row, inputValue) {
  let result = null;
  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i) === inputValue) {
      result += 1;
    }
  }
  return result;
}

function renderMessage(result, countWordOfRow1, countWordOfRow2, inputValue) {
  if (inputValue) {
    if (countWordOfRow1 && countWordOfRow2) {
      if (countWordOfRow1 === countWordOfRow2) {
        refs.message.textContent = `В каждом сообщение буква "${inputValue}" встречается равное количество раз`;
      } else {
        refs.message.textContent = `Вы ввели букву "${inputValue}", которая встречается в первом сообщении ${countWordOfRow1} раз и во втором сообщении - ${countWordOfRow2} раз. Поэтому, во фразе "${result}" данная буква встречается чаще!`;
      }
    } else if (countWordOfRow1 || countWordOfRow2) {
      refs.message.textContent = `Буква "${inputValue}" представлена только в предложении - "${result}"`;
    } else {
      refs.message.textContent = `Буква "${inputValue}" в ваших сообщениях не встречается`;
    }
  } else {
    refs.message.textContent = "Результат";
  }
}
