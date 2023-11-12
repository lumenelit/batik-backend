import { ModulePesanan } from '../../model/pesanan';

export default async function getAllPesanan(req, res) {
  try {
    const result = await ModulePesanan.getAllPesanan();

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
