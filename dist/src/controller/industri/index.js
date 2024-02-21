"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_all_1 = __importDefault(require("./get-all"));
var get_by_id_1 = __importDefault(require("./get-by-id"));
var get_image_1 = __importDefault(require("./get-image"));
var add_industri_1 = __importDefault(require("./add-industri"));
var update_industri_1 = __importDefault(require("./update-industri"));
var delete_industri_1 = __importDefault(require("./delete-industri"));
var CtrlrIndustri = {
    getAll: get_all_1.default,
    getById: get_by_id_1.default,
    addIndustri: add_industri_1.default,
    updateIndustri: update_industri_1.default,
    deleteIndustri: delete_industri_1.default,
    getIndustriImageById: get_image_1.default,
};
exports.default = CtrlrIndustri;
