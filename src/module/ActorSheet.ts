export default class LVSCActorSheet<
Options extends ActorSheet.Options = ActorSheet.Options,
Data extends object = ActorSheet.Data<Options>
> extends ActorSheet<Options, Data> {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      
    });
  }

  get template() {
    return "./templates/sheets/character.hbs";
  }

  override getData(options?: Partial<Options>): Data {
    const context = super.getData();

    const ret = {
      ...context
    };

    return ret as Data;
  }
}