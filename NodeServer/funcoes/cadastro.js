module.exports = {
    ListarCadastros: function (execSQLQuery, res){
        var sql = "select * from Cadastro";

        return execSQLQuery(sql,res);
    },InserirCadastro: function (execSQLQuery, res, dado){
        var sql = "insert into Cadastro (NomeCompleto, DataNascimento, CPF, EnderecoCad, Telefone, Email, Sexo, Senha, Ativo, Permissao) values('"
                  +dado.NomeCompleto+"','"+dado.DataNascimento+"','"+dado.CPF+"','"+dado.EnderecoCad+"','"+dado.Telefone+"','"+dado.Email+"','"+dado.Sexo+"', '"+dado.Senha+"', '"+dado.Ativo+"', '"+dado.Permissao+"')";

        return execSQLQuery(sql,res);
    },RemoverCadastro: function (execSQLQuery, res, dado){
        var sql = "delete from Cadastro where IdCadastro = '"+dado.IdCadastro+"'";

        return execSQLQuery(sql, res);
    },EditarCadastro: function (execSQLQuery, res, dado){
        var sql = "update Cadastro set NomeCompleto = '"+dado.NomeCompleto+"', DataNascimento = '"+dado.DataNascimento+"', EnderecoCad = '"+dado.EnderecoCad
                    +"', CPF = '"+dado.CPF+"', Telefone = '"+dado.Telefone+"', Email = '"+dado.Email+"', Senha = '"+dado.Senha
                    +"', Sexo = '"+dado.Sexo+"', Ativo = '"+dado.Ativo+"', Permissao = '"+dado.Permissao+"' WHERE CPF = '"+dado.CPF+"'";

        return execSQLQuery(sql,res);
    },SelecionarCadastro: function (execSQLQuery, res, dado){
        var sql = "select IdCadastro, CPF, Senha, NomeCompleto, Permissao from Cadastro where CPF = '"+ dado.CPF+"' AND Senha = '"+ dado.Senha+"'";

        return execSQLQuery(sql,res);
    },BloquearCadastro: function (execSQLQuery, res, dado){
        // dado.Ativo = dado.Ativo == '1' ? '0' : '1'; //Acho que não precisa disso aqui

        var sql = "update Cadastro set Ativo = '"+dado.Ativo+"' where IdCadastro = '"+dado.usuario.IdCadastro+"'";

        return execSQLQuery(sql,res);
    }
};
