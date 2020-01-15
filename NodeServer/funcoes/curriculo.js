module.exports = {
   ListarCurriculo: function (execSQLQuery, res){
       var sql = "select * from Curriculo";

       return execSQLQuery(sql,res);
   },InserirCurriculo: function (execSQLQuery, res, dado){
       var sql = "insert into Curriculo (IdCadastro, Arquivo) values('"+
           dado.IdCadastro+"','"+dado.Arquivo+"')";

       return execSQLQuery(sql,res);
   },RemoverCurriculo: function (execSQLQuery, res, dado){
        var sql = "delete from Curriculo where IdCadastro = "+dado.IdCadastro+"";

        return execSQLQuery(sql,res);
    }
};
