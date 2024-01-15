"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [data, setdata] = useState({
    jenis_tambang: "",
    jenis_izin: "",
    wilayah_kementrian: "",
    nama_pemohon: "",
    npwp_pemohon: "",
  });

  const daftar_pertanyaan = [
    {
      pertanyaan: "Jenis tambang yang di ajukan ?",
      name: "jenis_tambang",
      opsi: ["Tambang pasir dan kerikil", "Mineral", "Batubara"],
    },
    {
      pertanyaan: "Jenis izin yang diajukan ?",
      name: "jenis_izin",
      opsi: ["Izin Pertambangan Rakyat/IPR", "Izin Usaha Pertambangan/IUP"],
    },
    {
      pertanyaan:
        "Apakah wilayahmu termasuk ke dalam Wilayah Pertambangan yang ditetapkan kementerian ? ",
      name: "wilayah_kementrian",
      opsi: ["Ya", "Tidak"],
      info_tambahan: "https://flowbite.com/docs/components/forms/",
    },
  ];

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Request sent!");
    router.push("/legislation/success");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full relative">
      <form className="flex flex-col w-full gap-2" onSubmit={submitForm}>
        {daftar_pertanyaan.map((q, index) => (
          <RadioOption
            {...q}
            nomor={index}
            key={index}
            handleInput={handleInputChange}
          />
        ))}
        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama_pemohon"
            onChange={handleInputChange}
            className="w-full bg-[#D3B28D] border-gray-300 text-gray-900 placeholder:text-[14px] placeholder:text-gray-700 py-1 px-3"
            placeholder="Tulis disini"
            required
          />
        </div>

        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            NPWP
          </label>
          <input
            type="text"
            name="npwp_pemohon"
            onChange={handleInputChange}
            className="w-full bg-[#D3B28D] border-gray-300 text-gray-900 placeholder:text-[14px] placeholder:text-gray-700 py-1 px-3"
            placeholder="Tulis disini"
            required
          />
        </div>

        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Scan KTP
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-0 cursor-pointer bg-[#D3B28D] "
            id="user_avatar"
            type="file"
            required
          />
        </div>

        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Surat Permohonan Bermaterai 6000
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-0 cursor-pointer bg-[#D3B28D] "
            id="user_avatar"
            type="file"
            required
          />
        </div>

        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Scan Surat Rekomendasi dari Kepada Desa/Lurah
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-0 cursor-pointer bg-[#D3B28D] "
            id="user_avatar"
            type="file"
            required
          />
        </div>

        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Dokumen SPPL
          </label>
          <input
            className="block w-full text-sm text-gray-900 border-0 cursor-pointer bg-[#D3B28D] "
            id="user_avatar"
            type="file"
            required
          />
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

type RadioOptionProps = {
  pertanyaan: string;
  nomor: number;
  name: string;
  opsi: string[];
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  info_tambahan?: string;
};

const RadioOption = ({
  pertanyaan,
  nomor,
  name,
  opsi,
  handleInput,
  info_tambahan,
}: RadioOptionProps) => {
  return (
    <>
      <div className="w-full bg-[#F7E4CF] bg-opacity-45">
        <div className="bg-[#8F5718] w-full py-2 px-6">
          <label>
            {nomor + 1}
            {". "}
            {pertanyaan}
          </label>
          {info_tambahan && (
            <div className="flex flex-row justify-end">
              <Link
                target={"_blank"}
                href={info_tambahan}
                className="font-light italic hover:underline text-[14px]"
              >
                pelajari lebih lanjut
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between py-2 px-4">
          {opsi.map((opt, index) => (
            <div className="flex items-center me-4" key={name + opt + index}>
              <input
                id={name + "-" + index}
                type="radio"
                value={opt}
                name={name}
                className="w-4 h-4"
                onChange={handleInput}
                required
              />
              <label
                htmlFor={name + "-" + index}
                className="ms-2 text-sm font-medium text-gray-900"
              >
                {opt}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
