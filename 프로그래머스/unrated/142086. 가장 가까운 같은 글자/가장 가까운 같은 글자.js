function solution(s) {
  let answer = [];
  let str='';
  for(let i=0; i<s.length; i++){
      if(!str.includes(s[i])){
          str+=s[i];
          answer.push(-1);
      }else{
          answer.push(i-str.lastIndexOf(s[i]));
          str+=s[i];
      }
  }
  return answer;
}