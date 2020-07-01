function modifyArray(nums){
    const reArray = nums.map(a => {
        if(a % 2 == 0)
        a *= 2;
    else
        a *= 3;
    return (a) ;
  });
  return reArray;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}
