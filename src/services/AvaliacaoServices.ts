import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

class AvaliacaoServices {
    contructor() {}

    async criarAvaliacao() {
        try{
            const avaliacao = await Prisma.avaliacao.create({
                data:{
                    avaliador: "Pedro",
                    matriculaAluno: 10,
                    grupoAvaliado:"Baile",
                    notaApresentacao:2,
                    notaExecucao:2,
                    notaImpactoSocial:1,
                    notaOriginalidade:1.5,
                    notaViabilidade:1


                }
            })
        }catch(error) {
            console.log(error);
        }
    }


}

export default AvaliacaoServices