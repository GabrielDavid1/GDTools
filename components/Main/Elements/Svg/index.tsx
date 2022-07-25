//React
import React from 'react';

//Utils
import { GetSvgIcon } from '../../../../utils/GetSvgIcon';

interface Props {
   name: string;
}

export default function SvgView ({ name }:Props){
 return GetSvgIcon(name);
}