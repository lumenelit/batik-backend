import { ModuleMotif } from '../../model/motif';

export default async function deleteMotif(req, res) {
  try {
    const { id } = req.params;

    const result = await ModuleMotif.deleteMotif(id);

    res.json({
      status: true,
      message: 'Success delete data',
      data: result
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}
