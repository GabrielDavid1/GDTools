//Types
import { Funcs } from "../types/Funcs";

export default function mountVariable (element:Funcs) {
    const name = element.name + "";
    
    const ElementNameUpper = name.at(0)?.toUpperCase() + name.substring(1).replace(/ /g, "");
    const ElementNameLower = name.at(0)?.toLowerCase() + name.substring(1).replace(/ /g, "");

    if(element.type === 'input') {
       return `[${ElementNameLower}, set${ElementNameUpper}] = useState('');`;
    } else {
       return `[${ElementNameLower}, set${ElementNameUpper}] = useState([0,1,2,3,4]);`;
    }
}