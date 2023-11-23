import { ModulePesanan } from '../../model/pesanan';

export default async function addPesanan(req, res) {
  try {
    const data = req.body;

    // const check = await ModulePesanan.getPesananById(data.idPesanan);

    // if (check.length > 0) {
    //   return res.status(400).json({
    //     status: false,
    //     message: 'Pesanan already exist',
    //   });
    // }

    const result = await ModulePesanan.addPesanan(data);

    res.json({
      status: true,
      message: 'Success add data',
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
