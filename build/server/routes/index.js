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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/originalMovies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    try {
        // const originalMovies = await fetchOriginalsMovies();
        // if (originalMovies) {
        res.status(200).send("Bompas não ira na pizza amanha");
        // }
    }
    catch (error) {
        res.status(400).json({ message: error.message, });
    }
}));
