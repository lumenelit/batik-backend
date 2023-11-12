import { ModulePesanan } from '../../model/pesanan';

export default async function getByIdPesanan(req, res) {
  try {
    const { id } = req.params;

    const result = await ModulePesanan.getPesananById(id);

    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'Pesanan not found',
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
