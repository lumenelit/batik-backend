import { ModuleIndustri } from '../../model/industri';

export default async function getIndustriById(req, res) {
  try {
    const { id } = req.params;
    const result = await ModuleIndustri.getIndustriById(id);

    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'Industri not found',
      });
    }

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
