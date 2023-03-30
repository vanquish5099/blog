# 装饰器模式（Decorator Pattern）

::: tip 解释
:::

```javascript
class Coffee {
  cost() {
    return 1;
  }
}

class MilkCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 0.5;
  }
}

class WhipCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 0.7;
  }
}

const coffee = new Coffee();
const milkCoffee = new MilkCoffee(coffee);
const whipCoffee = new WhipCoffee(milkCoffee);

console.log(whipCoffee.cost()); // 2.2

```
