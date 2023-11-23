import express from "express";
import CtrlrIndustri from "../controller/industri";

const RouterIndustri = express.Router();

RouterIndustri.get("/", CtrlrIndustri.getAll);
RouterIndustri.get("/:id", CtrlrIndustri.getById);
RouterIndustri.get("/image/:id", CtrlrIndustri.getIndustriImageById);
RouterIndustri.post("/", CtrlrIndustri.addIndustri);
RouterIndustri.patch("/:id", CtrlrIndustri.updateIndustri);
RouterIndustri.delete("/:id", CtrlrIndustri.deleteIndustri);

module.exports = RouterIndustri;
