//There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function
//that returns the number of unique ways you can climb the staircase. The order of the steps matters.

function climbStairs(steps) {
    let arrLength = steps;
    let start = arrLength - 2;
    let limit = arrLength / 2;
    let answer = arrLength;

    while ( start >= limit ) {
        if (start == limit) {
            answer += 1;
            start -= 1;
        } else {
            answer += Math.floor(start * 1.5);
            start -= 1;
        }
    }

    return answer;
}

console.log( climbStairs ( 8 ) );