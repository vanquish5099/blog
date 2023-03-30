# 外观模式（Facade Pattern）

::: tip 解释
:::

```javascript
class CPU {
  freeze() {}
  jump(position) {}
  execute() {}
}

class Memory {
  load(position, data) {}
}

class HardDrive {
  read(lba, size) {}
}

class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

const computer = new Computer();
computer.start();


```
