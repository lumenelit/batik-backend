import mongoose, { Schema } from 'mongoose';

export type TIndustri = {
  nama: string;
  pemilik: string;
  kontak: string;
  desc: string;
  alamat: string;
  coordinate: any;
  alamatCabang: [string];
  eCommerce: any;
  sosmed: any;
  image1: string;
  image2: string;
  image3: string;
  updatedAt: any;
  createdAt: any;
};

const IndustriSchema = new Schema<Omit<TIndustri, '_id'>>(
  {
    nama: {
      type: String,
      required: true
    },
    pemilik: {
      type: String,
      required: true
    },
    kontak: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    alamat: {
      type: String,
      required: true
    },
    coordinate: {
      type: Object,
      required: true
    },
    alamatCabang: {
      type: [String],
      required: true
    },
    eCommerce: {
      type: Object
    },
    sosmed: {
      type: Object
    },
    image1: {
      type: String
      // required: true,
    },
    image2: {
      type: String
      // required: true,
    },
    image3: {
      type: String
      // required: true,
    }
  },
  { timestamps: true }
);

const ModelIndustri = mongoose.model('Industri', IndustriSchema);

export default ModelIndustri;

// Module Industri

async function getAllIndustri() {
  const result = await ModelIndustri.find({}, '-image1 -image2 -image3');
  return result;
}

async function getIndustriById(id: string) {
  const result = await ModelIndustri.find(
    { _id: id },
    '-image1 -image2 -image3'
  );
  
  console.log(result);
  console.log(id);
  return result;
}
async function getIndustriImageById(id: string) {
  const result = await ModelIndustri.find({ _id: id }, 'image1 image2 image3');
  // console.log(result);
  return result;
}

async function addIndustri(data: TIndustri) {
  const newIndustri = new ModelIndustri(data);
  await newIndustri.save();
  return newIndustri;
}

async function updateIndustri(_id: string, data: Partial<TIndustri>) {
  const result = await ModelIndustri.findOneAndUpdate({ _id: _id }, data);
  return result;
}

async function deleteIndustri(_id: string) {
  const result = await ModelIndustri.findOneAndDelete({
    _id: _id
  });
  return result;
}

export const ModuleIndustri = {
  getAllIndustri,
  getIndustriById,
  addIndustri,
  updateIndustri,
  deleteIndustri,
  getIndustriImageById
};
