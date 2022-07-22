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
    config: Config;
    children: Funcs[];
    index:number;
    path: number[];
}



/* 
    const array2 = [{
        id: '0',
        name: 'John',
        children: [
            {
                id: '1',
                name: 'Doe',
                children: [
                    {
                        id: '2',
                        name: 'Bluezão',
                        children: [],
                        index: 2,
                        path: [0,1],
                    },
                ],
                index: 1,
                path: [0],
            },
        ],
        index: 0,
        path: [],
    }];
    let resultado = [];

    const add = (elemento) => array.push(elemento);
    const findBy = (index) => console.log(array[index]);

    function specificFind (index, path, acc, arr, tipo) {
        let estatico = arr[acc]; 
        if (estatico.index === index) {
            switch(tipo) {
              case 'remover': delete estatico;
            }
        } else {
            specificFind(index, path, acc++, estatico.children);
        }
    }

    const findAll = () => console.log(array);
    const removeBy = (index) => delete resultado;
    const removeAll = () => array = [];

  //  specificFind(1, [0], 0, array2);
    specificFind(2, [0,1], 0,array2, 'remover');
*/