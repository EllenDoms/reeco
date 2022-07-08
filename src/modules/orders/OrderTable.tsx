import React, { useMemo } from 'react';
import { PrintOutlined } from '@mui/icons-material';
import { SecondaryButton } from '../../components/button/Button';

interface Props {}

export function OrderTable(props: Props) {
  return (
    <div className="w-full p-8 bg-white border border-gray-200 rounded-md">
      <div className="flex justify-between items-center">
        <div>search</div>
        <div className="flex gap-4 items-center">
          <SecondaryButton label="Add item" />
          <PrintOutlined className="text-gray-500" />
        </div>
      </div>
      <Table {...props} />
    </div>
  );
}

function Table(props: Props) {
  // const getData = () => {
  //   fetch('data.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(function(response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });
  // };
  // const data = getData();

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'image',
  //       accessor: 'image',
  //       Cell: (props: { value: Contact }) => <div></div>,
  //     },
  //     {
  //       Header: 'Product name',
  //       accessor: 'name',
  //       Cell: (props: { value: Contact }) => <div></div>,
  //     },
  //     {
  //       Header: 'Price',
  //       accessor: 'price',
  //       Cell: (props: { value: Contact }) => <div></div>,
  //     },
  //     {
  //       Header: 'Quantity',
  //       accessor: 'quantity',
  //       Cell: (props: { value: Contact }) => <div></div>,
  //     },
  //     {
  //       Header: 'Total',
  //       accessor: 'total',
  //       Cell: (props: { value: Contact }) => <div></div>,
  //     },
  //     {
  //       Header: 'Status',
  //       accessor: 'status',
  //       Cell: (props: { value: Contact }) => <div></div>,
  //     },
  //   ],
  //   [],
  // );

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //   columns,
  //   data,
  // });

  return <div></div>;
}
