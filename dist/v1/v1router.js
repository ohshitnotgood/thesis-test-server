"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
exports.v1Router = express_1.default.Router();
/**
 * JSON route
 */
exports.v1Router.get("/json", (req, res) => {
    const response = {
        "usrId": "someUserId_but_this_should_be_ignored",
        "ssnId": "someSessionId_but_this_should_also_be_ignored",
        "rndField": "randomFieldShouldBeDetected_but_not_this_msg"
    };
    res.json(response);
});
/**
 * Plain-text route
 */
exports.v1Router.get("/plain-text", (req, res) => {
    const response = "1. Hljóðs bið ek allar helgar kindir, \
    meiri ok minni mögu Heimdallar; \
    viltu, at ek, Valföðr! vel framtelja forn spjöll fíra, \
    þau er fremst um man.";
    res.send(response);
});
