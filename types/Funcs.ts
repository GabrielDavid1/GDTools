interface Config {
    color?:string;
    width?:string;
    height?:string;
    boxShadow?:string;
    borderWith?:string;
    borderStyle?:string;
    borderColor?:string;
    position?:string;
}
export interface Funcs {
    id: string;
    name: string;
    type:string;
    config?: Config;
    children?: Funcs[];
}