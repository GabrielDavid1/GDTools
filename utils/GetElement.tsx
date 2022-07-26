//Types
import { Config } from "../types/Funcs";

//Components
import { DivView } from "../components/Main/Elements/Div";
import { TextView } from "../components/Main/Elements/Text";
import ButtonView from "../components/Main/Elements/Button";
import ImageView from "../components/Main/Elements/Image";
import InputView from "../components/Main/Elements/Input";
import { ScrollListView } from "../components/Main/Elements/ScrollList";
import SvgView from "../components/Main/Elements/Svg";

export default function GetElement (type:string, config:Config) {
    switch(type) {
        case 'text': return <TextView config={config} />;
        case 'svg': return <SvgView config={config} />;
        case 'image': return <ImageView config={config} />;
        case 'button': return <ButtonView config={config} />;
        case 'input': return <InputView config={config} />;
        case 'scrollList': return <ScrollListView config={config} />;
        default: return <DivView config={config} />;
    }
}