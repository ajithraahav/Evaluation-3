class fullname {
    constructor(fname, lname) {
// The constructor() method is usded to creating and initializing objects created within a class.

      this.fname = fname;
      this.lname = lname;
    }
  }

class detail extends fullname{
  constructor(fname, lname, age){
    super(fname, lname)
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

    this.age = age;
  }
  display(){
    return "My name is " + this.fname + this.lname + ". My age is" + this.age;
  }
}
bio = new detail("Raahav", "Ajith", 21);

console.log(bio.display());


