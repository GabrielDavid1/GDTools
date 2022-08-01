//Code
import getSvgType from "./getSvgType";

export default function getElementType (type:string | undefined, svgName:string | undefined) {
    switch (type) {
        case 'div': return '.View';
        case 'text': return '.Text';
        case 'image': return '.Image';
        case 'input': return '(TextInput)';
        case 'svg': return getSvgType(svgName!!);
        default: return '(TouchableOpacity)';
    }
}