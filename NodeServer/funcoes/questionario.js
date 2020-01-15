module.exports = {
    getQuestionario: function (execSQLQuery, res){
        var sql = "select * from AvaliacaoLoja";

        return execSQLQuery(sql,res);
    },
    getQuestoes: function (execSQLQuery, res){
        var sql = "select * from PerguntasAvaliacaiLoja WHERE IdAvaliacaoLoja = 1";

        return execSQLQuery(sql,res);
    },
    getRespostas: function (execSQLQuery, res){
        var sql = "select * from RespostasAvaliacaoLoja";

        return execSQLQuery(sql,res);
    },
    CriarQuestionario: function(execSQLQuery, res, dado){
      var sql = "insert into AvaliacaoLoja (NomeAvaliacao) values('"
                +dado.NomeAvaliacao+"')";

      return execSQLQuery(sql,res);
    },
    InserirQuestoesQuestionario: function (execSQLQuery, res, dado){
        var sql = "insert into RespostasAvaliacaoLoja (RespostasAvaliacaoLoja, IdPerguntasAvaliacaoLoja, IdUsuario) values('"
                  +dado.Resposta+"','"+dado.IdPergunta+"','"+dado.IdUsuario+"')";

        return execSQLQuery(sql,res);
    },
    InserirRespostaQuestionario: function (execSQLQuery, res, dado){
        var sql = "insert into RespostasAvaliacaoLoja (IdAvaliacaoLoja, IdUsuario, questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao9, questao10 ) values('"
                  +dado.idAvaliacao+"','"+dado.idUsuario+"','"+dado.questao1+"','"+dado.questao2+"','"+dado.questao3+"','"+dado.questao4+"','"+dado.questao5+"','"+dado.questao6+"','"+dado.questao7+"','"+dado.questao8+"','"+dado.questao9+"','"+dado.questao10+"')";

        return execSQLQuery(sql,res);
    },
};
