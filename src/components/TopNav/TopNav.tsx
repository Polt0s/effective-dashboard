import './topnav.css';

import { profileMenuData, notificationData } from './data';
import { ThemeMenu } from '../ThemeMenu';
import { DropDown } from 'shared';

const user_image = require('../../assets/image/user-logo.png');

export const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input />
        <i></i>
      </div>

      <div className="topnav__right">
        <div className="topnav__right-item">
          <DropDown
            items={profileMenuData}
            customIcon
            icon={user_image}
          />
        </div>

        <div className="topnav__right-item">
        <DropDown
            items={notificationData}
            initialLink="Notification"
          />
        </div>

        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};
