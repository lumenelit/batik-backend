import mongoose, { Schema } from 'mongoose';

export type TIndustri = {
  _id: string;
  idIndustri: string;
  nama: string;
  pemilik: string;
  kontak: string;
  desc: string;
  alamat: string;
  coordinate: any;
  alamatCabang: [string];
  eCommerce: any;
  sosmed: any;
  updatedAt: any;
  createdAt: any;
};

const IndustriSchema = new Schema<Omit<TIndustri, '_id'>>(
  {
    idIndustri: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    pemilik: {
      type: String,
      required: true,
    },
    kontak: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    coordinate: {
      type: Object,
      required: true,
    },
    alamatCabang: {
      type: [String],
      required: true,
    },
    eCommerce: {
      type: Object,
      required: true,
    },
    sosmed: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const ModelIndustri = mongoose.model('Industri', IndustriSchema);

export default ModelIndustri;

// Module Industri

async function getAllIndustri() {
  const result = await ModelIndustri.find();
  return result;
}

async function getIndustriById(id: string) {
  const result = await ModelIndustri.find({ idIndustri: id });
  return result;
}

async function addIndustri(data: TIndustri) {
  const newIndustri = new ModelIndustri(data);
  await newIndustri.save();
  return newIndustri;
}

export const ModuleIndustri = {
  getAllIndustri,
  getIndustriById,
  addIndustri,
};
