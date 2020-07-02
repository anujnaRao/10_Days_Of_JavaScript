function getMaxLessThanK(n, k){
    let val = 0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            if((i & j) < k && (i & j) > 0){ 
                val = i & j;
            }
        }
    }
    return val;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
