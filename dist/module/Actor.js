export default class LVSCActor extends Actor {
    constructor() {
        super(...arguments);
        this.potato = false;
    }
    prepareDerivedData() {
        super.prepareDerivedData();
        this.potato = true;
    }
}
