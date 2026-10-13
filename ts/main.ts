// Entry point: this file and everything it imports is bundled into js/forum.js.
import { onReady } from "./utils";

onReady(() => {
  if (_userdata.session_logged_in === 1) {
    window.alert("Script successfully imported!");
    //console.log(`[forum.js] Connecté en tant que ${_userdata.username}`);
  }
});
