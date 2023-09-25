function solution(dartResult) {
    let otherValue = 0, nowValue = '', beforeValue = ''

    for(let idx=0;idx<dartResult.length;idx++){
        switch(dartResult[idx]){
            case 'S':
                nowValue = (nowValue)
                break
            case 'D':
                nowValue = Math.pow(Number(nowValue),2).toString()
                break
            case 'T':
                nowValue = Math.pow(Number(nowValue),3).toString()
                break
            case '*':
                beforeValue = String(Number(beforeValue) * 2)
                nowValue = String(Number(nowValue) * 2)
                break
            case '#':
                nowValue = Number(nowValue * -1).toString()
                break
            default:
                if(dartResult[idx+1] === '0' && dartResult[idx] === '1'){
                    otherValue += Number(beforeValue)
                    beforeValue = nowValue
                    nowValue = '10'
                    idx++
                }
                else{
                    otherValue += Number(beforeValue)
                    beforeValue = nowValue
                    nowValue = dartResult[idx]
                }
        } 
    }

    return Number(nowValue) + Number(beforeValue) + otherValue
}