"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = require("express");
var routes_1 = require("./routes");
var server = (0, express_1.default)();
exports.server = server;
server.use(routes_1.router);
