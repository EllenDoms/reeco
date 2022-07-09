import { ChevronRightOutlined } from '@mui/icons-material';
import React from 'react';

interface Props {
  breadCrumbs: BreadCrumbProps[];
  actions?: React.ReactNode;
}

interface BreadCrumbProps {
  title: string;
}

export function SubHeader({ breadCrumbs, actions }: Props) {
  return (
    <div className="w-full px-14 py-4 bg-white shadow-lg flex flex-row justify-between items-end">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-2 items-center">
          {breadCrumbs.map((crumb, i) => {
            const isSelected = breadCrumbs.length - 1 === i;

            return (
              <div key={crumb.title} className="flex flex-row gap-2 items-center">
                <div className={isSelected ? 'text-text underline' : 'text-gray-700'}>
                  {crumb.title}
                </div>
                {!isSelected && <ChevronRightOutlined className="w-4 h-4" />}
              </div>
            );
          })}
        </div>
        <h1 className="text-3xl font-extrabold">{breadCrumbs[breadCrumbs.length - 1].title}</h1>
      </div>
      <div>{actions}</div>
    </div>
  );
}
