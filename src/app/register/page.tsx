import React from 'react';
import { Roboto } from 'next/font/google';
const robo = Roboto({ subsets: ['latin'], weight: ['700'] });

const RegisterPage = () => {
  return <div className={robo.className}>RegisterPage</div>;
};

export default RegisterPage;
