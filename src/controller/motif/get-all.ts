import { ModuleMotif } from '../../model/motif';

export default async function getAllMotif(req, res) {
  try {
    const result = await ModuleMotif.getAllMotif();

    res.json({
      status: true,
      message: 'Success get data',
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
