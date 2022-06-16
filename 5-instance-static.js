class fullname{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    static display(val){  
        return "My name is "+ val.fname +" "+ val.lname +"."; 
    }
}

mybio = new fullname("Raahav", "Ajith")


console.log(mybio.fname);//Class instance method is useful when we create class instacne method. It contains the class data which created using new operator.


console.log(fullname.display(mybio)); //Static method is called diredtly on the class without creating instance
