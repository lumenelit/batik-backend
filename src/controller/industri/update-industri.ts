import { ModuleIndustri } from '../../model/industri';

export default async function updateIndustri(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;

    const check = await ModuleIndustri.getIndustriById(id);

    if (check.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'Industri not found',
      });
    }

    const result = await ModuleIndustri.updateIndustri(id, data);

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
