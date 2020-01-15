module.exports = {
   ListarCupons: function (execSQLQuery, res){
       var sql = "select * from CupomDesconto";

       return execSQLQuery(sql,res);
     },InserirCupom: function (execSQLQuery, res, dado){
       var sql = "insert into CupomDesconto (Codigo, Valor, Qtd) values('"+
           dado.Codigo+"',"+dado.Valor+","+dado.Qtd+")";

       return execSQLQuery(sql,res);
     },UsarCupom: function (execSQLQuery, res, dado){
       var sql = "update CupomDesconto set Qtd = Qtd-1 where Codigo = '"+dado.Codigo+"'";

        return execSQLQuery(sql,res);
     },
     AplicarCupom: function (execSQLQuery, res, dado){
        var sql = "select * from CupomDesconto where Codigo = + '"+dado.Codigo+"'";

        return execSQLQuery(sql,res);
     },
     EditarCupom: function (execSQLQuery, res, dado){
        var sql = "update CupomDesconto set Codigo = '"+dado.Codigo+"', Valor = '"+dado.Valor+"', Qtd = '"+dado.Qtd+"' WHERE IdCupom = "+dado.IdCupom;

        return execSQLQuery(sql,res);
    },
    RemoverCupom: function (execSQLQuery, res, dado){
        var sql = "delete from CupomDesconto where IdCupom = "+ dado.IdCupom;

        return execSQLQuery(sql,res);
    },
};
