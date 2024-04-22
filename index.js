(async () => {

    const database = require("./db");
    const Produto = require("./product");
    await database.sync();

})();