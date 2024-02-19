import mongoose, { Schema } from "mongoose";

export type TPesanan = {
  _id: string;
  isDone: boolean;
  namaPembeli: string;
  idMotif: string;
  namaPenerima: string;
  kontakPembeli: string;
  kontakPenerima: string;
  alamat: string;
  namaMotif: string;
  metodePengiriman: string;
  reqTambahan: string;
  jumlah: number;
  hargaMotif: number;
  totalHarga: number;
  updatedAt: any;
  createdAt: any;
};

const PesananSchema = new Schema<Omit<TPesanan, "_id">>(
  {
    idMotif: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
      required: true,
    },
    namaPembeli: {
      type: String,
      required: true,
    },
    namaPenerima: {
      type: String,
      required: true,
    },
    kontakPembeli: {
      type: String,
      required: true,
    },
    kontakPenerima: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    namaMotif: {
      type: String,
      required: true,
    },
    metodePengiriman: {
      type: String,
      required: true,
    },
    reqTambahan: {
      type: String,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    hargaMotif: {
      type: Number,
      required: true,
    },
    totalHarga: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ModelPesanan = mongoose.model("Pesanan", PesananSchema);

export default ModelPesanan;

//ModulePesanan

async function getAllPesanan() {
  const result = await ModelPesanan.find();
  return result;
}

async function getPesananById(id: string) {
  const result = await ModelPesanan.find({ _id: id });
  return result;
}

async function addPesanan(data: TPesanan) {
  const newPesanan = new ModelPesanan(data);
  const result = await newPesanan.save();
  return result;
}

async function updatePesanan(idPesanan: string, data: Partial<TPesanan>) {
  const result = await ModelPesanan.findOneAndUpdate({ _id: idPesanan }, data);
  return result;
}

async function deletePesanan(idPesanan: string) {
  const result = await ModelPesanan.deleteOne({ _id: idPesanan });
  return result;
}

export const ModulePesanan = {
  getAllPesanan,
  getPesananById,
  addPesanan,
  updatePesanan,
  deletePesanan,
};
