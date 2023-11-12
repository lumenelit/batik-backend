import { ModuleIndustri } from '../../model/industri';

export default async function getAll(req, res) {
  try {
    const result = await ModuleIndustri.getAllIndustri();

    res.json({
      status: true,
      message: 'Success get all data',
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
