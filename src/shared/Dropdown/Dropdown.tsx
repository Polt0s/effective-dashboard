import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './dropdown.css';

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

    const handleChangeLink = () => {
        setOpenMenu(false);
        // setCurrentLink(content);
    };

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
        <div className="dropdown">
          <button ref={refToggle} className="dropdown__toggle" onClick={handleToggle}>
            {customIcon ? (
              <div className="topnav__right-user">
                <div className="topnav__right-user__image">
                  <img src={icon} alt="" />
                </div>
            </div>
            ) : initialLink}
          </button>
            {/* <div onClick={handleToggle} className={`dropDown ${activeLink ? 'active' : ''}`} ref={refToggle}>
                <span className="dropDown__initialLink">{currentLink}</span>
                <i className="arrow arrow__down" />
            </div> */}

            <div className={openMenu ? "dropdown__menu active" : 'dropdown__menu'} ref={dropDownRef}>
                {items.map((item) => (
                    <Link to={item.link} key={uuidv4()} onClick={handleChangeLink}>
                      <div className="notification-item">
                        <i>{item.icon}</i>
                        <span>{item.content}</span>
                      </div>
                  </Link>
                ))}
            </div>
        </div>
    );
};
