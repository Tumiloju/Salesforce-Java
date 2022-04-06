function grouping (User){
    let Groupone = [];
    let Grouptwo = [];
    
    for (let i = 1; i <= 100; i++){
        if (i % 2 === 0){
            Groupone.push(i);
        }
        else{
            Grouptwo.push(i);
        }
    }

    console.log("Total Number of Groupone = " + Groupone.length)
    console.log("Total Number of Grouptwo = " + Grouptwo.length)
}