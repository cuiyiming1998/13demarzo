/* eslint-disable */

/* 
    清空对象里的数据
    仅适用于对象里面全是基本数据类型
    Param: Object
  */
export function clearParams(data) {
  for (let a in data) {
    data[a] = ''
  }
  return data
}

// 数字2位转换
export function toDouble(num) {
  if (num < 10) {
      return '0' + num;
  } else {
      return num;
  }
}
// 数字位数，只获取整数位
export function getNumBit(num) {
  let intNum = num.toFixed(0);
  return intNum.length;
}
// 动态加载js
export function loadApi(src) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = '';
      script.src = src;
      script.async = 'async';
      document.head.appendChild(script);

      script.onload = () => { resolve(); };
      script.onerror = () => { reject(); };
  });
}
// 动态加载css
export function loadCss(src) {
  return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      document.head.appendChild(link);
  });
}
// 对象取值
export function getVal(obj, path, returnedVal = '') {
  if (!path) return returnedVal;
  const pathArr = path.split('.');
  let current = obj;
  for (let i = 0, l = pathArr.length; i < l; i++) {
      if (!current) break;
      const prop = pathArr[i];
      current = current[prop];
  }
  if (current || current === 0) {
      return current;
  } else {
      return returnedVal;
  }
}
// 冒泡排序
export function bubbleSort(arr) {
  let i = arr.length - 1;
  while (i > 0) {
      let maxIndex = 0;
      for (let j = 0; j < i; j++) {
          if (arr[j] > arr[j + 1]) {
              let temp = arr[j + 1];
              arr[j + 1] = arr[j];
              arr[j] = temp;
              maxIndex = j;
          }
      }
      i = maxIndex;
  }
  return arr;
};
// 通过属性值冒泡排序
export function bubbleSortByProp(arr, prop) {
  let i = arr.length - 1;
  while (i > 0) {
      let maxIndex = 0;
      for (let j = 0; j < i; j++) {
          if (arr[j][prop] > arr[j + 1][prop]) {
              let temp = arr[j + 1];
              arr[j + 1] = arr[j];
              arr[j] = temp;
              maxIndex = j;
          }
      }
      i = maxIndex;
  }
  return arr;
}
// 按照属性值把数组分类
export function arrClassifyByProp(arr, prop) {
  let result = {};
  arr.forEach(item => {
      const key = item[prop];
      if (result[key]) {
          result[key].push(item);
      } else {
          result[key] = [item];
      }
  });
  return result;
}
// 通过属性值查找数组某一项
export function findArrItemByPropVal(arr, prop, val) {
  let result = null;
  for (let i = 0, l = arr.length; i < l; i++) {
      if (arr[i][prop] === val) {
          result = arr[i];
          break;
      }
  }
  return result;
}
// 获取指定月份天数
export function getDateByMon(year, month){
  let d = new Date(year, month, 0);
  return d.getDate();
}
// 判断时间是不是今天
export function isTodayDate(time) {
  if (time.toDateString() === new Date().toDateString()) {
      return true;
  } else {
      return false;
  }
}
// 对象判空
export function isObjEmpty(obj) {
  if (obj && obj.constructor === Object) {
      return Object.keys(obj).length;
  }
  if (obj && obj.constructor === Array) {
      return obj.length;
  }
}
// 扁平化对象数组
export function flatObjArr(obj) {
  let result = [];
  Object.keys(obj).forEach(key => {
      const list = obj[key];
      result = result.concat(list);
  });
  return result;
}
// 数组对象属性值转换映射对象 (参数 'a:b' [{a: c, b: d}] --> {c: d})
export function arrPropValToMap(arr, format) {
  const pArr = format.split(':');
  const p1 = pArr[0];
  const p2 = pArr[1];
  let res = {};
  for (let i = 0, l = arr.length; i < l; i++) {
      let v1 = arr[i][p1];
      let v2 = arr[i][p2];
      result[v1] = result[v2];
  }
  return res;
}
// 首字母大写
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
// 过滤值为空字符串或者为null的参数
export function getQuery(query) {
  let res = {};
  for (let [key, val] of Object.entries(query)) {
      if (typeof val === 'string') {
          if (!val.trim() || val === 'null') continue;
      } else {
          if (val === null || val === undefined) continue;
      }
      res[key] = val;
  };
  return res;
}

export function isImage(fileName) {
  if (typeof fileName !== 'string') return;
  let name = fileName.toLowerCase();
  return name.endsWith('.png') || name.endsWith('.jpeg') || name.endsWith('.jpg') || name.endsWith('.png') || name.endsWith('.bmp');
}

export function isH5Video(fileName) {
  if (typeof fileName !== 'string') return;
  let name = fileName.toLowerCase();
  return name.endsWith('.mp4') || name.endsWith('.webm') || name.endsWith('.ogg');
}
export function isPdf(fileName) {
  if (typeof fileName !== 'string') return;
  let name = fileName.toLowerCase();
  return name.endsWith('.pdf');
}

export function isWord(fileName) {
  if (typeof fileName !== 'string') return;
  let name = fileName.toLowerCase();
  return name.endsWith('.doc') || name.endsWith('.docx');
}

export function isExcel(fileName) {
  if (typeof fileName !== 'string') return;
  let name = fileName.toLowerCase();
  return name.endsWith('.xlsx') || name.endsWith('.xls');
}

export const sStorage = {
  set(key, val) {
      let valStr = JSON.stringify(val);
      if (sessionStorage !== null) {
          sessionStorage.setItem(key, valStr);
      }
  },
  get(key) {
      if (sessionStorage !== null) {
          let valStr = sessionStorage.getItem(key);
          return JSON.parse(valStr);
      } else {
          return null;
      }
  },
  clear() {
      if (sessionStorage !== null) {
          sessionStorage.clear();
      }
  }
}

export const lStorage = {
  set(key, val) {
      let valStr = JSON.stringify(val);
      if (localStorage !== null) {
          localStorage.setItem(key, valStr);
      }
  },
  get(key) {
      if (localStorage !== null) {
          let valStr = localStorage.getItem(key);
          return JSON.parse(valStr);
      } else {
          return null;
      }
  },
  clear() {
      if (localStorage !== null) {
          localStorage.clear();
      }
  }
};

export function openFullScreen(dom) {
  let el = dom,
      rfs =
          el.requestFullScreen ||
          el.webkitRequestFullScreen ||
          el.mozRequestFullScreen ||
          el.msRequestFullScreen,
      wscript;

  if (typeof rfs !== "undefined" && rfs) {
      rfs.call(el);
      return;
  }

  if (typeof window.ActiveXObject !== "undefined") {
      wscript = new ActiveXObject("WScript.Shell");
      if (wscript) {
          wscript.SendKeys("{F11}");
      }
  }
};

export function exitFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
  }
};