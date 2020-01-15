module.exports = {
      InserirUsuario: function (execSQLQuery, res, dado){
        var sql = "insert into Usuario (Login, Senha, Email, Ativo, Permissao) values('"
                  +dado.Login+"','"+dado.Senha+"','"+dado.Email+"','"+dado.Ativo+"','"+dado.Permissao+"')";
        return execSQLQuery(sql,res);

    },ListarUsuarios: function (execSQLQuery, res){
        var sql = "select * from Usuario";

        return execSQLQuery(sql,res);
    },RemoverUsuario: function (execSQLQuery, res, Login){
        var sql = "delete from Usuario where Login = "+ Login;

        return execSQLQuery(sql,res);
    },EditarUsuario: function (execSQLQuery, res, dado){
        var sql = "update Usuario set Login = "+dado.Login+", Senha = "+dado.Senha+", Email = "+dado.Email
                    +", Ativo = "+dado.Ativo+", Permissao = "+dado.Permissao+" WHERE IdUsuario = "+dado.id+"'";

        return execSQLQuery(sql,res);
    },SelecionarUsuario: function (execSQLQuery, res, Login){
        var sql = "select * from Usuario where Login = "+ Login;

        return execSQLQuery(sql,res);
    },BloquearUsuario: function (execSQLQuery, res, dado){
        dado.Ativo = dado.Ativo == 1 ? 0 : 1;

        var sql = "update Usuario set Ativo = "+dado.Ativo+" WHERE IdUsuario = "+dado.id;

        return execSQLQuery(sql,res);
    }
};
