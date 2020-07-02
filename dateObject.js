function getDayName(dateString) {
    let dayName;
    let stringVal = new Date(dateString);
    let day = stringVal.getDay();
    switch(day){
        case 0: dayName = "Sunday";
                break;
        case 1: dayName = "Monday";
                break;
        case 2: dayName = "Tuesday";
                break;
        case 3: dayName = "Wednesday";
                break;
        case 4: dayName = "Thursday";
                break;
        case 5: dayName = "Friday";
                break;
        case 6: dayName = "Saturday";
                break;
    }
    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}
