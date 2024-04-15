// type

type Order = {
    produtoId: string,
    valor: number,
}

type Usuario = { // não precisa ter virgula depois da (propriedade: valor)
    nome: string;
    sobreNome?: string;
    idade?: number;
    email?: string;
    senha?: string; // colocando o ponto de interrogação(?) nao se torna obrigatório esse campo
    ordem?: Order[]; // colocando o tipo da linha 3 na propriedade que tenho dentro do meu Usuario
    register(): string; // definido função e o tipo que ela deve retorna
};

const usuario: Usuario = {
    nome: 'Alexandre',
    sobreNome: 'Fernandes',
    idade: 23,
    email: 'alexandre@.com',
    ordem: [{ produtoId: 'Mouse', valor: 80 }],
    register() {
        return 'Registrado' // recuperando minha função e retornando o tipo que ela espera da linha 15
    }
}

const printLog = (mensage: string) => {}

printLog(usuario.senha!); // dessa forma usuario.senha! passando exclamação eu estou afirmando que no meu codigo existe a propriedade senha

// Unions
type Author = {
    livros: string[]
}

const author: Author & Usuario = { // agora essa const author tem todas as propriedades do Author e de Usuario
    nome: 'Simas',
    livros: ['Pequeno', 'Principe'],
    register() {
        return 'Registrado' // recuperando minha função e retornando o tipo que ela espera da linha 15
    }
}

type Nota = number | string; // isso consigo fazer apenas com type com interface nao consigo fazer
const nota: Nota = 1


/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */


// Interface
interface UsuarioInterface {
    readonly nome: string; // passando o readonly depois que o objeto foi criado nao consigo mas mudar o valor
    email: string;
    login(): string;
}

interface AuthorInterface {
    livros: string[]
}

const usuarioInterface: UsuarioInterface = {
    nome: 'Alexandre',
    email: 'alexandre@gmail.com',
    login(){
        return 'Login bem Sucedido'
    }
} 


const authorInterface: AuthorInterface & UsuarioInterface = { // agora essa const author tem todas as propriedades do Author e de Usuario
    nome: 'Simas',
    email: 'simas@',
    livros: ['Pequeno', 'Principe'],
    login(){
        return 'Login bem Sucedido'
    }
}

console.log(usuarioInterface);

