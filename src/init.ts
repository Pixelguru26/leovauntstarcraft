// Hooks.once("init", function() {
//   console.log("Initializing leovauntstarcraft...");
// });

console.log("Loading Leovaunt Starcraft System, this is a debug message.");


import { documents } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/module.mjs";
// import ActorSheet from "./module/ActorSheet";
import *  as LVSCModule from "./module/module.js";

Hooks.once("init", function() {
  console.log("Initializing Leovaunt Starcraft system...");
  CONFIG.Actor.documentClass = LVSCModule.Actor;

  // Actors.registerSheet("")
});