import { ONIGIRI, ONIGIRI_AA } from './onigiri';

class Onigiri {
  init() {
    console.log(ONIGIRI)
    console.log(this.getAA())
  }

  getAA() {
    return ONIGIRI_AA
  }
}

new Onigiri().init();