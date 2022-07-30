export default function getElementType (type:string | undefined){
    switch (type) {
        case 'div': return '.View';
        case 'text': return '.Text';
        case 'image': return '.Image';
        case 'input': return '(TextInput)';
        default: return '(TouchableOpacity)';
    }
}