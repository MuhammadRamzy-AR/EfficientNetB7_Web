// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Tentang.module.css";
import Image from "next/image";

const Tentang = () => {
  return (
    <div className={style.container} id="tentang">
      <div className={style.judul}>Tentang Penelitian</div>
      <div className={style.subjudul}>
      Penelitian ini menggunakan dataset mata manusia yang terbagi ke dalam 2 kategori yaitu mata katarak dan mata normal. Dataset yang digunakan bersumber dari situs website kaggle dan menggunakan Algoritma EfficientNetB7.
      </div>
      <div className={style.wrapper_penjelasan}>
        <div className={style.penjelasan}>
          <div className={style.gambar}>
            <Image src="/assets/icons/3.png" alt="icon" layout="fill" />
          </div>
          <div className={style.textpenjelasan}>Sumber Dataset</div>
          <div className={style.text}>
          Dataset ini bersumber dari situs website kaggle yang dapat dikunjungi melalui URL <u><a href="https://www.kaggle.com/datasets/gunavenkatdoddi/eye-diseases-classification" target="_blank">ini</a></u>.
          </div>
        </div>
        <div className={style.penjelasan}>
          <div className={style.gambar}>
            <Image src="/assets/icons/1.png" alt="icon" layout="fill" />
          </div>
          <div className={style.textpenjelasan}>Tingkat Akurasi </div>
          <div className={style.text}>
          Algoritma EfficientNetB7 menghasilkan performa prediksi dengan nilai akurasi sebesar 0.97 dan nilai loss sebesar 2.05.
          </div>
        </div>
        <div className={style.penjelasan}>
          <div className={style.gambar}>
            <Image src="/assets/icons/2.png" alt="icon" layout="fill" />
          </div>
          <div className={style.textpenjelasan}>Arsitektur</div>
          <div className={style.text}>
          Identifikasi gambar mata manusia antara katarak dan normal menggunakan salah satu algoritma deep learning yaitu EfficientNetB7.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
