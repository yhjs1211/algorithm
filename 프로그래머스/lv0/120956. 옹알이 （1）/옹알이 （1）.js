function solution(babbling) {
    const canSpell = ['aya', 'ma', 'woo', 'ye'];    
    let arr = babbling;
    arr.sort().forEach((v,idx)=>{
        let csIdx=0;
        while(csIdx!=canSpell.length){
            if(arr[idx].startsWith(canSpell[csIdx])){
                arr[idx]=arr[idx].replace(canSpell[csIdx],'');
                csIdx=0;
            }else{
                csIdx++;
            }
        }
    })
    console.log(arr);
    let answer = arr.filter(v=>v=='').length;
    return answer;
}