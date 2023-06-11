function solution(array) {
  let answer = 0;
  array.forEach(v=>{
      const str = String(v);
      for(let i =0; i<str.length; i++){
          if(str[i]=='7')answer++;
      }
  })
  return answer;
}