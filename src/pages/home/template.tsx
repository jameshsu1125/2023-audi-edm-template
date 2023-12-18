import { memo, useEffect } from 'react';
import './index.less';
import { IReactProps } from '@/settings/type';

const Template = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);
  return (
    <div className='mockup-phone'>
      <div className='camera'></div>
      <div className='display'>
        <div className='artboard bg-white artboard-demo phone-1 pt-14'>{children}</div>
      </div>
    </div>
  );
});
export default Template;
