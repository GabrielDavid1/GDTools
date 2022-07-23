export interface Config {
    width?: string;
    height?: string;
    border?: string;
    boxShadow?: number;
    borderRadius?: string;
    opacity?: string;
    zIndex?: string;
    transform?: string;
    bgColor?: string;
    color?:string;
    pxBorder?:string;
    typeBorder?:string;
    colorBorder?:string;
    position?:string;
}

export const config = {
    width: '150px',
    height: '150px',
    border: '1px solid #000',
    boxShadow: 10,
    borderRadius: '0px',
    opacity: '1',
    zIndex: '1',
    transform: 'translate(0px, 0px)',
    bgColor: '#fff',
    color: '#000',
    pxBorder: '1px',
    typeBorder: 'solid',
    colorBorder: '#000',
    position: 'absolute'
};
export interface Funcs {
    id: string;
    name: string;
    type:string;
    config?: Config;
    children?: Funcs[];
    color:string;
}