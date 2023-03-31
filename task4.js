/* 4번 문제 답안을 작성해주세요. */
let ans=1;

for(let i=1; i<10; i++){
    if(ans > n){
        return i-1;
    }else{
        ans *= i;
    }
}