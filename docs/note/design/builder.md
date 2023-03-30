# 建造者模式（Builder Pattern） 

::: tip 解释
:::

```javascript
class Burger {
  constructor(builder) {
    this.patty = builder.patty;
    this.cheese = builder.cheese;
    this.sauce = builder.sauce;
    this.toppings = builder.toppings;
  }
}

class BurgerBuilder {
  constructor() {
    this.patty = null;
    this.cheese = null;
    this.sauce = null;
    this.toppings = [];
  }

  setPatty(patty) {
    this.patty = patty;
    return this;
  }

  setCheese(cheese) {
    this.cheese = cheese;
    return this;
  }

  setSauce(sauce) {
    this.sauce = sauce;
    return this;
  }

  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }
  build() {
    return new Burger(this);
  }
}

const burger = new BurgerBuilder()
  .setPatty('beef')
  .setCheese('cheddar')
  .setSauce('ketchup')
  .addTopping('lettuce')
  .addTopping('tomato')
  .build();

console.log(burger);
// Burger {
//   patty: 'beef',
//   cheese: 'cheddar',
//   sauce: 'ketchup',
//   toppings: [ 'lettuce', 'tomato' ]
// }

```
