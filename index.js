(async function () {
  try {
    console.log(`Setting up the server...`);    
    require("dotenv").config({ path: '.env' });
    await require("./Src/server.js");
  } catch ($err) {
    console.error($err);
    return $err;
  }
})();