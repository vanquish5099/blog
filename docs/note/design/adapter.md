# 适配器模式（Adapter Pattern）

::: tip 解释
:::

```javascript
class Adaptee {
  request() {
    return 'Adaptee Request';
  }
}

class Adapter {
  constructor(adaptee) {
    this.adaptee = adaptee;
  }

  request() {
    const result = this.adaptee.request();
    return `${result} - Adapter Request`;
  }
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request()); // "Adaptee Request - Adapter Request"

```

```javascript
class OldCalculator {
  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return term1 + term2;
      case 'sub':
        return term1 - term2;
      default:
        return NaN;
    }
  }
}

class NewCalculator {
  add(term1, term2) {
    return term1 + term2;
  }

  sub(term1, term2) {
    return term1 - term2;
  }
}

class Adapter {
  constructor() {
    this.newCalculator = new NewCalculator();
  }

  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return this.newCalculator.add(term1, term2);
      case 'sub':
        return this.newCalculator.sub(term1, term2);
      default:
        return NaN;
    }
  }
}

const oldCalculator = new OldCalculator();
console.log(oldCalculator.operations(10, 5, 'add')); // 15

const adapter = new Adapter();
console.log(adapter.operations(10, 5, 'add')); // 15

```
