export default class LVSCActor extends Actor {

  potato : boolean = false;

  prepareDerivedData(): void {
      super.prepareDerivedData();
      this.potato = true;
  }
}