import { Link } from 'react-router-dom';

import './sidebar.css';
import sidebar_items from '../../assets/jsonData/sidebar_routes.json';

const logo = require('../../assets/image/logo.png');

type TSidebarItem = {
  icon: string;
  title: string;
}

const SidebarItem = ({ icon, title }: TSidebarItem) => (
    <div className='sidebar_item'>
      <div className={`sidebar__item-inner`}>
        <i className={icon}></i>
        <span>
          {title}
        </span>
      </div>
    </div>
);

export const Sidebar = () => (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
        <h2>Effective</h2>
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
          />
        </Link>
      ))}
    </div>
);
