function solution(age) {
    let a = 'a'.codePointAt();
    let z = 'z'.codePointAt();

    let map = new Map();
    for(let i = a; i<=z; i++){
        map.set(String(i-97),String.fromCharCode(i));
    }
    
    age = String(age);
    let answer='';
    
    for(let i=0; i<age.length; i++){
        answer+=map.get(String(age)[i]);
    }
    
    return answer;
}