module.exports = {
    getLogAcesso: function (execSQLQuery, res){
        var sql = "select * from LogAcessos";
        return execSQLQuery(sql,res);
    },
    InserirLogAcesso: function (execSQLQuery, res, dado){
        var sql = "insert into LogAcessos(IdCadastro, DataAcesso) VALUES ("
            +dado.IdCadastro+", now())";
        return execSQLQuery(sql,res);
    },
    deleteLogAcesso: function (execSQLQuery, res){
        var sql = "delete from LogAcessos";
        return execSQLQuery(sql,res);
    },
};
