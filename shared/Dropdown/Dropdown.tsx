import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import styles from './Dropdown.module.css';

interface IDropDown {
  items: {
    link: string;
    content: string;
    icon?: string;
  }[],
  initialLink?: string;
  style?: React.CSSProperties;
  customIcon?: boolean;
  icon?: string;
}

export const DropDown = ({ items, initialLink, style, customIcon, icon }: IDropDown) => {
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);
    // const [currentLink, setCurrentLink] = useState<string>(initialLink);
    const refToggle = React.useRef<HTMLButtonElement>(null);
    const dropDownRef = React.useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setOpenMenu((ref) => !ref);
    };

    // const handleChangeLink = () => {
    //     setOpenMenu(false);
    //     setCurrentLink(content);
    // };

    const clickOutside = React.useCallback((event: MouseEvent): void => {
        const target = event.target as Element;

        if(openMenu && refToggle.current && !refToggle.current.contains(target) && !dropDownRef.current?.contains(target)) {
            setOpenMenu(false);
        }
    }, [openMenu]);

    React.useEffect(() => {
        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [clickOutside, openMenu]);

    return (
        <div className={styles.Dropdown}>
          <button ref={refToggle} className={styles.Dropdown__toggle} onClick={handleToggle}>
            {customIcon ? (
              <div className={styles.TopnavRight__user}>
                <div className={styles.TopnavRight__userImage}>
                  {icon && <Image src={icon} width="40" height="40" alt="profile logo" />}
                </div>
            </div>
            ) : initialLink}
          </button>
            {/* <div onClick={handleToggle} className={`dropDown ${activeLink ? 'active' : ''}`} ref={refToggle}>
                <span className="dropDown__initialLink">{currentLink}</span>
                <i className="arrow arrow__down" />
            </div> */}

            <div className={openMenu ? `${styles.Dropdown__menu} ${styles.active}` : styles.Dropdown__menu} ref={dropDownRef}>
                {items.map((item) => (
                    <Link href={item.link} key={uuidv4()}>
                      <div className={styles.Notification__item}>
                        <i>{item.icon}</i>
                        <span>{item.content}</span>
                      </div>
                  </Link>
                ))}
            </div>
        </div>
    );
};
