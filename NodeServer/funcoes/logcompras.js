module.exports = {
    getLogCompras: function (execSQLQuery, res){
        var sql = "select * from LogCompras";
        return execSQLQuery(sql,res);
    },
    InserirLogCompras: function (execSQLQuery, res, dado){
    	var sql = "insert into LogCompras(idCadastro, PrecoCompra, DataCompra, NumeroCartao, CodigoCartao, NomeCartao, ValidadeCartao, CEP) VALUES ("+dado.IdCadastro+",'"
    	+dado.PrecoCompra+"',now(),'"+dado.cartao.NumeroCartao+"','"+dado.cartao.CodigoCartao+"', '"+dado.cartao.NomeCartao+"', '"
      +dado.cartao.ValidadeCartao+"',"+dado.CEP+")";
          console.log(sql);
          return execSQLQuery(sql,res);
    }
};
