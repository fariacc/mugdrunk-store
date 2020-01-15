var express = require("express");
const bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
var mysql = require('mysql');
var cupom = require("./funcoes/cupom");
var logcompras = require("./funcoes/logcompras");
var usuario = require("./funcoes/usuario");
var cadastro = require("./funcoes/cadastro");
var canecas = require("./funcoes/canecas");
var fornecedor = require("./funcoes/fornecedor");
var logacessos = require("./funcoes/logacessos");
var questionario = require("./funcoes/questionario");

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "200.134.10.221",
    user: "darthvader",
    password: "@darthvader#",
    database: "darthvader"
});


//definindo as rotas
app.use(cors({origin: '*'}));
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
// router.post('/', (req, res) => res.send({ message: 'Funcionando!' }));
app.use('/', router);

// Ações Cadastro
app.post("/InserirCadastro", cors(), function(req, res, next) {
  cadastro.InserirCadastro(execSQLQuery, res, req.body);
});
app.post("/login", cors(), function(req, res, next) {
  cadastro.SelecionarCadastro(execSQLQuery, res, req.body);
});
app.get("/ListarCadastros", cors(), (req, res, next) => {
  cadastro.ListarCadastros(execSQLQuery, res);
});
app.post("/RemoverCadastro", cors(), (req, res, next) => {
  cadastro.RemoverCadastro(execSQLQuery, res, req.body);
});
app.put("/EditarCadastro", cors(), (req, res, next) => {
  cadastro.EditarCadastro(execSQLQuery, res, req.body);
});
app.put("/BloquearCadastro", cors(), (req, res, next) => {
  cadastro.BloquearCadastro(execSQLQuery, res, req.body);
});

// Ações Cupom
app.post("/AplicarCupom", cors(), function(req, res, next) {
  cupom.AplicarCupom(execSQLQuery, res, req.body);
});
app.post("/InserirCupom", cors(), function(req, res, next) {
  cupom.InserirCupom(execSQLQuery, res, req.body);
});
app.put("/UsarCupom", cors(), function(req, res, next) {
  cupom.UsarCupom(execSQLQuery, res, req.body);
});
app.get("/ListarCupons", cors(), (req, res, next) => {
  cupom.ListarCupons(execSQLQuery, res);
});
app.put("/EditarCupom", cors(), (req, res, next) => {
  cupom.EditarCupom(execSQLQuery, res, req.body);
});
app.post("/RemoverCupom", cors(), (req, res, next) => {
  cupom.RemoverCupom(execSQLQuery, res, req.body);
});

// Funções logCompras
app.post("/InserirLogCompras", cors(), function(req, res, next) {
    logcompras.InserirLogCompras(execSQLQuery, res, req.body);
});
app.get("/getLogCompras", cors(), (req, res, next) => {
    logcompras.getLogCompras(execSQLQuery, res);
});

// Funções logAcessos
app.get("/getLogAcessos", cors(), function(req, res, next) {
    logacessos.getLogAcesso(execSQLQuery, res, req);
});
app.post("/InserirLogAcessos", cors(), (req, res, next) => {
    logacessos.InserirLogAcesso(execSQLQuery,res, req.body);
});
app.post("/deleteLogAcesso", cors(), (req, res, next) => {
    logacessos.deleteLogAcesso(execSQLQuery,res, req.body);
});

// funções canecas/produto/estoque
app.get("/getCanecas", cors(), function(req, res, next) {
    canecas.getCanecas(execSQLQuery, res);
});

app.get("/getCanecasPromo", cors(), function(req, res, next) {
    canecas.getCanecasPromo(execSQLQuery, res);
});

app.post("/InserirCaneca", cors(), function(req, res, next) {
  canecas.InserirCaneca(execSQLQuery, res, req.body);
});

app.post("/RemoverCaneca", cors(), (req, res, next) => {
  canecas.RemoverCaneca(execSQLQuery, res, req.body);
});

app.put("/EditarCaneca", cors(), (req, res, next) => {
  canecas.EditarCaneca(execSQLQuery, res, req.body);
});

app.put("/DiminuirEstoque", cors(), (req, res, next) => {
  canecas.DiminuirEstoque(execSQLQuery, res, req.body);
});

// app.patch("/cupom/UsarCupom/:IdCupom?", cors(), (req, res, next) => {
//   let filter = '';
//   if(req.params.IdCupom) filter = ' WHERE IdCupom=' + parseInt(req.params.IdCupom);
//   cupom.UsarCupom(execSQLQuery, res, filter);
// });

app.post("/usuario/inserir", cors(), (req, res, next) => {//aqui você vai chamar a rota que criou lá em cima
  usuario.insertUsuario(execSQLQuery, res);
});//aqui tu coloca a função e chama o arquivo que criou as funções

// app.get("/fornecedores", cors(), (req, res, next) => {
//   logcompras.ListarFornecedores(execSQLQuery, res);
// });

// funções Fornecedores
app.get("/ListarFornecedores", cors(), (req, res, next) => {
  fornecedor.ListarFornecedores(execSQLQuery, res);
});

app.post("/InserirFornecedor", cors(), (req, res, next) => {
  fornecedor.InserirFornecedor(execSQLQuery, res, req.body);
});

app.post("/RemoverFornecedor", cors(), (req, res, next) => {
  fornecedor.RemoverFornecedor(execSQLQuery, res, req.body);
});

app.put("/EditarFornecedor", cors(), (req, res, next) => {
  fornecedor.EditarFornecedor(execSQLQuery, res, req.body);
});
app.put("/BloquearFornecedor", cors(), (req, res, next) => {
  fornecedor.BloquearFornecedor(execSQLQuery, res, req.body);
});

// funções Questionarios
app.get("/questionario", cors(), (req, res, next) => {
  questionario.getQuestionario(execSQLQuery, res);
});

app.get("/questionario/questoes", cors(), (req, res, next) => {
  questionario.getQuestoes(execSQLQuery, res);
});

app.get("/questionario/respostas", cors(), (req, res, next) => {
  questionario.getRespostas(execSQLQuery, res);
});

app.post("/questionario/criaQuestionario", cors(), (req, res, next) => {
  questionario.CriarQuestionario(execSQLQuery, res);
});

app.post("/questionario/inserirRespostaQuestionario", cors(), (req, res, next) => {
  questionario.InserirRespostaQuestionario(execSQLQuery, res, req.body);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

function execSQLQuery(sqlQry, res){

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query(sqlQry, function (error, results, fields) {
            if (error)
                res.json(error);
            else
                res.json(results);
            console.log('executou!');
            connection.release();
        });
    });
}
