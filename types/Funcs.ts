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
    tipo:'Retangulo',
    width: "100px",
    height: "100px",
    bgColor: "orange",
    pxBorder: "1px",
    typeBorder: "3",
    colorBorder: "#rrggbb",
    boxShadow: 10, 
    borderRadius: "0px",
    opacity: "1",
    zIndex: "1",
};
export interface Funcs {
    id: string;
    name: string;
    type:string;
    config?: Config;
    children?: Funcs[];
    color:string;
}