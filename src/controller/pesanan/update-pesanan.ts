import { ModulePesanan } from "../../model/pesanan";

export default async function updatePesanan(req, res) {
  try {
    const idPesanan = req.params.id;
    const data = req.body;

    const check = await ModulePesanan.getPesananById(idPesanan);

    if (check.length === 0) {
      return res.status(400).json({
        status: false,
        message: "Pesanan not found",
      });
    }
    console.log(data);

    const result = await ModulePesanan.updatePesanan(idPesanan, data);
    console.log(result);

    res.json({
      status: true,
      message: "Success update data",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
}
