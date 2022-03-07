import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import statusCards from '../../assets/jsonData/status-card-data.json';
import { Badge, Table } from 'shared';
import { StatusCard } from 'components';
import { chartOptions, topCustomers, latestOrders } from './data';

const renderCustomerBody = () => (
  <>
    {topCustomers.body.map((item) => (
      <tr key={uuidv4()}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
    ))}
  </>
);

const renderOrderBody = () => (
  <>
    {latestOrders.body.map((item) => (
      <tr key={uuidv4()}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
          <Badge type={'primary'} content={item.status} />
        </td>
    </tr>
    ))}
  </>
);

export const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item) => (
              <div className="col-6" key={uuidv4()}>
                <StatusCard
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='col-6'>
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height='100%'
            />
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top Customer</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                bodyData={[]}
                customBody={renderCustomerBody}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view All</Link>
            </div>
          </div>
        </div>

        <div className='col-8'>
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                bodyData={[]}
                customBody={renderOrderBody}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
