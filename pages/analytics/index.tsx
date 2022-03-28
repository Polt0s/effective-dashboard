import React from 'react';

import { Skeleton, Table } from "shared";

import customerList from '../../assets/jsonData/customer-list.json';

const customerTableHead = ['', 'name', 'email', 'phone', 'total orders', 'total spend', 'location'];

const Analytics = () => {
    const [loading, setLoading] = React.useState(true);
  
    const RenderTable = () => (
    <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                bodyData={customerList}
              />
            </div>
          </div>
        </div>
      </div>
  );

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div>
      <h2 className="page-header">Customer</h2>

      
        {loading ? (
            <Skeleton variant="rectangular" width={1164} height={704} background="#182838" />
        ) : (
            <RenderTable />
        )}
    </div>
  );
};

export default Analytics;
