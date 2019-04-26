const obj = {
    name: "bangbangji",
    age: 18,
    sayHello: function() {
        console.log(`我叫做${this.name}，我今年${this.age}`)
    }
}

obj.sayHello();