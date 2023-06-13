function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++){
        let arrL = arr1[i].length;
        let pushArr = [];
        for(let j=0; j<arrL; j++){
            pushArr.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(pushArr);
    }
    return answer;
}