# 策略模式（Strategy Pattern）

::: tip 解释
:::

```javascript
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute() {
    return this.strategy.execute();
  }
}

class StrategyA {
  execute() {
    return 'Strategy A';
  }
}

class StrategyB {
  execute() {
    return 'Strategy B';
  }
}

const context1 = new Context(new StrategyA());
console.log(context1.execute()); // "Strategy A"

const context2 = new Context(new StrategyB());
console.log(context2.execute()); // "Strategy B"


```
