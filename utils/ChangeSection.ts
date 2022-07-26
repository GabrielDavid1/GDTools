//Contexts
import { useFuncs } from '../contexts/Functionalities';

//types
import { Config } from '../types/Funcs';

interface Props {
    config: Config;
    value:boolean;
}

export default function changeSection ({ config, value }:Props) {
    const { setOnToggle, setSelected } = useFuncs();
    setOnToggle(value);
    setSelected(config as Config);
}