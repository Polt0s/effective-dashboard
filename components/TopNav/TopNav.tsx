import styles from './Topnav.module.css';

import { profileMenuData, notificationData } from './data';
import { ThemeMenu } from '../ThemeMenu';
import { DropDown } from 'shared';

const user_image = require('../../assets/image/user-logo.png');

export const TopNav = () => {
  return (
    <div className={styles.Topnav}>
      <div className={styles.Topnav__search}>
        <input />
        <i></i>
      </div>

      <div className={styles.TopnavRight}>
        <div className={styles.TopnavRight__item}>
          <DropDown
            items={profileMenuData}
            customIcon
            icon={user_image}
          />
        </div>

        <div className={styles.TopnavRight__item}>
        <DropDown
            items={notificationData}
            initialLink="Notification"
          />
        </div>

        <div className={styles.TopnavRight__item}>
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};
