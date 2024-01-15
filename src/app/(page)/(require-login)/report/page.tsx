"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [data, setdata] = useState({
    kategori_laporan: "",
    judul_laporan: "",
    deskripsi_laporan: "",
    tanggal_kejadian: new Date(),
    lokasi_kejadian: "",
    kerahasiaan_laporan: "",
  });

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Request sent!");
    console.log("data", data);
    // router.push("/report/success");
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full relative">
      <h1 className="w-full text-center text-[18px] font-semibold shadow-md bg-[#6C4313] py-2 px-4">
        Sampaikan Laporan Anda
      </h1>
      <form className="flex flex-col w-full gap-2 py-2" onSubmit={submitForm}>
        <div className="flex flex-row w-full bg-[#6C4313] bg-opacity-30 justify-center items-center">
          <div className="h-full w-full max-w-[300px] bg-[#6C4313] bg-opacity-50 py-6 px-6">
            Klasfisikasi Laporan
          </div>

          <div className="h-full w-full  py-2 px-6">
            <div className="flex flex-row justify-between py-2 px-4">
              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value={"Pengaduan"}
                  name={"kategori_laporan"}
                  className="w-4 h-4"
                  onChange={handleInputChange}
                  required
                />
                <label className="ms-2 font-medium text-gray-900">
                  Pengaduan
                </label>
              </div>

              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value={"Aspirasi"}
                  name={"kategori_laporan"}
                  className="w-4 h-4"
                  onChange={handleInputChange}
                  required
                />
                <label className="ms-2 font-medium text-gray-900">
                  Aspirasi
                </label>
              </div>

              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value={"Permintaan Informasi"}
                  name={"kategori_laporan"}
                  className="w-4 h-4"
                  onChange={handleInputChange}
                  required
                />
                <label className="ms-2 font-medium text-gray-900">
                  Permintaan Informasi
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <label
            className="block mb-1 mt-2 font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Judul Laporan
          </label>
          <input
            className="block w-full text-gray-900 border-0 cursor-pointer py-2 px-3 bg-[#D3B28D] hover:brightness-95 transition-all outline-none placeholder:text-gray-800 placeholder:opacity-50"
            type="text"
            name="judul_laporan"
            onChange={handleInputChange}
            placeholder="Tulis disini..."
          />
        </div>

        <div className="w-full">
          <label
            className="block mb-1 mt-1 font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Deskripsi Laporan
          </label>
          <textarea
            className="block w-full text-gray-900 border-0 cursor-pointer py-2 px-3 bg-[#D3B28D] hover:brightness-95 transition-all outline-none placeholder:text-gray-800 placeholder:opacity-50"
            name="deskripsi_laporan"
            onChange={handleInputChange}
            placeholder="Tulis disini..."
          />
        </div>

        <div className="flex flex-row w-full bg-[#6C4313] bg-opacity-30 justify-center items-center">
          <div className="h-full w-full max-w-[300px] bg-[#6C4313] bg-opacity-50 py-2 px-6">
            Tanggal Kejadian
          </div>

          <div className="h-full w-full  py-2 px-6">
            <input
              type="date"
              name="tanggal_kejadian"
              onChange={handleInputChange}
              className="w-full border-0 bg-transparent text-black outline-none"
            />
          </div>
        </div>

        <div className="flex flex-row w-full bg-[#6C4313] bg-opacity-30 justify-center items-center">
          <div className="h-full w-full max-w-[300px] bg-[#6C4313] bg-opacity-50 py-2 px-6">
            Lokasi Kejadian
          </div>

          <div className="h-full w-full  py-2 px-6">
            <input
              type="text"
              name="lokasi_kejadian"
              onChange={handleInputChange}
              className="w-full border-0 bg-transparent text-black outline-none placeholder:text-gray-800 placeholder:opacity-50"
              placeholder="Tulis disini..."
            />
          </div>
        </div>

        <div className="w-full">
          <label
            className="block mb-1 mt-2 font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Upload Lampiran
          </label>
          <input
            className="block w-full text-gray-900 border-0 cursor-pointer py-2 px-3 bg-[#D3B28D] hover:brightness-95 transition-all"
            id="user_avatar"
            type="file"
            required
            multiple
          />
        </div>

        <div className="flex flex-row w-full bg-[#6C4313] bg-opacity-30 justify-center items-center">
          <div className="h-full w-full max-w-[300px] bg-[#6C4313] bg-opacity-50 py-6 px-6">
            Kerahasiaan Laporan
          </div>

          <div className="h-full w-full  py-2 px-6">
            <div className="flex flex-row justify-around py-2 px-4">
              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value={"Anonim"}
                  name={"kerahasiaan_laporan"}
                  className="w-4 h-4"
                  onChange={handleInputChange}
                  required
                />
                <label className="ms-2 font-medium text-gray-900">Anonim</label>
              </div>

              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value={"Rahasia"}
                  name={"kerahasiaan_laporan"}
                  className="w-4 h-4"
                  onChange={handleInputChange}
                  required
                />
                <label className="ms-2 font-medium text-gray-900">
                  Rahasia
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 w-full pb-10">
          <button className="w-full bg-[#6C4313] py-2 px-4 hover:brightness-90 hover:scale-105 active:scale-95 transition-all">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
