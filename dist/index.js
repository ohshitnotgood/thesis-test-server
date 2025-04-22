"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const v2router_1 = require("./v2/v2router");
const v1router_1 = require("./v1/v1router");
exports.app = (0, express_1.default)();
const port = 3000;
exports.app.use("/v1", v1router_1.v1Router);
exports.app.use("/v2/", v2router_1.v2Router);
exports.app.listen(port, () => {
    console.log("starting server");
});
exports.default = exports.app;
