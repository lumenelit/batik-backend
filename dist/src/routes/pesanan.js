"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pesanan_1 = __importDefault(require("../controller/pesanan"));
var RouterPesanan = express_1.default.Router();
RouterPesanan.get('/', pesanan_1.default.getAllPesanan);
RouterPesanan.get('/:id', pesanan_1.default.getPesananById);
RouterPesanan.post('/', pesanan_1.default.addPesanan);
RouterPesanan.patch('/:id', pesanan_1.default.updatePesanan);
RouterPesanan.delete('/:id', pesanan_1.default.deletePesanan);
module.exports = RouterPesanan;
