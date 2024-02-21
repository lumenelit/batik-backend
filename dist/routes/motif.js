"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var motif_1 = __importDefault(require("../controller/motif"));
var RouterMotif = express_1.default.Router();
RouterMotif.get('/', motif_1.default.getAllMotif);
RouterMotif.get('/:id', motif_1.default.getMotifById);
RouterMotif.get('/image/:id', motif_1.default.getMotifImageById);
RouterMotif.get('/industri/:id', motif_1.default.getMotifByIndustriId);
RouterMotif.post('/', motif_1.default.addMotif);
RouterMotif.patch('/:id', motif_1.default.updateMotif);
RouterMotif.delete('/:id', motif_1.default.deleteMotif);
module.exports = RouterMotif;
