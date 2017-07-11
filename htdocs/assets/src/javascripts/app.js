import styles from '../stylesheets/_hoge.scss';
import Calc from 'src/calc';

class Onigiri {
  constructor() {

  }

  init() {
    console.log(this.getAA());
    // console.log('addition:' + Calc.addition(2, 2));
    // console.log('subtraction:' + Calc.subtraction(2, 2));
    // console.log('multiplication:' + Calc.multiplication(2, 2));
    // console.log('division:' + Calc.division(2, 2));
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