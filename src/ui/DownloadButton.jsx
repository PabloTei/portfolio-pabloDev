import React from "react";
import { MdDownloading } from "react-icons/md";

const DownloadButton = () => {
  return (
    <div className="text-gray-100">
      <a
        className="relative flex justify-center items-center gap-4 px-8 py-2 min-w-[200px] min-h-[50px] text-sm tracking-wider uppercase transition-all duration-500 bg-transparent cursor-pointer hover:bg-neutral-50 hover:text-black"
        href="/documents/CV_Pablo_Teijeiro.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Descargar CV <MdDownloading className="text-xl" />
        <span className="absolute inset-0 border-t border-b border-white transition-transform duration-500 hover:scale-x-0"></span>
      </a>
    </div>
  );
};

export default DownloadButton;
