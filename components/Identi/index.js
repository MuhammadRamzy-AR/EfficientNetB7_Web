// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React, {useState, useEffect} from "react";
import style from "./Identi.module.css";
import Button from "../Button";
import Image from "next/image";

const Identi = () => {

  let [prediction, setPrediction] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    const Upload = async() => {
      await fetch('http://localhost:5000/prediction', {
        method: 'POST',
        body: formData
      }).then(resp => {
        resp.json().then(data => {
          setPrediction(data)
          console.log(data)
        })
      })
    }
    Upload();
  }

  return (
    <div className={style.container} id="identifikasi">
    <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" method='POST' encType="multipart/form-data">
      <div className={style.judul}>Identifikasi Katarak</div>
      <div className={style.subjudul}>
        Masukkan gambar mata manusia untuk mengidentifikasi apakah mata tersebut katarak atau normal.
      </div>
      <div className={style.wrapper_input}>
        <div className={style.input}>
          <input
            type="file"
            id="image" name="file" 
            accept="image/*"
            className="  text-sm text-hitam font-semibold border border-black w-full       
  file:mr-4
  file:h-[48px] 
   file:px-10
  file:text-sm
   file:font-medium
   file:bg-black
  file:bg-hitam
   file:text-white
   file:opacity-95
   hover:file:opacity-100
  file:cursor-pointer
        "
          />
        </div>
        <div className={style.button}>
          <Button variant="primary" type="submit">
            Identifikasi
          </Button>
        </div>
      </div>
    </form>
      <button className={style.button_up}>
        <a href="#">
          <Image
            src="/assets/icons/7.png"
            alt="icon"
            width="14px"
            height="16px"
          />
        </a>
      </button>

      {/* Menampilkan output prediction/classification */}
        <div className="border border-black flex gap-[50px] flex-row w-[650px] h-20 justify-center items-center mt-4">
            <div className=" flex-col w-[150px] text-sm gap-1 items-center justify-center flex">
              <div className="w-[20px] h-[24px]  ">
                <Image
                  src="/assets/icons/8.png"
                  alt="icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <span className="text-sm text-hitam font-medium">
                Hasil Identifikasi
              </span>
            </div>
            <span className="text-sm text-hitam font-medium text-justify w-[400px]">
                  {prediction && <h1 className="mx-auto font-semibold text-[#262626] text-1xl">{prediction.result}</h1>}
            </span>
        </div>
    </div>
  );
};

export default Identi;
