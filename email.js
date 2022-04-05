function grouping (User){
    let Groupone = [];
    let Grouptwo = [];
    
    for (let i = 1; i <= 100; i++){
        if (i % 2 === 0){
            EvenGroup.push(i);
        }
        else{
            OddGroup.push(i);
        }
    }

    console.log("Total Number of OddGroup = " + Groupone.length)
    console.log("Total Number of EvenGroup = " + Grouptwo.length)
}