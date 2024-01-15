"use client";

import CardArticle from "@/app/components/CardArticle";
import CardNews from "@/app/components/CardNews";
import NewsTab from "@/app/components/NewsTab";
import { useEffect, useState } from "react";

const dummy_news = [
  {
    title:
      "KEGIATAN PEMBUKAAN PERINGATAN BULAN K3 NASIONAL PERTAMBANGAN MINERAL DAN BATUBARA TAHUN 2024",
    url: "https://www.minerba.esdm.go.id/berita/minerba/detil/20240112-kegiatan-pembukaan-peringatan-bulan-k3-nasional-pertambangan-mineral-dan-batubara-tahun-2024",
    date: "12 Januari 2024",
  },
  {
    title:
      "PLT DIRJEN MINERBA RESMIKAN PRODUKSI PERTAMA TAMBANG BATUBARA BAWAH TANAH PT. SDE",
    url: "https://www.minerba.esdm.go.id/berita/minerba/detil/20231219-plt-dirjen-minerba-resmikan-produksi-pertama-tambang-batubara-bawah-tanah-pt-sde",
    date: "19 Desember 2023",
  },
  {
    title:
      "PENANGGULANGAN PERTAMBANGAN TANPA IZIN MELALUI FORMALISASI MENJADI IPR",
    url: "https://www.minerba.esdm.go.id/berita/minerba/detil/20231205-penanggulangan-pertambangan-tanpa-izin-melalui-formalisasi-menjadi-ipr",
    date: "05 Desember 2023",
  },
  {
    title:
      "BIMTEK KALIMANTAN UTARA: JUNJUNG TINGGI ASPEK KESELAMATAN DAN KESEHATAN KERJA DALAM KEGIATAN USAHA PERTAMBANGAN",
    url: "https://www.minerba.esdm.go.id/berita/minerba/detil/20231211-bimtek-kalimantan-utara-junjung-tinggi-aspek-keselamatan-dan-kesehatan-kerja-dalam-kegiatan-usaha-pertambangan",
    date: "11 Desember 2023",
  },
  {
    title:
      "TIM INDONESIA GARUDA MINE RESCUE BERJAYA PADA AJANG THE 13TH MERC DI AUSTRALIA",
    url: "https://www.minerba.esdm.go.id/berita/minerba/detil/20231129-tim-indonesia-garuda-mine-rescue-berjaya-pada-ajang-the-13th-merc-di-australia",
    date: "29 November 2023",
  },
  {
    title: "JELANG KAMPANYE PILPRES, ASN DITJEN MINERBA HARUS NETRAL",
    url: "https://www.minerba.esdm.go.id/berita/minerba/detil/20231122-jelang-kampanye-pilpres-asn-ditjen-minerba-harus-netral",
    date: "22 November 2023",
  },
];
const data_vid = [
  {
    title: `“I Do Think LITHIUM Will Do Well in 2024” says Fund Manager Will Thomson`,
    url: `qHLUczghqfI`,
    type: `video`,
  },
  {
    title: `Merkuri di Tengah Kemilau Emas`,
    url: `OMXZhywMNyQ`,
    type: `video`,
  },
  {
    title: `Toxic mercury poisons miners by the millions`,
    url: `y8kEM-RKaek`,
    type: `video`,
  },
  {
    title: `What is Mercury Poisoning? | National Geographic`,
    url: `KqNwAOTquwY`,
    type: `video`,
  },
  {
    title: `The Real Price Of Indonesia’s Mercury-Poisoned Gold | Undercover Asia | Full Episode`,
    url: `RPVX7S-wV24`,
    type: `video`,
  },
  {
    title: `Begini Proses Freeport Menambang Emas di Papua`,
    url: `LC4hjvDYFDg`,
    type: `video`,
  },
  {
    title: `Cara Menambang Emas di Sungai Untuk Pemula`,
    url: `-LJVmqRqYd0`,
    type: `video`,
  },
  {
    title: `ANIMASI TAMBANG BATU BARA`,
    url: `WNR9vH8m430`,
    type: `video`,
  },
  {
    title: `Pengenalan Dasar K3 Pertambangan`,
    url: `F81606IHpuY`,
    type: `video`,
  },
  {
    title: `Safety Talk di Tambang Bauksit`,
    url: `ovjqIMenpxU`,
    type: `video`,
  },
];
const data_article = dummy_news.map(({ title, url }) => ({
  title,
  url,
  type: "article",
}));

type CardArticleProps = {
  title: string;
  url?: string;
  img_url?: string;
  date?: string;
  type: string;
};

export default function Home() {
  const [openedTab, setopenedTab] = useState(0);
  const [data, setdata] = useState<any>([]);

  const handleChangeTab = (n: number) => {
    setopenedTab(n);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://cse.google.com/cse.js?cx=b77b626a4fdf84738`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (openedTab === 0) {
      setdata([...data_vid, ...data_article]);
    } else if (openedTab === 1) {
      setdata([...data_article]);
    } else if (openedTab === 2) {
      setdata([...data_article]);
    } else if (openedTab === 3) {
      setdata([...data_vid]);
    }
  }, [openedTab]);
  return (
    <div className="w-full h-full relative flex flex-col justify-center items-center gap-2">
      <div className="w-full min-h-[500px] flex gap-2">
        {/* NEWS DAN ARTIKEl */}

        {/* NEWS */}
        <div className="w-[40%] h-full space-y-2">
          <h1 className="bg-[#8B4B06] bg-opacity-85 py-4 px-6 text-[18px] w-fit shadow-md">
            NEWEST INFORMATION
          </h1>
          <div className="flex flex-col justify-start items-start w-full h-[calc(100%-59px-0.5rem)] gap-1 overflow-y-auto">
            {dummy_news.map((news, index) => (
              <CardNews {...news} key={news.url + index} />
            ))}
            {dummy_news.map((news, index) => (
              <CardNews {...news} key={news.url + (index + 1)} />
            ))}
          </div>
        </div>

        {/* ARTIKEl */}
        <div className="w-[60%] h-full flex-col space-y-2 pt-5">
          <NewsTab openedTab={openedTab} handleOpenTab={handleChangeTab} />
          <div className="flex flex-col justify-start items-center w-full gap-2 h-[calc(100%-1.75rem-40px)] overflow-y-auto">
            {data.map((dat: any) => (
              <CardArticle
                key={dat.url}
                title={dat.title}
                type={dat.type}
                url={dat.url}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SEARCH MORE */}
      <div className="w-full min-h-[200px] text-black space-y-2">
        <div className="gcse-search"></div>
        <div className="flex justify-start gap-2">
          <div className="text-white bg-[#522A00] bg-opacity-70 py-4 px-6 text-center shadow-md">
            Popular
            <br />
            Topic
          </div>
        </div>
      </div>
    </div>
  );
}
