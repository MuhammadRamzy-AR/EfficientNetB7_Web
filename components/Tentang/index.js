// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Tentang.module.css";
import Image from "next/image";

const Tentang = () => {
  return (
    <div className={style.container} id="tentang">
      <div className={style.judul}>Tentang Penelitian</div>
      <div className={style.subjudul}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id
        eget in in scelerisque at etiam. Ullamcorper neque proin placerat
        elementum aenean purus euismod cursus ornare.
      </div>
      <div className={style.wrapper_penjelasan}>
        <div className={style.penjelasan}>
          <div className={style.gambar}>
            <Image src="/assets/icons/3.png" alt="icon" layout="fill" />
          </div>
          <div className={style.textpenjelasan}>Sumber Dataset</div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium
            id eget in in scelerisque at etiam. Ullamcorper neque proin placerat
            elementum aenean purus euismod cursus ornare.
          </div>
        </div>
        <div className={style.penjelasan}>
          <div className={style.gambar}>
            <Image src="/assets/icons/1.png" alt="icon" layout="fill" />
          </div>
          <div className={style.textpenjelasan}>Tingkat Akurasi </div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium
            id eget in in scelerisque at etiam. Ullamcorper neque proin placerat
            elementum aenean purus euismod cursus ornare.
          </div>
        </div>
        <div className={style.penjelasan}>
          <div className={style.gambar}>
            <Image src="/assets/icons/2.png" alt="icon" layout="fill" />
          </div>
          <div className={style.textpenjelasan}>Arsitektur</div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium
            id eget in in scelerisque at etiam. Ullamcorper neque proin placerat
            elementum aenean purus euismod cursus ornare.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
