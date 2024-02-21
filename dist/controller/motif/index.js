"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_all_1 = __importDefault(require("./get-all"));
var get_by_id_1 = __importDefault(require("./get-by-id"));
var add_motif_1 = __importDefault(require("./add-motif"));
var update_motif_1 = __importDefault(require("./update-motif"));
var get_by_industri_1 = __importDefault(require("./get-by-industri"));
var delete_motif_1 = __importDefault(require("./delete-motif"));
var get_by_image_id_1 = __importDefault(require("./get-by-image-id"));
var CtrlrMotif = {
    getAllMotif: get_all_1.default,
    getMotifById: get_by_id_1.default,
    getMotifImageById: get_by_image_id_1.default,
    addMotif: add_motif_1.default,
    updateMotif: update_motif_1.default,
    getMotifByIndustriId: get_by_industri_1.default,
    deleteMotif: delete_motif_1.default
};
exports.default = CtrlrMotif;
