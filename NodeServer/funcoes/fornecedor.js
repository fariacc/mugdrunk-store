module.exports = {
   ListarFornecedores: function (execSQLQuery, res){
       var sql = "select * from Fornecedor";

       return execSQLQuery(sql,res);
   },InserirFornecedor: function (execSQLQuery, res, dado){
       var sql = "insert into Fornecedor (NomeSocial, CNPJ, EnderecoCad, Telefone, Email, Ativo) values('"+
           dado.NomeSocial+"','"+dado.CNPJ+"','"+dado.EnderecoCad+"','"+dado.Telefone+"','"+dado.Email+"','"+dado.Ativo+"')";

       return execSQLQuery(sql,res);
   },RemoverFornecedor: function (execSQLQuery, res, dado){
        var sql = "delete from Fornecedor where idFornecedor = '"+dado.IdFornecedor+"'";

        return execSQLQuery(sql,res);
    },EditarFornecedor: function (execSQLQuery, res, dado){
        var sql = "update Fornecedor set NomeSocial = '"+dado.NomeSocial+"', CNPJ = '"+dado.CNPJ+"', EnderecoCad = '"+dado.EnderecoCad+"', Telefone = '"+dado.Telefone+
            "', Email = '"+dado.Email+"', Ativo = '"+dado.Ativo+"' WHERE IdFornecedor = '"+dado.IdFornecedor+"'";

        return execSQLQuery(sql,res);
    },BloquearFornecedor: function (execSQLQuery, res, dado){
        // dado.Ativo = dado.Ativo == 1 ? 0 : 1;
        var sql = "update Fornecedor set Ativo = '"+dado.Ativo+"' where IdFornecedor = '"+dado.fornecedor.idFornecedor+"'";

        return execSQLQuery(sql,res);
    }
};
