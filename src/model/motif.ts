import mongoose, { Schema } from 'mongoose';

export type TMotif = {
  _id: string;
  idMotif: string;
  idIndustri: string;
  nama: string;
  harga: number;
  desc: string;
  varian: any;
  image1: string;
  image2: string;
  image3: string;
  updatedAt: any;
  createdAt: any;
};

const MotifSchema = new Schema<Omit<TMotif, '_id'>>(
  {
    idMotif: {
      type: String,
      required: true,
    },
    idIndustri: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    varian: {
      type: [Object],
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ModelMotif = mongoose.model('Motif', MotifSchema);

export default ModelMotif;

//Module Motif

async function getAllMotif() {
  const result = await ModelMotif.find();
  return result;
}

async function getMotifById(idMotif: string) {
  const result = await ModelMotif.find({ idMotif: idMotif });
  return result;
}

async function addMotif(motif: TMotif) {
  const newMotif = new ModelMotif(motif);
  const result = await newMotif.save();
  return result;
}

async function updateMotif(idMotif: string, data: Partial<TMotif>) {
  const result = await ModelMotif.findOneAndUpdate({ idMotif: idMotif }, data);
  return result;
}

export const ModuleMotif = {
  getAllMotif,
  getMotifById,
  addMotif,
  updateMotif,
};
