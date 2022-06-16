class myName{
    constructor(fname){
        this.fname = fname;
    }
}

const names = new myName("Ajith");

console.log(names.fname);

//In the class constructor this refers to the object, and all the non-static methods are properties of this.
