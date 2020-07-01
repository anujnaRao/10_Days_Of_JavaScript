
function sides(literals, ...expressions) {
    let a = expressions[0];
    let b = expressions[1];

    let root = Math.sqrt((b*b)- (16*a));
    let s1 = (b + root) /4;
    let s2 = (b - root) / 4;
    return ([s1,s2].sort());
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}
