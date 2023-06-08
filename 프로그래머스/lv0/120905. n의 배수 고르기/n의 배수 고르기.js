function solution(n, numlist) {
    return numlist.filter(v=>{if(v%n==0)return v;});
}