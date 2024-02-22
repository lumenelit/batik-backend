import { ModuleAdmin } from "../../model/admin";
import { ModuleMotif } from "../../model/motif";

export default async function getAll(req, res) {
  try {
    let result = [];
    const admin = await ModuleAdmin.getAllAdmin();

    res.json({
      status: true,
      message: "Success get all data",
      // data: result,
      data: admin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
}
