"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const env_1 = __importDefault(require("./config/env"));
app.get("/", (req, res) => {
    res.send("Hello typescript");
});
app.listen(env_1.default.Port, () => {
    console.log(`listening at port ${env_1.default.Port}`);
});
