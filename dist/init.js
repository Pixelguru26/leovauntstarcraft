// Hooks.once("init", function() {
//   console.log("Initializing leovauntstarcraft...");
// });
console.log("Loading Leovaunt Starcraft System, this is a debug message.");
// import ActorSheet from "./module/ActorSheet";
import * as LVSCModule from "./module/module.js";
Hooks.once("init", function () {
    console.log("Initializing Leovaunt Starcraft system...");
    CONFIG.Actor.documentClass = LVSCModule.Actor;
    // Actors.registerSheet("")
});
