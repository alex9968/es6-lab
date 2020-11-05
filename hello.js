function Person(name) {
  this.name = name

  this.say = () => {
    console.log("my name is", this.name)
  }
}
Person.prototype.toString = () => {
  console.log("Person toString")
}

function BigPerson() {
  this.obj = Person
  this.obj('alex')
  delete this.obj

  this.say = () => {
    console.log("I am Working")
  }
}

BigPerson.prototype = Object.create(Person.prototype)
BigPerson.prototype.constructor = BigPerson//借鸡下蛋，假装是自己的

BigPerson.prototype.toString = () => {
  console.log("BigPerson toString")
}







const alex = new BigPerson()
alex.name // => alex
alex.say() // => my name is alex
//alex.say2()
alex.toString()

function P2() {
  constructor() {
    this.name = 'name'
  }
  this.age = 23
}


