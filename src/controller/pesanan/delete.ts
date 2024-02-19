import { ModulePesanan } from "../../model/pesanan";

export default async function deletePesanan(req, res) {
  try {
    const { id } = req.params;

    const result = await ModulePesanan.deletePesanan(id);

    res.json({
      status: true,
      message: "Success delete data",
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
