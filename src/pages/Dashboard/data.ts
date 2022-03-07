import type { IChart } from 'typesChart';

const chartOptions: IChart = {
  series: [
    {
      name: 'Online Customers',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 46, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
};

type TTopCustomers = {
  head: Array<string>;
  body: {
    username: string;
    order: string;
    price: string;
  }[]
}

const topCustomers: TTopCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      "username": "john doe",
      "order": "490",
      "price": "$15,870"
    },
    {
      "username": "frank iva",
      "order": "250",
      "price": "$12,251"
    },
    {
      "username": "anthony baker",
      "order": "120",
      "price": "$10,840"
    },
    {
      "username": "frank iva",
      "order": "110",
      "price": "$9,251"
    },
    {
      "username": "anthony baker",
      "order": "80",
      "price": "$8,840"
    }
  ]
};

type TLatesOrders = {
  header: Array<string>;
  body: {
    id: string;
    user: string;
    date: string;
    price: string;
    status: string;
  }[]
}

const latestOrders: TLatesOrders = {
  header: [
    "order id",
    "user",
    "total price",
    "date",
    "status"
  ],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
}

export {
  chartOptions,
  topCustomers,
  latestOrders
}
