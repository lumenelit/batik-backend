import { ModuleMotif } from '../../model/motif';

export default async function addMotif(req, res) {
  try {
    const data = req.body;

    const check = await ModuleMotif.getMotifById(data.idMotif);

    if (check.length > 0) {
      return res.status(400).json({
        status: false,
        message: 'Id Motif already exist',
      });
    }

    const result = await ModuleMotif.addMotif(data);

    res.json({
      status: true,
      message: 'Success add data',
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
