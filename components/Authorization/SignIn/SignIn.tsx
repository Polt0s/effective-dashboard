import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import { Button, Typography } from 'shared';

const iconLogin = require('assets/svg/iconLogin.svg');
const iconGoogle = require('assets/svg/iconGoogle.svg');
const iconFacebook = require('assets/svg/iconFacebook.svg');
const imageSignIn = require('assets/image/imageSignIn.jpg');

export const SignIn = () => {
  return (
    <div className="flex">
        <aside className="bg-[#efefef] min-w-[448px] min-h-screen h-full px-[50px] flex flex-col">
            <div className="pt-[100px] pb-[40px] px-[128px] flex flex-col">
                <Image src={iconLogin} width="92" height="92" alt="login logo" />
                <Typography size="25px" align="center" className="mt-10 text-black">Sign In</Typography>
            </div>

            <div className="flex flex-row mb-[25px] gap-[22px]">
                <div className="flex justify-center bg-[#F7F7F8] py-[16px] gap-2.5 w-full">
                    <Image src={iconGoogle} width="18" height="18" alt="icon google" />
                    <Typography variant="p" className="text-[#030229] text-base cursor-pointer">Google</Typography>
                </div>

                <div className="flex justify-center bg-[#F7F7F8] py-[16px] gap-2.5 w-full">
                    <Image src={iconFacebook} width="9" height="18" alt="icon facebook" />
                    <Typography variant="p" className="text-[#030229] text-base cursor-pointer">Facebook</Typography>
                </div>
            </div>

            <div className="flex items-center gap-[14px] mb-8">
                <div className="w-full h-0 opacity-10 border border-solid border-[#030229]" /> {/* Сделать divider */}
                <Typography variant="p" className="text-[#030229]">Or</Typography>
                <div className="w-full h-0 opacity-10 border border-solid border-[#030229]" />
            </div>

            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col mb-5">
                    <label className="mb-2 text-[#030229] text-sm cursor-pointer" htmlFor="email">Email Address</label>
                    <input className="bg-[#F7F7F8] p-4 w-full text-[#030229] opacity-70 text-base rounded-xl"
                        placeholder="example@gmail.com"
                    />
                </div>
            
                <div className="flex flex-col mb-6">
                    <label className="mb-2 text-[#030229] text-sm cursor-pointer" htmlFor="email">Password</label>
                    <input className="bg-[#F7F7F8] p-4 w-full text-[#030229] opacity-70 text-base rounded-xl"
                        placeholder="******"
                    />
                </div>

                <div className="w-full flex justify-between">
                    <div className="flex">
                        <input
                            className="opacity-50 border border-solid border-[#030229] box-border rounded-sm cursor-pointer"
                            type="checkbox"
                        />
                        <Typography variant="p" size="14px" className="text-[#030229] ml-2.5">Remember me</Typography>
                    </div>

                    <Typography variant="p" size="14px" className="text-[#605BFF] cursor-pointer">Reset Password?</Typography>
                </div>

                <Button className="bg-[#605BFF] rounded-xl py-3.5 mt-10 mb-8">
                    <Typography align="center" size="16px" variant='p' className="text-white">Sign In</Typography>
                </Button>

                <span>
                    <Typography variant="p" size="16px" className="text-[#030229]">
                        Don’t have account yet?
                        <Link href="/">
                            <a href="/" className="text-[#605BFF] cursor-pointer"> New Account</a>
                        </Link>
                    </Typography>
                </span>
            </div>
        </aside>

        <div className="w-full flex justify-center items-center">
            <Image src={imageSignIn} width="600" height="600" alt="image signIn" />
        </div>
    </div>
  );
};
