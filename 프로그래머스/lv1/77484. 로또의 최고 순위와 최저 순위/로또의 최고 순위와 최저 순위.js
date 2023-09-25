function solution(lottos, win_nums) {
    const lottoResult = {
        0:6,
        1:6,
        2:5,
        3:4,
        4:3,
        5:2,
        6:1,
    }
    const eraseCount = lottos.filter(lotto=>lotto===0).length
    const correctCount = lottos.filter(lotto=>win_nums.includes(lotto)).length
    return [lottoResult[correctCount + eraseCount] , lottoResult[correctCount]];
}