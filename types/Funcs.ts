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
    fontFamily?:string;
    fontSize?:string;
    fontWeight?:string;
    textAlign?:string;
    textContent?:string;
}

export const config = {
    type:'Div',
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

export const configText = {
    type:'Text',
    fontSize: "1rem",
    fontWeight: "100",
    color: "black",
    fontFamily: "Arial",
    textAlign: "left",
    textContent: "Text",
};
export interface Funcs {
    id: string;
    name: string;
    type:string;
    config?: Config;
    children?: Funcs[];
    color:string;
}