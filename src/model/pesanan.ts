import mongoose, { Schema } from 'mongoose';

export type TPesanan = {
  _id: string;
  idPesanan: string;
  namaPembeli: string;
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

const PesananSchema = new Schema<Omit<TPesanan, '_id'>>(
  {
    idPesanan: {
      type: String,
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

const ModelPesanan = mongoose.model('Pesanan', PesananSchema);

export default ModelPesanan;

//ModulePesanan

async function getAllPesanan() {
  const result = await ModelPesanan.find();
  return result;
}

async function getPesananById(id: string) {
  const result = await ModelPesanan.find({ idPesanan: id });
  return result;
}

async function addPesanan(data: TPesanan) {
  const newPesanan = new ModelPesanan(data);
  const result = await newPesanan.save();
  return result;
}

export const ModulePesanan = {
  getAllPesanan,
  getPesananById,
  addPesanan,
};
