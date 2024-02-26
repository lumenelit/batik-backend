import { ModuleMotif } from "../../model/motif";

export default async function getMotifByIndustriId(req, res) {
  try {
    const { id } = req.params;
    const { page } = req.query;
    const pageSize = 10; // Define your page size

    let skip = 0;
    if (page && !isNaN(parseInt(page))) {
      skip = (parseInt(page) - 1) * pageSize;
    }

    const result = await ModuleMotif.getMotifByIndustriId(id, skip, pageSize);

    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Motif not found",
      });
    }

    res.json({
      status: true,
      message: "Success get data",
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
