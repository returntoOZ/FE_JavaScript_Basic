/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    var answer = 1;
    var ans = 1;
    for(let i=1; i<11; i++){
        if(answer>n){
             break;
        }else{
            answer *= (i+1);
            ans++;
        }
    }
    return ans-1;
}