"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_all_1 = __importDefault(require("./get-all"));
var get_by_id_1 = __importDefault(require("./get-by-id"));
var add_pesanan_1 = __importDefault(require("./add-pesanan"));
var update_pesanan_1 = __importDefault(require("./update-pesanan"));
var delete_1 = __importDefault(require("./delete"));
var CtrlrPesanan = {
    getAllPesanan: get_all_1.default,
    getPesananById: get_by_id_1.default,
    addPesanan: add_pesanan_1.default,
    updatePesanan: update_pesanan_1.default,
    deletePesanan: delete_1.default,
};
exports.default = CtrlrPesanan;
