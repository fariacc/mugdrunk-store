module.exports = {
    getCanecas: function (execSQLQuery, res){
        var sql = "select * from Caneca";
        return execSQLQuery(sql,res);
    },
    getCanecasPromo: function (execSQLQuery, res){
        var sql = "select c1.*, c2.PrecoPromo as PrecoPromo " +
            "from Caneca c1 left join (select IdProduto, Preco*0.9 as PrecoPromo from Caneca where Qtd > 0 order by Qtd desc limit 5) c2 on c1.IdProduto in (c2.IdProduto) " +
            "where Qtd > 0;";
        return execSQLQuery(sql,res);
    },
    InserirCaneca: function (execSQLQuery, res, dado){
        var sql = "insert into Caneca (Preco, Cor, Estampa, Descricao, Marca, Qtd) values(" +
            dado.Preco+",'"+dado.Cor+"','"+dado.Estampa+"','"+dado.Descricao+"','"+dado.Marca+"',"+dado.Qtd+")";

        return execSQLQuery(sql,res);
    },
    RemoverCaneca: function (execSQLQuery, res, dado){
        var sql = "delete from Caneca where IdProduto = "+ dado.IdProduto;

        return execSQLQuery(sql,res);
    },
    EditarCaneca: function (execSQLQuery, res, dado){
        var sql = "update Caneca set Preco = "+dado.Preco+", Cor = '"+dado.Cor+"', Estampa = '"+dado.Estampa+"', Descricao = '"+dado.Descricao+
            "', Marca = '"+dado.Marca+"', Qtd = "+dado.Qtd+" WHERE IdProduto = "+dado.IdProduto;

        return execSQLQuery(sql,res);
    },
    DiminuirEstoque: function (execSQLQuery, res, dado){
        var sql = "update Caneca set Qtd = Qtd - 1 WHERE IdProduto = "+dado.IdProduto;

        return execSQLQuery(sql,res);
    }
};
