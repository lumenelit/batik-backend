import { ModuleAdmin } from "../../model/admin";

export default async function getAdminById(req, res) {
  try {
    const { username, password } = req.body;
    // console.log(username, password);

    const admin = await ModuleAdmin.getAdminByUsernamePassword(
      username,
      password
    );

    if (admin.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Admin not found",
      });
    }

    res.json({
      status: true,
      message: "Success get data",
      data: admin,
      // data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
}
