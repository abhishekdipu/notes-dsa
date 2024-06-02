/*
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function addNumbers(a, b) {
    return a+b  
}


function main() {
    // var a = parseInt(readLine());
    // var b = parseInt(readLine());;

    // var res = addNumbers(a, b);
    
    let target = 12;
    let position = [10,8,0,5,3];
    let speed = [2,4,1,1,3];
    
    let map = {};

    for(let i=0; i<position.length; i++){
        map[position[i]] = speed[i];
    };
    // {0: 1, 3: 3, }
    console.log('map-->',map);
    let keys = Object.keys(map).sort((a,b) => Number(a)-Number(b));
     console.log('keys-->',keys);
    let sMap = {};
    keys.forEach(key=> {
        sMap[key] = map[key];
    })
    // console.log(sMap);
    
    
    const reqMap = {};
    const req = [];
    
    for( let key in sMap){
        let rem = target-Number(key);
        let time = rem/sMap[key];
        // console.log('time', time);
        reqMap[time] = 0;
        req.push(time);
    }
    
    // console.log(reqMap);
    console.log(req);
    
    
    let fleets = 0;
    for(let i=0; i<req.length; i++){
        for(let j=1; j<req.length; j++){
            if(req[j]>=req[i] && reqMap[req[j]]===0){
                fleets++;
                reqMap[req[j]] = 1;
            }else{
                fleets++;
            } 
        }
    }
 console.log('ans',fleets);
 return fleets;
   
}
Your old code in python3 has been preserved below.
/*
There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

 Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

req = [2,4,12,7,9] => [1,1,12,7,3] => [12, 3, 7, 1, 1]
*/
