import { alterarImagem, inserirFilme } from '../repository/filmeRepository.js';

import multer from 'multer'
import { Router } from 'express'
const server = Router();

server.post('/filme', async (req, resp) =>{
    try{
        const novoFilme = req.body;

        if(!novoFilme.nome)
            throw new Error('Nome do filme é obrigatório!');

            if(!novoFilme.sinopse)
            throw new Error('Sinopse do filme é obrigatório!');
            
            if(novoFilme.avaliaçao == undefined || novoFilme.avaliaçao<0)
            throw new Error('Avaliaçao do filme é obrigatória!');

            if(!novoFilme.lancamento)
            throw new Error('Lancamento do filme é obrigatório!');

            if(!novoFilme.disponivel)
            throw new Error('Campo Disponivel do filme é obrigatória!');


            if(!novoFilme.usuario)
            throw new Error('usuario nao logado!');



        const filmeInserido = await inserirFilme(novoFilme);

        resp.send(filmeInserido);
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put ('/filme/:id/imagem', async (req, resp) =>{
    try {
        const {id} = req.params;

        const resp = await alterarImagem()

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

    })

export default server;