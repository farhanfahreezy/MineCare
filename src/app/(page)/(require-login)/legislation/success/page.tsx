import Link from "next/link";

import { GrHomeRounded } from "react-icons/gr";
import { GoMail } from "react-icons/go";

export default function Home() {
  return (
    <div className="w-full h-full relative space-y-6">
      <h1 className="w-full bg-[#6C4313] py-2 px-4 font-semibold text-center text-[24px]">
        DOCUMENT SUBMISSION SUCCESS & PLEASE WAIT FOR THE CONFIRMATION
      </h1>
      <p className="w-full text-center bg-[#8F5718] bg-opacity-75 py-4 px-6 text-[20px]">
        Pastikan email Anda sesuai dan sedang aktif. Pengumpulan pengajuan
        berkas Anda akan diperiksa oleh tim bersangkutan maksimum selama 25 hari
        kerja. Jika <b>ada kekurangan</b> berkas Anda akan dikembalikan untuk
        dilengkapi/diperbaiki/diganti. Jika <b>sudah sesuai</b>, akan dikirimkan
        dokumen <b>Izin Usaha Pertambangan/Izin Pertambangan Rakyat</b> disertai
        dengan Wilayah Pertambangan yang boleh dilakukan aktivitas penambangan.
      </p>
      <div className="flex flex-row justify-end">
        <div className="flex flex-col gap-2 items-end">
          <Link
            href={"/home"}
            className="bg-[#6C4313] py-2 px-4 flex flex-row justify-center items-center gap-2 hover:brightness-90 hover:scale-105 active:scale-95 transition-all"
          >
            HOME <GrHomeRounded size={18} />
          </Link>
          <Link
            href={"https://mail.google.com/"}
            target={"_blank"}
            className="bg-[#6C4313] py-2 px-4 flex flex-row justify-center items-center gap-2 hover:brightness-90 hover:scale-105 active:scale-95 transition-all"
          >
            CEK EMAIL SAYA <GoMail size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
