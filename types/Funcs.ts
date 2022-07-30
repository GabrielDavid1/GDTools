export interface Config {
    id?:string;
    type?:string;
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
    flexDirection?:string;
    flexWrap?:string;
    justifyContent?:string;
    alignItems?:string;
    isScrollX?:boolean;
    isScrollY?:boolean;
    gap?:string;
    marginLeft?:string;
    marginRight?:string;
    marginTop?:string;
    marginBottom?:string;
    svgName?:string;
    sourceImage?:string;
}

export interface Funcs {
    id?: string;
    name?: string;
    type?:string;
    config?: Config;
    children?: Funcs[];
    section?:string;
    mac?:string;
    isRoot?:boolean;
    color?:string;
}