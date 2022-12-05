// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.gambar}>
        {" "}
        <Image src="/assets/images/lab.png" alt="icon" layout="fill" />
      </div>
      <div className={style.subjudul}>
        Website ini dirancang sebagai penelitian tugas akhir untuk memenuhi
        syarat kelulusan dari Program Studi Informatika Itenas 2022.
      </div>

      <div className={style.wrapper_kontak}>
        <div className={style.kontak}>
          <div className={style.icon}>
            {" "}
            <Image src="/assets/icons/4.png" alt="icon" layout="fill" />
          </div>
          <div className={style.text}>muhammaddwiki01@gmail.com</div>
        </div>

        <div className={style.kontak}>
          <div className={style.icon}>
            {" "}
            <Image src="/assets/icons/5.png" alt="icon" layout="fill" />
          </div>
          <div className={style.text}>Muhammad Dwiki Reza (15-2018-122)</div>
        </div>

        <div className={style.kontak}>
          <div className={style.icon}>
            {" "}
            <Image src="/assets/icons/6.png" alt="icon" layout="fill" />
          </div>
          <div className={style.text}>0896-0510-6687</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
