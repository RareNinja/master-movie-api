"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
server_1.server.listen(process.env.PORT || 3333, function () {
    console.log("Server rodo!");
});
