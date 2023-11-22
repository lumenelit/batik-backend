import express from 'express';
import CtrlrMotif from '../controller/motif';

const RouterMotif = express.Router();

RouterMotif.get('/', CtrlrMotif.getAllMotif);
RouterMotif.get('/:id', CtrlrMotif.getMotifById);
RouterMotif.get('/industri/:id', CtrlrMotif.getMotifByIndustriId);
RouterMotif.post('/', CtrlrMotif.addMotif);
RouterMotif.patch('/:id', CtrlrMotif.updateMotif);
RouterMotif.delete('/:id', CtrlrMotif.deleteMotif);

module.exports = RouterMotif;
