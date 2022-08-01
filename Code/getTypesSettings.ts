export default function getTypesSettings (element:string, type:string) {
    switch (element) {
        case 'border': return 'border';
        case 'borderRadius': return 'border-radius';
        case 'boxShadow': return 'elevation';
        case 'color': return 'color';
        case 'width': return 'width';
        case 'height': return 'height';
        case 'flexDirection': return 'flex-direction';
        case 'alignItems': return 'align-items';
        case 'justifyContent': return 'justify-content';
        case 'fontFamily': return 'font-family';
        case 'fontWeight': return 'font-weight';
        case 'fontSize': return 'font-size';
        case 'gap': return 'gap';
        case 'marginLeft': return 'margin-left';
        case 'marginRight': return 'margin-right';
        case 'marginBottom': return 'margin-bottom';
        case 'marginTop': return 'margin-top';
        case 'position': return 'position';
        case 'bgColor': return (type === 'div' || type === 'button') ? 'background-color' : 'color';
        default: return 'padding';
    }
}