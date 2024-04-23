(async () => {

    const database = require("./db");
    const Produto = require("./product");

    try {
        await database.sync();
        console.log("Database synchronized succesfully.");
    } catch (error) {
        console.error("Failed to synchronized database:", error);
    }

})();