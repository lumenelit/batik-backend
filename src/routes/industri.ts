import express from 'express';
import CtrlrIndustri from '../controller/industri';

const RouterIndustri = express.Router();

RouterIndustri.get('/', CtrlrIndustri.getAll);
RouterIndustri.get('/:id', CtrlrIndustri.getById);
RouterIndustri.post('/', CtrlrIndustri.addIndustri);

module.exports = RouterIndustri;
