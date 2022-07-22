import React from 'react';

import { 
  Container, 
} from './styles';
import theme from '../../theme';

export default function Side (){
  
 return (
   <section className="side-area">
      <a className="block" 
       href="https://github.com/" 
      >
        Header
      </a>
      <a className="block" 
       href="https://github.com/" 
      >
        Main 
      </a>
      <a className="block" 
       href="https://github.com/" 
      >
        View
      </a>
      <a className="block" 
       href="https://github.com/" 
      >
        Svg
      </a>
      <a className="block" 
       href="https://github.com/" 
      >
        Image 
      </a>
      <a className="block" 
       href="https://github.com/" 
      >
        Tab Nav
      </a>
   </section>
 )
}