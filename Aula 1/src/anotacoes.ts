const objeto = {
  propriedade1: "valor",
  propriedade2: [1, 2, 3],
};

const list = [1, 23];

//Tem que tipar o parametro dentro da funcao: any, unknown, nev, number, string, etc.
function exemplo(parametros: number) {
  return list;
}

//const variable = exemplo(1)

type TipoExemplo = {
  prop1: number;
  prop2: string;
  prop3: {
    a: number;
  };
  //Ao adicionar o ? significa que a propriedade e opcional, nao preciso escrever necessariamente la embaixo.
  prop4?: string;
};

const variavelExemplo: TipoExemplo = {
  prop1: 0,
  prop2: "Raissa",
  prop3: {
    a: 0,
  },
};

// Classe:
class NomeDaClasse {
  public membro1: number;
  //private membro2: number
  constructor() {
    this.membro1 = 1;
  }
}

// Interface:
interface NomeDaInterface {
  metodo: (num: number) => number;
}

class NomeDaClasse2 implements NomeDaInterface {
  metodo(num: number) {
    return 1;
  }
}
