import express from "express";
import CtrlrAdmin from "../controller/admin";

const RouterAdmin = express.Router();

RouterAdmin.get("/", CtrlrAdmin.getAll);
RouterAdmin.post("/login", CtrlrAdmin.getById);
RouterAdmin.post("/", CtrlrAdmin.addAdmin);

module.exports = RouterAdmin;
