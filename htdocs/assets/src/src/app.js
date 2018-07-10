import { sum } from './calc';

class Onigiri {
  constructor() {

  }

  init() {
    console.log(this.getAA());
    console.log(sum(1,2));
  }

  getAA() {
    return `
／■ヽ ／■ヽ┤／■ヽ
( ･∀･)( ･∀･)ﾉ( ･∀･) < yeah
|二二|-|二二|-ﾛ(　O┬O
～◎　　 ◎ ≡◎ヽJ┴◎
    `
  }
}

new Onigiri().init();