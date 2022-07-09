import { DataUsage } from '@mui/icons-material';
import React from 'react';

interface Props {}

export function FullPageLoading(props: Props) {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <DataUsage className="text-brand animate-spin" fontSize="large" />
    </div>
  );
}
