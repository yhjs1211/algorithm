function solution(my_string) {
    let answer = my_string.split('').map(v=>{
                        if(v.match(/[a-z]/)){
                            return v.toUpperCase();
                        }else{
                            return v.toLowerCase();
                        }
                    }).join('');
    
    return answer;
}