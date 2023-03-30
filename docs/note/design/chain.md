# 职责链模式（Chain of Responsibility Pattern）

::: tip 解释
:::

```javascript
class Request {
  constructor(amount) {
    this.amount = amount;
  }
}

class Handler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }

    return null;
  }
}

class Manager extends Handler {
  handle(request) {
    if (request.amount < 1000) {
      return `Manager handled the request: ${request.amount}`;
    }

    return super.handle(request);
  }
}

class Director extends Handler {
  handle(request) {
    if (request.amount < 5000) {
      return `Director handled the request: ${request.amount}`;
    }

    return super.handle(request);
  }
}

class President extends Handler {
  handle(request) {
    if (request.amount < 10000) {
      return `President handled the request: ${request.amount}`;
    }

    return `The request cannot be handled`;
  }
}

const manager = new Manager();
const director = new Director();
const president = new President();

manager.setNext(director).setNext(president);

console.log(manager.handle(new Request(500))); // "Manager handled the request: 500"
console.log(manager.handle(new Request(5000))); // "Director handled the request: 5000"
console.log(manager.handle(new Request(15000))); // "The request cannot be handled"


```
