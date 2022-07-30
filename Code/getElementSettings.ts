//Types
import { Config } from "../types/Funcs";

export default function getElementSettings (type:string, element:Config) {
    switch (type) {
        case 'border': return `'${element.border}'`;
        case 'borderRadius': return `${element.borderRadius}`;
        case 'boxShadow': return `${element.boxShadow}`;
        case 'color': return `'${element.color}'`;
        case 'width': return `${element.width}`;
        case 'height': return `${element.height}`;
        case 'flexDirection': return `${element.flexDirection}`;
        case 'alignItems': return `${element.alignItems}`;
        case 'justifyContent': return `${element.justifyContent}`;
        case 'fontFamily': return `'${element.fontFamily}'`;
        case 'fontWeight': return `'${element.fontWeight}'`;
        case 'fontSize': return `${element.fontSize}`;
        case 'gap': return `${element.gap}`;
        case 'marginLeft': return `${element.marginLeft}`;
        case 'marginRight': return `${element.marginRight}`;
        case 'marginBottom': return `${element.marginBottom}`;
        case 'marginTop': return `${element.marginTop}`;
        case 'position': return `${element.position}`;
        case 'bgColor': return `'${element.bgColor}'`;
        default: return `0px`;
    }
}