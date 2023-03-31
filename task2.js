/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    let es = 0;
    let os = 0;
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2 === 0){
            es++;
        }else{
            os++;
        }
    }
    let arr = [es,os];
    return arr;
}