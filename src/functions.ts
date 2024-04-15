const soma = (x: number, y: number): string | number => { // passando qual é o retorno da minha função
    return (x + y).toString();
}

soma(1, '2'); // agora os params que passei como o tipo number eles só vao ser aceitos do tipo que foi definido

const log = (mensage: string): void => { // void é uma função que nao retorna nada, no tipo de saida da função pode ser qualquer tipo
    console.log(mensage);

    // return 2; // e se eu tentar colocar a palavra return como ela é void uma função que não retorna nada o meu código vai dar erro
};

/* --------------------------------------------------------------*/
// Interface com functions

interface MathFunc {
    (x: number, y: number): number; // toda função que implementar essa interface precisa return os parametros e o return precisa tambem ser um number
}

const somaTwo: MathFunc = (x: number, y: number) => {
    return x + y;
}

console.log(somaTwo(1, 2));