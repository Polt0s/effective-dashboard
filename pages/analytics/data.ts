import adrieneWatsonIcon from 'assets/image/customers/AdrieneWatson.png';
import anneJacobIcon from 'assets/image/customers/AnneJacob.png';
import bethanyJacksonIcon from 'assets/image/customers/BethanyJackson.png';
import christineHustonIcon from 'assets/image/customers/ChristineHuston.png';
import jhonDeoIcon from 'assets/image/customers/JhonDeo.png';
import johnCariloIcon from 'assets/image/customers/JohnCarilo.png';
import johnDeoIcon from 'assets/image/customers/JohnDeo.png';
import markRuffaloIcon from 'assets/image/customers/MarkRuffalo.png';
import robertBacinsIcon from 'assets/image/customers/RobertBacins.png';
import shellbyIcon from 'assets/image/customers/Shellby.png';

type TDataCustomerList = {
    icon: StaticImageData;
    name: string;
    email: string;
    phone: string;
    gender: 'Male' | 'Female';
}

export const dataCustomerList: TDataCustomerList[] = [
    {
        icon: johnDeoIcon,
        name: 'John Deo',
        email: 'johndoe2211@gmail.com',
        phone: '+33757005467',
        gender: 'Male',
    },
    {
        icon: shellbyIcon,
        name: 'Shelby Goode',
        email: 'shelbygoode481@gmail.com',
        phone: '+33757005467',
        gender: 'Female',
    },
    {
        icon: robertBacinsIcon,
        name: 'Robert Bacins',
        email: 'robertbacins4182@.com',
        phone: '+33757005467',
        gender: 'Male',
    },
    {
        icon: johnCariloIcon,
        name: 'John Carilo',
        email: 'john carilo182@.com',
        phone: '+33757805467',
        gender: 'Male',
    },
    {
        icon: adrieneWatsonIcon,
        name: 'Adriene Watson',
        email: 'adrienewatson82@.com',
        phone: '+83757305467',
        gender: 'Female',
    },
    {
        icon: jhonDeoIcon,
        name: 'Jhon Deo',
        email: 'jhondeo24823@.com',
        phone: '+63475700546',
        gender: 'Male',
    },
    {
        icon: markRuffaloIcon,
        name: 'Mark Ruffalo',
        email: 'markruffalo3735@.com',
        phone: '+33757005467',
        gender: 'Male',
    },
    {
        icon: bethanyJacksonIcon,
        name: 'Bethany Jackson',
        email: 'bethanyjackson5@.com',
        phone: '+33757005467',
        gender: 'Female',
    },
    {
        icon: christineHustonIcon,
        name: 'Christine Huston',
        email: 'christinehuston4@.com',
        phone: '+33757005467',
        gender: 'Male',
    },
    {
        icon: anneJacobIcon,
        name: 'Anne Jacob',
        email: 'annejacob2@ummoh.com',
        phone: '+33757005467',
        gender: 'Male',
    },
];