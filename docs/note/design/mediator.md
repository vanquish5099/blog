# 中介者模式（Mediator Pattern）

::: tip 解释
:::

```javascript
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message) {
    this.chatroom.send(this, message);
  }

  receive(sender, message) {
    console.log(`${this.name} received a message from ${sender.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    user.chatroom = this;
    this.users[user.name] = user;
  }

  send(sender


```
