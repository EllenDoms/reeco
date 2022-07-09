import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { PrintOutlined } from '@mui/icons-material';
import { SecondaryButton } from '../../../components/button/Button';
import { IProductOrder } from '../../../redux/orderStore';
import { Label } from '../../../components/badge/label';
import { TableActions } from './TableActions';
import { ProductStatus, ProductStatusColors } from '../../../types/product';

interface Props {
  products?: IProductOrder[];
  setMissingProductModal: (product: IProductOrder) => void;
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

function Table({ products, setMissingProductModal }: Props) {
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
        id: 'price',
        accessor: (props: IProductOrder) => {
          return { price: props.price, prevPrice: props.prevPrice };
        },
        Cell: (props: { value: { price: number; prevPrice: number } }) => (
          <div>
            <p>
              <b>{props.value.price}</b> / 6 * 1LB
            </p>
            <p className="line-through">{props.value.prevPrice}</p>
          </div>
        ),
      },
      {
        Header: 'Quantity',
        id: 'quantity',
        accessor: (props: IProductOrder) => {
          return { quantity: props.quantity, prevQuantity: props.prevQuantity };
        },
        Cell: (props: { value: { quantity: number; prevQuantity: number } }) => (
          <div>
            <p>
              <b>{props.value.quantity}</b> x 6 * 1LB
            </p>
            <p className="line-through">{props.value.prevQuantity}</p>
          </div>
        ),
      },
      {
        Header: 'Total',
        id: 'total',
        accessor: (props: IProductOrder) => {
          return { price: props.price, quantity: props.quantity, prevPrice: props.prevPrice };
        },
        Cell: (props: { value: { price: number; quantity: number; prevPrice: number } }) => (
          <div>
            <p>
              {(props.value.price * props.value.quantity).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <p className="line-through">
              {props.value.prevPrice &&
                (props.value.prevPrice * props.value.quantity).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
            </p>
          </div>
        ),
      },
      {
        Header: 'Status',
        id: 'status',
        accessor: (props: IProductOrder) => {
          return { product: props };
        },
        Cell: (props: { value: { product: IProductOrder } }) => (
          <div className="flex justify-between items-center">
            <div>
              {props.value.product.status !== ProductStatus.UNDEFINED && (
                <Label
                  label={props.value.product.status}
                  color={ProductStatusColors[props.value.product.status as ProductStatus]}
                />
              )}
            </div>
            <TableActions
              product={props.value.product}
              setMissingProductModal={setMissingProductModal}
            />
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
    // TODO: add picture
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
                    const isGray = i === row.cells.length - 1;

                    return (
                      <td
                        {...cell.getCellProps()}
                        className={isGray ? 'p-3 pl-6 bg-gray-50 w-80' : 'py-3'}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
