import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Table.module.css';

import type { ReactElement } from 'react';

interface ITable {
  limit?: string;
  headData?: Array<string>;
  bodyData: Array<IBodyTable>;
  customBody?: () => ReactElement;
}

export const Table = ({
  limit,
  headData,
  bodyData,
  customBody,
}: ITable) => {
  let pages = 0;
  let range: Array<number> = [];
  const [currentPage, setCurrentPage] = useState<number>(0);

  const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit));
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1;

    range = Array.from(Array(pages).keys())
  }

  const selectPage = (page: number) => {
    const start = Number(limit) * page; 
    const end = start + Number(limit);

    setDataShow(bodyData.slice(start, end));
    setCurrentPage(page);
  }

  return (
    <div>
      <div className={styles.Table__wrapper}>
        <table className={styles.Table}>
          <thead>
            <tr>
              {headData && headData.map((item) => (
                <th key={uuidv4()}>{item}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {customBody ? customBody() : dataShow.map((item) => (
                <tr key={uuidv4()}>
                  {item.id && (<td>{item.id}</td>)}
                  {item.name && (<td>{item.name}</td>)}
                  {item.email && (<td>{item.email}</td>)}
                  {item.phone && (<td>{item.phone}</td>)}
                  {item.total_orders && (<td>{item.total_orders}</td>)}
                  {item.total_spend && (<td>{item.total_spend}</td>)}
                  {item.location && (<td>{item.location}</td>)}
                </tr>
            ))}
           </tbody>
        </table>
      </div>

      {pages > 0 && !customBody ? (
        <div className={styles.Table__pagination}>
          {range.map((item, index) => (
            <div key={uuidv4()} className={`${styles.Table__paginationItem} ${currentPage === index ? styles.active : ''}`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

interface IBodyTable {
  id?: number;
  name?: string;
  email?: string;
  location?: string;
  phone?: string;
  total_spend?: string;
  total_orders?: number;
}
