'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function vowelsAndConsonants(s) {
        
        for (let val =0; val< s.length; val++) {
            if(s.charAt(val) == 'a' || s.charAt(val) == 'e' || s.charAt(val) == 'i' || s.charAt(val) == 'o' || s.charAt(val) == 'u'){
                console.log(s.charAt(val));
            } 
            else{
                continue;
            }
        }
        for(let val =0; val< s.length; val++){
            if(s.charAt(val) != 'a' && s.charAt(val) != 'e' && s.charAt(val) != 'i' && s.charAt(val) != 'o' && s.charAt(val) != 'u'){
                console.log(s.charAt(val));
            } 
            else{
                continue;
            }   
        }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
