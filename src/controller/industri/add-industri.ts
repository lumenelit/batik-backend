import { ModuleIndustri } from '../../model/industri';

export default async function addIndustri(req, res) {
  try {
    const data = req.body;

    const check = await ModuleIndustri.getIndustriById(data.idIndustri);

    console.log(check);

    if (check.length > 0) {
      return res.status(400).json({
        status: false,
        message: 'Id Industri already exist',
      });
    }

    const result = await ModuleIndustri.addIndustri(data);

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
