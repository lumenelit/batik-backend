import { ModuleAdmin } from "../../model/admin";

export default async function addAdmin(req, res) {
  try {
    const data = req.body;

    const check = await ModuleAdmin.getAdminByUsername(data.username);

    console.log(check);

    if (check.length > 0) {
      return res.status(400).json({
        status: false,
        message: "Id Admin already exist",
      });
    }

    const result = await ModuleAdmin.addAdmin(data);

    res.json({
      status: true,
      message: "Success add data",
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
