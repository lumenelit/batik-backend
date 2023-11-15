import { ModuleMotif } from '../../model/motif';

export default async function updateMotif(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;

    const check = await ModuleMotif.getMotifById(id);

    if (check.length === 0) {
      return res.status(400).json({
        status: false,
        message: 'Id Motif not found',
      });
    }

    const result = await ModuleMotif.updateMotif(id, data);

    res.json({
      status: true,
      message: 'Success update data',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: 'Internal server error',
    });
  }
}
