let day = prompt("please enter the day (monday -1, sunday -7)", "1");
switch (parseInt (day)){
    case 6:
    case 7:
        alert("weekend");
        break
    default:
        alert("workday");
    break
}