var math = {};

/**
 * [组合运算]
 * @param  {array} arr [进行组合运算的数组]
 * @example [1,3,2]
 * @param  {number} num [每几个元素为一组]
 * @return {array}     [返回组合集合]
 * @example [[1,3],[1,2],[3,2]]
 */
math.combo = function(arr, num) {
  var result = [];
  var range = function(r, _arr) {
    if (r.length == num) {
      result.push(r)
    } else {
      let l = r.length;
      for (var i = 0, len = _arr.length - num + l; i <= len; i++) {
        range(r.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }
  range([], arr);
  return result
}
