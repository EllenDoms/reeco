import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { PrintOutlined } from '@mui/icons-material';
import { LinkButton, SecondaryButton } from '../../../components/button/Button';
import { IProductOrder } from '../../../redux/orderStore';
import { Label } from '../../../components/badges/label';
import { IconButton } from '../../../components/button/IconButton';

interface Props {
  products?: IProductOrder[];
}

export function OrderTable(props: Props) {
  return (
    <div className="w-full p-8 bg-white border border-gray-200 rounded-md flex flex-col gap-4">
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

function Table({ products }: Props) {
  const columns = useMemo(
    () => [
      {
        Header: 'Product name',
        accessor: 'title',
      },
      {
        Header: 'Brand',
        accessor: 'brand',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (props: { value: string }) => (
          <div className="flex items-start">
            {props.value !== 'UNDEFINED' && (
              <Label label={props.value} color={Label.colors.SUCCESS} />
            )}
          </div>
        ),
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: (props: { value: string }) => (
          <div className="flex items-center gap-2 justify-end">
            <IconButton icon="CheckOutlined" />
            <IconButton icon="CloseOutlined" />
            <LinkButton label="Edit" onClick={() => console.log('edit')} />
          </div>
        ),
      },
    ],
    [],
  );

  // TODO types of react-table are not up to date with react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    // @ts-ignore
    columns,
    data: products || [],
  });

  return (
    <div>
      {products && (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th className="w-0 pl-4" />
                {headerGroup.headers.map((column, i) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                <th className="w-0 pl-4" />
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td className="w-0 pl-4" />
                  {row.cells.map((cell, i) => {
                    const isFirstOrLast = i === 0 || i === row.cells.length - 1;

                    return (
                      <td className={!isFirstOrLast ? 'withPadding' : ''} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                  <td className="w-0 pl-4" />
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
