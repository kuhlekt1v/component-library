import React from 'react';

type Props = {
  width: string;
  height: string;
};

const IconLogo = ({ width, height }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.4523 3.23676C27.0957 -0.11993 21.6534 -0.119936 18.2967 3.23675L2.51752 19.0159C-0.839168 22.3726 -0.839175 27.8149 2.51751 31.1716L18.2967 46.9508C21.6534 50.3075 27.0957 50.3075 30.4523 46.9508L46.2315 31.1716C49.5882 27.8149 49.5882 22.3726 46.2315 19.016L30.4523 3.23676ZM24.3745 36.6975C30.7831 36.6975 35.9782 31.5023 35.9782 25.0938C35.9782 18.6852 30.7831 13.4901 24.3745 13.4901C17.966 13.4901 12.7708 18.6852 12.7708 25.0938C12.7708 31.5023 17.966 36.6975 24.3745 36.6975Z"
        fill="white"
      />
    </svg>
  );
};

export default IconLogo;
