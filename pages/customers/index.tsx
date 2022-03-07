import { Table } from "shared";

import customerList from '../../assets/jsonData/customer-list.json';

const customerTableHead = ['', 'name', 'email', 'phone', 'total orders', 'total spend', 'location'];

const Customers = () => {
  return (
    <div>
      <h2 className="page-header">Customer</h2>

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
    </div>
  );
};

export default Customers;
