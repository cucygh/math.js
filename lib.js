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
  let result = [];
  let range = function(r, _arr) {
    if (r.length === num) {
      result.push(r)
    } else {
      let l = r.length;
      for (let i = 0, len = _arr.length - num + l; i <= len; i++) {
        range(r.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }
  range([], arr);
  return result
}

/**
 * [排列运算]
 * @param  {array} arr [基本数组]
 * @param  {number} num [排列长度]
 * @return {array}     [结果]
 */
math.arrange=function(arr,num){
  let result=[];
  let range=function(r,_arr){
    if(r.length===num){
      result.push(r)
    }else{
      switch (r.length) {
          case 0:
            _arr.forEach((item,idx)=>{
              let tmp=[].concat(_arr);
              tmp.splice(idx,1);
              range([item],tmp)
            })
          break;
          case 1:
            _arr.forEach((item,idx)=>{
              let tmp=[].concat(_arr);
              tmp.splice(idx,1)
              range([item].concat(r),tmp);
            })
          break;
          default:
            _arr.forEach((item,idx)=>{
              let tmp=[].concat(_arr);
              tmp.splice(idx,1);
              range(r.concat(item),tmp)
            });
      }
    }
  }
  range([],arr)
  return result;
}

/**
 * [求和运算]
 * @param  {array} arr [数值类型的数组]
 * @example [1,7,9]
 * @return {number}     [求和的结果]
 * @example 17
 */
math.sum = function(arr) {
  try {
    return eval(arr.join('+'))
  } catch (e) {
    return 0
  }
}
