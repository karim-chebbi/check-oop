
// Define the Animal class
class Animal {
  constructor(name) {
    this.name = name;
  }

  describe() {
    console.log(`This is ${this.name}.`);
  }

  sound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Example usage
const genericAnimal = new Animal("Generic Animal");
genericAnimal.describe(); // Output: This is Generic Animal.
genericAnimal.sound(); // Output: Generic Animal makes a sound.


/*************************************************************************************/

// Dog class
class Dog extends Animal {
    sound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
}

// Cat class
class Cat extends Animal {
    sound() {
        console.log(`${this.name} meows: Meow!`);
    }
}

// Example usage
const dog = new Dog("Buddy");
dog.describe(); // Output: This is Buddy.
dog.sound();    // Output: Buddy barks: Woof! Woof!

const cat = new Cat("Whiskers");
cat.describe(); // Output: This is Whiskers.
cat.sound();    // Output: Whiskers meows: Meow!



/*************************************************************************************/


const animals = [
    new Dog("Rex"),
    new Cat("Luna"),
    new Animal("Charlie")
];

animals.forEach(animal => {
    animal.describe();
    animal.sound();
});

/*
Output:
This is Rex.
Rex barks: Woof! Woof!
This is Luna.
Luna meows: Meow!
This is Charlie.
Charlie makes a sound.
*/
