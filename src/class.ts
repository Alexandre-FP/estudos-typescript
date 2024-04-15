interface IPessoa {
    id: number;
    nome: string;
    senha: string;
    login(): string | number;
}

class Pessoa implements IPessoa { // implements palavra reservada do typsrcipt para implmentar a minha interface
    id: number;
    nome: string;
    senha: string;

    constructor(id: number, nome: string, senha: string){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
    }

    login(): string | number { // tipando os methods da minha class
        return `Seu id é ${this.id} seu nome de usário é ${this.nome} seua senha está criptografada ${this.senha}`
    }
}

const p = new Pessoa(1, 'Alexandre', '8277e0910d750195b448797616e091ad');
console.log(p.login());

