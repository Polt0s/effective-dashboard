import Image from 'next/image';

import {
    Badge,
    Card,
    Table,
    Typography
} from 'shared';

import { v4 as uuidv4 } from 'uuid';

import iconBag from 'assets/svg/dashboard/iconBag.svg';
import iconLove from 'assets/svg/dashboard/iconLove.svg';
import iconSuitCase from 'assets/svg/dashboard/iconSuitCase.svg';
import iconTV from 'assets/svg/dashboard/iconTV.svg';
import iconDress from 'assets/svg/dashboard/iconDress.png';
import iconLens from 'assets/svg/dashboard/iconLens.png';
import iconOil from 'assets/svg/dashboard/iconOil.png';
import iconParfum from 'assets/svg/dashboard/iconParfum.png';
import iconStar from 'assets/svg/iconStar.svg';
import imageIphone from 'assets/image/imageIphone.png';
import imageSneakers from 'assets/image/imageSneakers.png';

const dataCards: TDataCards[] = [
    {
        icon: iconLove,
        count: '178+',
        text: 'Save Products',
    },
    {
        icon: iconTV,
        count: '20+',
        text: 'Stock Products',
    },
    {
        icon: iconBag,
        count: '190+',
        text: 'Sales Products',
    },
    {
        icon: iconSuitCase,
        count: '12+',
        text: 'Sales Products',
    },
];

const headersRecentOrders: string[] = ['Tracking no', 'Product Name', 'Price', 'Total Order', 'Total Amount'];
const dataRecentOrders: TDataRecentOrders[] = [
    {
        hash: '#876364',
        product: (
            <div className="flex justify-start gap-2.5">
                <Image src={iconLens} width="30" height="30" alt={`icon-${iconLens}`} />
                <Typography variant="p" className="text-base">Camera Lens</Typography>
            </div>
        ),
        price: '$178',
        order: 325,
        total: '$1,46,660',
    },
    {
        hash: '#876368',
        product: (
            <div className="flex justify-start gap-2.5">
                <Image src={iconDress} width="30" height="30" alt={`icon-${iconDress}`} />
                <Typography variant="p" className="text-base">Black Sleep Dress</Typography>
            </div>
        ),
        price: '$14',
        order: 53,
        total: '$46,660'
    },
    {
        hash: '#876412',
        product: (
            <div className="flex justify-start gap-2.5">
                <Image src={iconOil} width="30" height="30" alt={`icon-${iconOil}`} />
                <Typography variant="p" className="text-base">Argan Oil</Typography>
            </div>
        ),
        price: '$21',
        order: 78,
        total: '$3,46,676'
    },
    {
        hash: '#876621',
        product: (
            <div className="flex justify-start gap-2.5">
                <Image src={iconParfum} width="30" height="30" alt={`icon-${iconParfum}`} />
                <Typography variant="p" className="text-base">EAU DE Parfum</Typography>
            </div>
        ),
        price: '$32',
        order: 98,
        total: '$3,46,981'
    }
];

const CustomTableRecentOrders = () => (
    <>
        {dataRecentOrders.map((item) => (
            <tr key={uuidv4()}>
                <td className="text-left">
                    <Typography variant="p" className="text-base">
                        {item.hash}
                    </Typography>
                </td>
                <td className="text-left">
                    {item.product}
                </td>
                <td className="text-left">
                    <Typography variant="p" className="text-base">{item.price}</Typography>
                </td>
                <td className="flex justify-start items-center">
                    <Badge className="bg-[#cbf6ff] min-w-[61px] min-h-[30px]">
                        <Typography variant="p" className="text-base text-[#26C0E2] text-center font-bold">{item.order}</Typography>
                    </Badge>
                </td>
                <td className="text-left">
                    <Typography variant="p" className="text-base">{item.total}</Typography>
                </td>
            </tr>
        ))}
    </>
);

const Dashboard = () => {
    const arrayStars: number[] = Array.from([1, 2, 3, 4, 5]);

    return (
        <div>
            <Typography variant="h1" className="font-bold py-8 text-[#030229] text-xl">Dashboard</Typography>

            <div className="flex flex-wrap gap-7">
                {dataCards.map((item) => (
                    <Card key={uuidv4()} className="py-7 pl-7">
                        <div className="flex gap-5 items-center">
                            <Image
                                src={item.icon}
                                width="60"
                                height="60"
                                alt={`icon-${item.icon}`}
                            />

                            <div className="flex flex-col">
                                <Typography
                                    variant="h6"
                                    size="22px"
                                    className="mb-1 text-black opacity-70 font-extrabold"
                                >
                                    {item.count}
                                </Typography>
                                <Typography
                                    variant="p"
                                    size="14px"
                                    className="text-[#030229] opacity-70 font-normal"
                                >
                                    {item.text}
                                </Typography>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-between mt-8 gap-7">
                <Card className="p-6 w-9/12">
                    <>
                        <Typography variant="h3" size="18px" className="font-bold opacity-70 mb-6">Recent Orders</Typography>
                        <Table 
                            headData={headersRecentOrders}
                            styleTh="text-[#030229] text-base"
                            customBody={() => <CustomTableRecentOrders />}
                            bodyData={[]}
                        />
                    </>
                </Card>

                <Card className="p-6 min-h-[385px]">
                    <>
                        <Typography variant="h3" size="18px" className="font-bold opacity-70 mb-6">Top Selling Products</Typography>

                        <div className="flex gap-5">
                            <Image src={imageSneakers} width="96" height="96" alt={`image-${imageSneakers}`} />
                            <div className="flex flex-col">
                                <Typography variant="h6" className="font-bold text-base">NIKE Shoes Black Pattern</Typography>
                                <div className="my-2.5 flex">
                                    {arrayStars.map(() => (
                                        <Image
                                            key={uuidv4()}
                                            src={iconStar}
                                            width="15"
                                            height="15"
                                            alt={`icon-${iconStar}`}
                                        />
                                    ))}
                                </div>
                                <Typography variant="p" className="font-bold text-base">$87</Typography>
                            </div>
                        </div>

                        <div className="my-5 border border-solid border-[#030229] opacity-5" />

                        <div className="flex gap-5">
                            <Image src={imageIphone} width="96" height="96" alt={`image-${imageIphone}`} />
                            <div className="flex flex-col">
                                <Typography variant="h6" className="font-bold text-base">iPhone 12</Typography>
                                <div className="my-2.5 flex">
                                    {arrayStars.map(() => (
                                        <Image
                                            key={uuidv4()}
                                            src={iconStar}
                                            width="15"
                                            height="15"
                                            alt={`icon-${iconStar}`}
                                        />
                                    ))}
                                </div>
                                <Typography variant="p" className="font-bold text-base">$987</Typography>
                            </div>
                        </div>
                    </>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;

type TDataCards = {
  icon: string;
  count: string;
  text: string;
}
type TDataRecentOrders = {
    hash: string;
    product: React.ReactElement;
    price: string;
    order: number;
    total: string;
}
