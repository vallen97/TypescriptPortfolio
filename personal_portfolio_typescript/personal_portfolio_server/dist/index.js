"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.get("/", (_, res) => {
        res.send("Hello from express");
    });
    app.get("/snakeai/bestsnale.json", (_, res) => {
        res.send("Get the json of the snake and send to the user.");
    });
    app.listen(9000, () => console.log("Server started on localhost:9000"));
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map