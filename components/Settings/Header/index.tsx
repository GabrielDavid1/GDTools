//React
import React from 'react';

//Components
import { Details, Home } from './styles';

//Types
import { Config } from '../../../types/Funcs';
interface Props {
  config: Config;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header ({
  config,
  isActive,
  setIsActive,
}:Props){
 return (
   <header className="header-settings">
    <Home 
      isActive={isActive}
      onClick={() => setIsActive(true)}
    > 
     <svg 
       focusable="false" 
       aria-hidden="true" 
       viewBox="0 0 24 24" 
       data-testid="CottageIcon"
       fill={isActive ? "#c7c1c1" : "#333030"}
     >
        <path d="M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4 12 3zm-2-2c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z">
        </path>
     </svg>
    </Home>
    <Details 
      isActive={isActive}
      onClick={() => setIsActive(false)}
    > 
      <svg
        focusable="false" 
        aria-hidden="true" 
        viewBox="0 0 24 24" 
        data-testid="SettingsIcon"
        fill={isActive ? "#333030" : "#c7c1c1"}
      >
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z">
        </path>
      </svg>
    </Details>
   </header> 
 )
}