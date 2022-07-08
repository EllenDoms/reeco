import React, { useState } from 'react';
import clsx from 'clsx';

interface Props {}

const tabs: TabProps[] = [
  {
    label: 'Store',
    link: '#',
  },
  {
    label: 'Orders',
    link: '#',
  },
  {
    label: 'Analytics',
    link: '#',
  },
];

export function Tabs(props: Props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  //TODO make tabs go to different pages

  return (
    <div className="flex flex-row gap-12">
      {tabs.map((tab) => {
        return (
          <TabItem
            {...tab}
            key={tab.label}
            isSelected={selectedTab === tab ? true : false}
            onClick={setSelectedTab}
          />
        );
      })}
    </div>
  );
}

interface TabProps {
  label: string;
  link: string;
}

interface ItemPropsFull extends TabProps {
  isSelected?: boolean;
  onClick: (label: TabProps) => void;
}

function TabItem({ label, link, isSelected, onClick }: ItemPropsFull) {
  return (
    <div
      onClick={() => onClick({ label, link })}
      className={clsx(
        'cursor-pointer text-sm text-white',
        isSelected ? 'opacity-100' : 'opacity-80',
      )}
    >
      {label}
    </div>
  );
}
