let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0


let ladder2 = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this
    }
};

ladder2
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0