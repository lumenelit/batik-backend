"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var industri_1 = __importDefault(require("../controller/industri"));
var RouterIndustri = express_1.default.Router();
RouterIndustri.get("/", industri_1.default.getAll);
RouterIndustri.get("/:id", industri_1.default.getById);
RouterIndustri.get("/image/:id", industri_1.default.getIndustriImageById);
RouterIndustri.post("/", industri_1.default.addIndustri);
RouterIndustri.patch("/:id", industri_1.default.updateIndustri);
RouterIndustri.delete("/:id", industri_1.default.deleteIndustri);
module.exports = RouterIndustri;
