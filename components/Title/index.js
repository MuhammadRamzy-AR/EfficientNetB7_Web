// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import Head from "next/head";

const Title = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Title;
