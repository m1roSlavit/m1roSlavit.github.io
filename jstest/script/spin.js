const spinInitialize = (selector) => {
  let delFlag = false;
  let timeout;
  const elem = document.querySelector(selector);

  return {
    show() {
      if (delFlag) {
        clearTimeout(timeout);
      }
      elem.classList.add('active');
      elem.style.opacity = 1;
    },
    hide() {
      if (!elem.classList.contains('active')) return;
      elem.style.opacity = 0;
      delFlag = true;
      timeout = setTimeout(function () {
        elem.classList.remove('active');
      }, 1000)
    }
  }
}

export {spinInitialize};