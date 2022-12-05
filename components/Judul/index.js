// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Judul.module.css";
import Button from "../Button";

const Judul = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper_judul}>
        <div className={style.judul}>
          Implementasi Arsitektur EfficientNet-B7 Untuk Deteksi Penyakit Katarak
        </div>

        <Button variant="primary">
          <a href="#identifikasi">Mulai Identifikasi</a>
        </Button>
      </div>
      <div className={style.wrapper_penjelasan}>
        <div className={style.Penjelasan}>Penjelasan</div>
        <div className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id
          eget in in scelerisque at etiam. Ullamcorper neque proin placerat
          elementum aenean purus euismod cursus ornare.
        </div>
      </div>
    </div>
  );
};

export default Judul;
