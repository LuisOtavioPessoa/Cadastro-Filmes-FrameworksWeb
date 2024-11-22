import FilmeModel from "../model/Filme.js";

export default class FilmeController{
    static async findAll(request, response){
        const filmes = await FilmeModel.findAll();

        response.status(200).json(filmes);
    }

    //Método CRIAR
    static async criar(request, response){
        const {titulo, ator, faixaEtaria, genero} = request.body;

        const filme = {
            titulo, ator, faixaEtaria, genero
        };

        try {
            const FilmeCriado = await FilmeModel.create(filme);
            response.status(201).json({filme: FilmeCriado});
        }catch (error){
            response.status(400).json({message: "Erro ao criar o filme.", error: error.message});
        }
    }

    //Método ATUALIZAR 
    static async atualizar(request, response){
        const {id} = request.params;
        const {titulo, ator, faixaEtaria, genero} = request.body;

        try{
            //Verifica se o filme existe no BD
            const FilmeEncontrado = await FilmeModel.findByPk(id);

            if(!FilmeEncontrado){
                response.status(404).json({message: "Filme não encontrado"});
                return;
            }

            //Atualiza o filme no BD
            await FilmeModel.update(
                {titulo, ator, faixaEtaria, genero},//Dados a serem atualizados
                {where: {id: id} }//Condição para encontrar o registro correto
            );

             // Busca o registro atualizado para enviar na resposta
            const FilmeAtualizado = await FilmeModel.findByPk(id);

            response.status(200).json({ filme: FilmeAtualizado});
        }catch(error){
            response.status(500).json({message: "Erro ao atualizar o filme", error});
        }
    }

    //Método DELETAR
    static async deletar (request, response){
        const {id} = request.params;

        if (!id || isNaN(id)){
            return response.status(400).json({ message: "ID inválido."});
        }

        try{
            const FilmeEncontrado = await FilmeModel.findByPk(id);

            if(!FilmeEncontrado){
                response.status(404).json({message: "Filme não encontrado"});
                return;  
            }

            //Deleta o Filme do BD
            await FilmeModel.destroy({ where: { id: id} });

            response.status(200).json({message: "Filme deletado com sucesso."});
        }catch (error){
            response.status(500).json({message: "Erro ao deletar o filme."});
        }
    }

    // Método ENCONTRARPORID
    static async findById (request, response){
        const {id} = request.params;

        try{
            const filme = await FilmeModel.findByPk(id);

            if(!filme){
                response.status(404).json({message: "Filme não encontrado."});
                return;
            }

            response.status(200).json(filme);
        }catch(error){
            response.status(500).json({message: "Erro ao buscar o filme.", error});
        }
    }
}