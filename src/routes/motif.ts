import express from 'express';
import CtrlrMotif from '../controller/motif';

const RouterMotif = express.Router();

RouterMotif.get('/', CtrlrMotif.getAllMotif);
RouterMotif.get('/:id', CtrlrMotif.getMotifById);
RouterMotif.post('/', CtrlrMotif.addMotif);

module.exports = RouterMotif;
