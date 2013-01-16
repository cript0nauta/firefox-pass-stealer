// Import the page-mod API
 var pageMod = require("page-mod");
  
  // Create a page mod
  // It will run a script whenever a ".org" URL is loaded
  // The script replaces the page contents with a message
  pageMod.PageMod({
    include: "*",
      contentScriptFile: require("self").data.url('infector.js')
                       });
