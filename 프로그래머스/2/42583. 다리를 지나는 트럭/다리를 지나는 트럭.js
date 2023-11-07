function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const onBridge = Array(bridge_length).fill(0);
    
    while(onBridge.length!==0){
        const passedTruck = onBridge.shift();
        if(passedTruck) weight+=passedTruck;
        
        if(truck_weights[0]){
            if(weight-truck_weights[0]>=0){
                let truck = truck_weights.shift();
                weight-=truck;
                onBridge.push(truck);    
            }else{
                onBridge.push(0);
            }
        }
        answer++;
    }
    
    return answer;
}