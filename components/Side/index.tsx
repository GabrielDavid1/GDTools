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
       target="_blank"
      >
        Header
      </a>
      <a className="block" 
       href="https://github.com/" 
       target="_blank"
      >
        Main 
      </a>
      <a className="block" 
       href="https://github.com/" 
       target="_blank"
      >
        View
      </a>
      <a className="block" 
       href="https://github.com/" 
       target="_blank"
      >
        Svg
      </a>
      <a className="block" 
       href="https://github.com/" 
       target="_blank"
      >
        Image 
      </a>
      <a className="block" 
       href="https://github.com/" 
       target="_blank"
      >
        Tab Nav
      </a>
   </section>
 )
}