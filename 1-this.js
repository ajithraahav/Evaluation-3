const details = {
    names: "ajith",
    age: 21,
    comapany: "yavar",
    about: function () {
        return `My name is ${this.names}, my age is ${age}. I am working in ${this.comapany}`
    }
}

console.log(details.about());