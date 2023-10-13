import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

class AlunoServices {
    contructor() {}

    async criarAluno() {
        try{
            const aluno = await Prisma.aluno.create({
                data:{
                    nomeAluno: "Pedro",
                    matricula: 10,
                    email:"pedro@email.com",
                    nomeGrupo:"Baile"
                }
            })
        }catch(error) {
            console.log(error);
        }
    }


}

export default AlunoServices