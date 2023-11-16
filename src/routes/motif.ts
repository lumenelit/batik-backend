import express from 'express';
import CtrlrMotif from '../controller/motif';

const RouterMotif = express.Router();

RouterMotif.get('/', CtrlrMotif.getAllMotif);
RouterMotif.get('/:id', CtrlrMotif.getMotifById);
RouterMotif.post('/', CtrlrMotif.addMotif);
RouterMotif.patch('/:id', CtrlrMotif.updateMotif);

module.exports = RouterMotif;
