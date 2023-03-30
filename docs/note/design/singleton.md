# 单例模式（Singleton Pattern）

::: tip 解释
确保只有一个实例，并提供全局访问点。在 JavaScript 中，可以通过使用闭包实现单例模式，例如：
:::

```javascript
var Singleton = (function() {
  var instance;
  function init() {
    // 私有方法和变量
    function privateMethod() {
      console.log('I am a private method');
    }
    var privateVariable = 'I am a private variable';
    return {
      // 公有方法和变量
      publicMethod: function() {
        console.log('I am a public method');
      },
      publicVariable: 'I am a public variable'
    };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

```

```javascript
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'ChatGPT'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
```

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  getValue() {
    return Math.random();
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getValue()); // a random number
console.log(instance2.getValue()); // the same random number as above
```