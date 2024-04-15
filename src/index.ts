let idade: number = 5;
const nome: string = 'Alexandre';
const isValid: boolean = true;
const idk: any = 5; // any, posso atribuir qualquer valor depois da declaração 

const meuArray: number[] = [1, 2, 3, 4]; // delcarando arrays e seus tipos que esse array pode aceitar
const verdadeiroOuFalso: boolean[] = [true, false];
const nomes: string[] = ['Alexandre', 'José', 'Maria'];

// idade = 'ola'; // como na linha 1 a variavel foi definida como number não é possivel colocar outro tipo de dados como uma String

// Tupla
const pessoa: [number, string] = [23, 'Alexandre']; // temos que respeitar a respeito de qual tipo primitivos vem primeiro, se não respeitar vai dar erro

// lista de tuplas
const pessoas: [number, string][] = [ [1, 'Alexandre'], [2, 'João'],];

// Intersections
const produtoId: string | number = '1' // definido quais tipos de valores eu quero, texto ou número

// Enum
enum Direction {
    Up = 1,
    down = 2,
    Left = 'Esquerda'
}

const direction = Direction.Up

// Type Assertions
const produto: any = 'Boné'; // mudando o tipo de dado

// let itemId =  produto as string; <= Uma forma de fazer o type assertions

let itemId = <string>produto; // <= Uma forma mas moderna de fazer o type assertions


console.log(itemId) 