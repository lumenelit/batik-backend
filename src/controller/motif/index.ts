import getAllMotif from './get-all';
import getMotifById from './get-by-id';
import addMotif from './add-motif';
import updateMotif from './update-motif';
import getMotifByIndustriId from './get-by-industri';
import deleteMotif from './delete-motif';
import getMotifImageById from './get-by-image-id';

const CtrlrMotif = {
  getAllMotif,
  getMotifById,
  getMotifImageById,
  addMotif,
  updateMotif,
  getMotifByIndustriId,
  deleteMotif
};

export default CtrlrMotif;
