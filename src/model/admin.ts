import mongoose, { Schema } from "mongoose";

export type TAdmin = {
  username: string;
  password: string;
  updatedAt: any;
  createdAt: any;
};

const adminSchema = new Schema<Omit<TAdmin, "_id">>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ModelAdmin = mongoose.model("Admin", adminSchema);

export default ModelAdmin;

// Module Admin

async function getAllAdmin() {
  const result = await ModelAdmin.find({});
  return result;
}

async function getAdminByUsername(username: string) {
  const result = await ModelAdmin.find({
    username: username,
  });

  console.log(result);
  return result;
}
async function getAdminByUsernamePassword(username: string, password: string) {
  const result = await ModelAdmin.find({
    username: username,
    password: password,
  });

  console.log(result);
  return result;
}
async function addAdmin(data: TAdmin) {
  const newAdmin = new ModelAdmin(data);
  await newAdmin.save();
  return newAdmin;
}

export const ModuleAdmin = {
  getAllAdmin,
  getAdminByUsername,
  addAdmin,
  getAdminByUsernamePassword,
};
