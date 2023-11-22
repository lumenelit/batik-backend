import { ModuleIndustri } from '../../model/industri';

export default async function deleteIndustri(req, res) {
  try {
    const { id } = req.params;

    const result = await ModuleIndustri.deleteIndustri(id);

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
