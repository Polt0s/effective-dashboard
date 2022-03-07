import Link from "next/link";
import Image from 'next/image';

import styles from './Sidebar.module.css';
import sidebar_items from '../../assets/jsonData/sidebar_routes.json';

import logo from 'assets/image/logo.png';

type TSidebarItem = {
  icon: string;
  title: string;
}

const SidebarItem = ({ icon, title }: TSidebarItem) => (
    <div className={styles.Sidebar__item}>
      <div className={styles.Sidebar__itemInner}>
        <i className={icon}></i>
        <span>
          {title}
        </span>
      </div>
    </div>
);

export const Sidebar = () => (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__logo}>
        <Image src={logo} width="40" height="40" alt="company logo" />
        <h2>Effective</h2>
      </div>
      {sidebar_items.map((item, index) => (
        <Link href={item.route} key={index}>
          <a>
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
            />
          </a>
        </Link>
      ))}
    </div>
);
