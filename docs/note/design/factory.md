# 工厂模式（Factory Pattern）

::: tip 解释

:::

```javascript
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'cat');
  }

  makeSound() {
    console.log(`${this.name} says meow.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'dog');
  }

  makeSound() {
    console.log(`${this.name} says woof.`);
  }
}

class AnimalFactory {
  createAnimal(name, type) {
    if (type === 'cat') {
      return new Cat(name);
    } else if (type === 'dog') {
      return new Dog(name);
    } else {
      return new Animal(name, type);
    }
  }
}

const animalFactory = new AnimalFactory();
const cat = animalFactory.createAnimal('Whiskers', 'cat');
const dog = animalFactory.createAnimal('Fido', 'dog');

cat.makeSound(); // "Whiskers says meow."
dog.makeSound(); // "Fido says woof."


```
