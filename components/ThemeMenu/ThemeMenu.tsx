import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4} from 'uuid';

import { mode_settings, color_settings } from './data';
import styles from './ThemeMenu.module.css';

export const ThemeMenu = () => {
  const [currMode, setCurrMode] = useState('light');
  const [currColor, setCurrColor] = useState('blue');
  const menu_ref = useRef<HTMLDivElement>(null);
  const menu_toggle_ref = useRef<HTMLButtonElement>(null);

  const setActiveMenu = () => {
    if (menu_ref.current) {
      menu_ref.current.classList.add(styles.active)
    }
  };

  const closeMenu = () => {
    if (menu_ref.current) {
      menu_ref.current.classList.remove(styles.active);
    }
  }

  const setMode = (mode: TThemeSettings) => {
    setCurrMode(mode.id);
    localStorage.setItem('themeMode', mode.class);
  };

  const setColor = (color: TThemeSettings) => {
    setCurrColor(color.id);
    localStorage.setItem('colorMode', color.class);
  }

  useEffect(() => {
    const themeClass = mode_settings.find((item) => item.class === localStorage.getItem('themeMode'));
    const colorClass = color_settings.find((item) => item.class === localStorage.getItem('colorMode'));

    if (themeClass !== undefined) {
      setCurrMode(themeClass.id);
    }

    if (colorClass !== undefined) {
      setCurrColor(colorClass.id);
    }
  }, []);

  return (
    <div>
      <button ref={menu_toggle_ref} style={{ marginLeft: 20, border: 0, outline: 0, backgroundColor: 'transparent',position: 'relative' }} onClick={setActiveMenu}>
        <span>theme</span>
      </button>

      <div ref={menu_ref} className={styles.ThemeMenu}>
        <h4>Theme settings</h4>
        <button className={styles.ThemeMenu__close} onClick={closeMenu}>
          <span>Close</span>
        </button>

        <div className={styles.ThemeMenu__select}>
          <span>Choose mode</span>
          <ul className={styles.ModeList}>
            {mode_settings.map((item) => (
              <li key={uuidv4()} onClick={() => setMode(item)}>
                <div className={`${styles.ModeList__color} ${item.background} ${item.id === currColor ? 'active' : '' }`}>
                  <span>check</span>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.ThemeMenu__select}>
          <span>Choose color</span>
          <ul className={styles.ModeList}>
            {color_settings.map((item) => (
              <li key={uuidv4()} onClick={() => setColor(item)}>
                <div className={`${styles.ModeList__color} ${item.background} ${item.id === currColor ? 'active' : '' }`}>
                  <span>check</span>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type TThemeSettings = {
  id: string;
  name: string;
  background: string;
  class: string;
}
