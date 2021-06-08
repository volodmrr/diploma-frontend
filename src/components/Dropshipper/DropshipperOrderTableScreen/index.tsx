import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Order } from '../../../common/types';
import OrderTable from '../../Common/OrderTable';
import DropshipperOrderItem from './../DropshipperOrderItem/index';

const orderList: Array<Order> = [
  {
    id: 1,
    productOrders: [
      {
        id: 1,
        product: {
          id: 1,
          name: 'id',
          image: {
            _id: '1',
            name: 'a',
            url: '/11111111',
          },
          description: 'asdsdfa',
          price: 1,
          oldPrice: 1,
          count: 2,
          suplier_setting_id: 1,
        },
        price: 135,
        count: 1,
      },
      {
        id: 1,
        product: {
          id: 1,
          name: 'id',
          image: {
            _id: '1',
            name: 'a',
            url: '/11111111',
          },
          description: 'asdsdfa',
          price: 1,
          oldPrice: 1,
          count: 2,
          suplier_setting_id: 1,
        },
        price: 135,
        count: 1,
      },
    ],
    address: 'address',
    fullName: 'fullName',
    description: 'description',
    price: 12,
    status: 'packaging',
    deliveryCost: 50,
  },
  {
    id: 1,
    productOrders: [],
    address: 'address',
    fullName: 'fullName',
    description: 'description',
    price: 12,
    status: 'sent',
    deliveryCost: 50,
  },
  {
    id: 1,
    productOrders: [],
    address: 'address',
    fullName: 'fullName',
    description: 'description',
    price: 12,
    status: 'received',
    deliveryCost: 50,
  },
  {
    id: 1,
    productOrders: [],
    address: 'address',
    fullName: 'fullName',
    description: 'description',
    price: 12,
    status: 'sentBack',
    deliveryCost: 50,
  },
];

const DropshipperOrderTableScreen: React.FC = () => {
  return (
    <>
      <Box mb={4}>
        <Typography variant="h3">Your order list</Typography>
        <Typography>Order history</Typography>
      </Box>
      <OrderTable>
        {orderList.map((order) => (
          <DropshipperOrderItem order={order} />
        ))}
      </OrderTable>
    </>
  );
};

export default DropshipperOrderTableScreen;