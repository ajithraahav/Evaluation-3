const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => { 
    console.log(ex);
    setTimeout(ex1, 1000);
    ex2(); 
}

ex();

//output : ex -> ex2 -> ex1

// In the above code ex() funciton is called inside that the first log prints "ex" and the next it goes to "setTimeout(ex1, 1000)" but it take time to display it will inside the queue the next log "ex2()" will be diplayed and then after the particular time given it will be diplayed.
