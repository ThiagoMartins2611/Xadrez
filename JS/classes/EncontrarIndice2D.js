export class EncontrarIndice2D{

    constructor(){

    }

    encontrarIndice(array2D, valor) {
        for (let i = 0; i < array2D.length; i++) {
            for (let j = 0; j < array2D[i].length; j++) {
                if (array2D[i][j] === valor) {
                    return [i, j];  // Retorna os índices do sub-array (i, j)
                }
            }
        }
        return -1;  // Retorna -1 se não encontrar
    }
}
