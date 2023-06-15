function solution(n,m, section){
    let answer=0;

    let wallMin=section[0];
    let wallMax=section[section.length-1];

    let str = section.join('');

    section.forEach(v=>{
        let last = wallMin+m > n ? n+1 : wallMin+m;
        if(wallMin<=v && v<last){
            str=str.replace(String(v),'');
        }else{
            answer++;
            str=str.replace(String(v),'');
            wallMin=v;
        }
    })
    answer++;
    return answer;
}