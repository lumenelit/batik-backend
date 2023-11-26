import mongoose, { Schema } from 'mongoose';

export type TMotif = {
  _id: string;
  // idMotif: string;
  idIndustri: string;
  nama: string;
  harga: number;
  desc: string;
  varian: any;
  image1: string;
  // image2: string;
  // image3: string;
  updatedAt: any;
  createdAt: any;
};

const MotifSchema = new Schema<Omit<TMotif, '_id'>>(
  {
    // idMotif: {
    //   type: String,
    //   required: true,
    // },
    idIndustri: {
      type: String,
      required: true
    },
    nama: {
      type: String,
      required: true
    },
    harga: {
      type: Number,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    varian: {
      type: [Object],
      required: true
    },
    image1: {
      type: String
      // required: true
    },
    // image2: {
    //   type: String
    // },
    // image3: {
    //   type: String
    // }
  },
  { timestamps: true }
);

const ModelMotif = mongoose.model('Motif', MotifSchema);

export default ModelMotif;

//Module Motif

async function getAllMotif() {
  const result = await ModelMotif.find({}, '-image1 -image2 -image3');
  return result;
}

async function getMotifById(idMotif: string) {
  const result = await ModelMotif.find(
    { _id: idMotif },
    '-image1 -image2 -image3'
  );
  return result;
}
async function getMotifImageById(idMotif: string) {
  const result = await ModelMotif.find(
    { _id: idMotif },
    'image1 image2 image3'
  );
  console.log(result)
  return result;
}

async function getMotifByIndustriId(_id: string) {
  const result = await ModelMotif.find({ idIndustri: _id }, '-image2 -image3');
  return result;
}

async function addMotif(motif: TMotif) {
  const newMotif = new ModelMotif(motif);
  const result = await newMotif.save();
  return result;
}

async function updateMotif(idMotif: string, data: Partial<TMotif>) {
  const result = await ModelMotif.findOneAndUpdate({ _id: idMotif }, data);
  return result;
}

async function deleteMotif(idMotif: string) {
  const result = await ModelMotif.findOneAndDelete({ _id: idMotif });
  return result;
}

export const ModuleMotif = {
  getAllMotif,
  getMotifById,
  getMotifByIndustriId,
  addMotif,
  updateMotif,
  deleteMotif,
  getMotifImageById
};
