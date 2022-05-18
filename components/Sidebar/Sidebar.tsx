import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4} from 'uuid';

import { Button, Typography } from 'shared';

import imageAvatar from 'assets/image/imageAvatar.png';
import imageLamp from 'assets/image/imageLamp.jpg';
import iconLogout from 'assets/svg/iconLogout.svg';
import iconLogin from 'assets/svg/iconLogin.svg';

import { routesSidebar } from './data';

type TSidebarItem = {
  icon: string;
  title: string;
}

const SidebarItem = ({ icon, title }: TSidebarItem) => (
    <div className="py-2.5 pl-7 bg-main">
        <div className="gap-3.5 flex items-center font-semibold transition ease-in duration-300">
            <Image
                className="capitalize tracking-wide"
                src={icon}
                width="24"
                height="24"
                alt={`icon-${icon}`}
            />
            <Typography
                variant="p"
                size="16px"
                align="center"
                className="font-semibold text-[#030229] opacity-50 hover:text-[#605BFF] hover:opacity-100"
            >
                {title}
            </Typography>
        </div>
    </div>
);

export const Sidebar = () => (
    <div className="max-w-[13.625rem] w-full h-screen fixed top-0 bg-white shadow-shadow-main">
        <div className="flex justify-center items-center h-36 gap-5">
            <Image
                className="h-11 mr-4"
                src={iconLogin}
                width="42"
                height="42"
                alt="company logo"
            />
            <Typography variant="h2" size="24px" className="font-semibold text-[#030229]">Effective</Typography>
        </div>
        {routesSidebar.map((item) => (
            <Link href={item.route} key={uuidv4()}>
                <a>
                    <SidebarItem
                        title={item.display_name}
                        icon={item.icon}
                    />
                </a>
            </Link>
        ))}

        <div className="mt-40 flex flex-col justify-center items-center">
            <Image
                src={imageLamp}
                width="150"
                height="150"
                alt="image lamp"
            />
            <Button className="bg-[#605BFF] rounded-xl">
                <Typography variant="p" align="center" size="12px" className="text-white font-semibold">Upgrade Now</Typography>
            </Button>
        </div>

        <section className="flex items-center mt-7 ml-7">
            <Image
                src={imageAvatar}
                width="43"
                height="43"
                alt="icon avatar"
            />

            <div className="flex flex-col ml-2.5 mr-7">
                <Typography variant="h6" size="12px" className="text-black font-semibold mb-1">Easin Arafat</Typography>
                <Typography variant="p" size="10px" className="opacity-50 font-normal text-black">Free Account</Typography>
            </div>

            <Image
                src={iconLogout}
                width="17"
                height="46"
                alt="icon logout"
                className="cursor-pointer"
            />
        </section>
    </div>
);
