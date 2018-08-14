var math = {}

/**
 * [组合运算]
 * @param  {array} arr [进行组合运算的数组]
 * @example [1,3,2]
 * @param  {number} num [每几个元素为一组]
 * @return {array}     [返回组合集合]
 * @example [[1,3],[1,2],[3,2]]
 */
math.combo = function (arr, num) {
  let result = []
  let range = function (r, _arr) {
    if (r.length === num) {
      result.push(r)
    } else {
      let l = r.length
      for (let i = 0, len = _arr.length - num + l; i <= len; i++) {
        range(r.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }
  range([], arr)
  return result
}

/**
 * [排列运算]
 * @param  {array} arr [基本数组]
 * @param  {number} num [排列长度]
 * @return {array}     [结果]
 */
math.arrange = function (arr, num) {
  let result = []
  let range = function (r, _arr) {
    if (r.length === num) {
      result.push(r)
    } else {
      switch (r.length) {
        case 0:
          _arr.forEach((item, idx) => {
            let tmp = [].concat(_arr)
            tmp.splice(idx, 1)
            range([item], tmp)
          })
          break
        case 1:
          _arr.forEach((item, idx) => {
            let tmp = [].concat(_arr)
            tmp.splice(idx, 1)
            range([item].concat(r), tmp)
          })
          break
        default:
          _arr.forEach((item, idx) => {
            let tmp = [].concat(_arr)
            tmp.splice(idx, 1)
            range(r.concat(item), tmp)
          })
      }
    }
  }
  range([], arr)
  return result
}

/**
 * [求和运算]
 * @param  {array} arr [数值类型的数组]
 * @example [1,7,9]
 * @return {number}     [求和的结果]
 * @example 17
 */
math.sum = function (arr) {
  try {
    return window.eval(arr.join('+'))
  } catch (e) {
    return 0
  }
}

/**
 * [数字转中文]
 * @param  {number} num [1亿一下的数字]
 * @example 0~9 零一二三四五六七八九
 * @example 10~19 十[一二三四五六七八九]
 * @example 20~29 二十[一二三四五六七八九]
 * @example 100~199
 * @return {string}     [文本]
 */
math.num2cn = function (num) {
  let cn = '零一二三四五六七八九', pow = ' 十百千万十百千亿十百千万亿', _int, _float
  if (/\./g.test(num.toString())) {
    _int = Math.floor(num)
    _float = num.toString().replace(_int.toString(), '0')
  } else {
    _int = num
  }
  let reg = [{test: /\s/g, val: ''}, {test: /^一十/g, val: '十'}, {test: /零[十百千万亿]/g, val: '零'}, {test: /零+/g, val: '零'}, {test: /零$/g, val: ''}]
  let _ = (n, pos) => {
    return cn[String.prototype.slice.apply(n.toString(), pos === 1 ? [-pos] : [-pos, -pos + 1]) * 1] + pow[pos - 1]
  }
  let r = []
  for (let i = 0, len = _int.toString().length; i < len; i++) {
    r.push(_(_int, len - i))
  }
  r = r.join('')
  reg.forEach(item => {
    r = r.replace(item.test, item.val)
  })
  if (_float) {
    let _s = ['点']
    Array.prototype.forEach.call(_float.toString().slice(2), item => {
      _s.push(cn[item * 1])
    })
    r += _s.join('')
  }
  return r
}

/**
 * [判断一个数是不是另一个数的n次方]
 * @param  {number} num [要判断]
 * @param  {number} base [基数]
 * @example isSqrt(9,3) true
 * @return {boolean}     [true | false]
 */
math.isSqrt = function (num, base) {
  if (num !== 1) {
    while (num !== 1) {
      if (num % base === 0) {
        num = num / base
      } else {
        return false
      }
    }
    return true
  } else {
    return true
  }
}
