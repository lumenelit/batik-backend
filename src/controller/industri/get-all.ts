import { ModuleIndustri } from "../../model/industri";
import { ModuleMotif } from "../../model/motif";

export default async function getAll(req, res) {
  try {
    let result = [];
    const industri = await ModuleIndustri.getAllIndustri();
    const motif = await ModuleMotif.getAllMotif();

    industri.forEach((element) => {
      const motifIndustri = motif.filter((motif) => {
        return motif.idIndustri == element.idIndustri;
      });
      result.push({
        idIndustri: element.idIndustri,
        namaIndustri: element.nama,
        pemilik: element.pemilik,
        kontak: element.kontak,
        desc: element.desc,
        alamat: element.alamat,
        coordinate: element.coordinate,
        alamatCabang: element.alamatCabang,
        eCommerce: element.eCommerce,
        sosmed: element.sosmed,
        image1: element.image1,
        image2: element.image2,
        image3: element.image3,
        motif: motifIndustri,
      });
    });

    res.json({
      status: true,
      message: "Success get all data",
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
