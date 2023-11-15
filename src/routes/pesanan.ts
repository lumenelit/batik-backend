import express from 'express';
import CtrlrPesanan from '../controller/pesanan';

const RouterPesanan = express.Router();

RouterPesanan.get('/', CtrlrPesanan.getAllPesanan);
RouterPesanan.get('/:id', CtrlrPesanan.getPesananById);
RouterPesanan.post('/', CtrlrPesanan.addPesanan);
RouterPesanan.patch('/:id', CtrlrPesanan.updatePesanan);

module.exports = RouterPesanan;
