//Contexts
import { useFuncs } from '../contexts/Functionalities';

//types
import { Config } from '../types/Funcs';

export default function changeSection (config:Config, value:boolean) {
    const { setOnToggle, setSelected } = useFuncs();
    setOnToggle(value);
    setSelected(config as Config);
}