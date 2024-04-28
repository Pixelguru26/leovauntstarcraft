export default class LVSCActorSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {});
    }
    get template() {
        return "./templates/sheets/character.hbs";
    }
    getData(options) {
        const context = super.getData();
        const ret = Object.assign({}, context);
        return ret;
    }
}
