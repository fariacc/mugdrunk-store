from flask import Flask, jsonify
from flask_cors import CORS
import pymysql

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# sanity check route
@app.route('/ping', methods=['GET'])

def InserirCaneca():

def RemoverCaneca():

def EditarCaneca():

def ListarCanecasMenosVendas(): /*Publicar primeiro canecas com menos vendas*/

def ListarTodasCanecas():

def InserirUsuario():

def BLoquearUsuario():

def EditarUsuario():

def ListarUsuarios():

def InserirCupom():

def EditarCupom():

def ListarCupons():

def BuscarCupom():

def UsarCupom():

def InserirLogAcesso():

def ListarLogAcessos():

def InserirLogCompra():

def ListarLogCompras():

def CarinhoCompras(): /*vamos verificar*/

def InserirFornecedor():

def RemoverFornecedor():

def EditarFornecedor():

def BloquearFornecedor():

def ListarFornecedores():



def main():
    con = pymysql.connect(host='200.134.10.221',
                          user='darthvader',
                          password='@darthvader#',
                          db='darthvader')
    cur = con.cursor()

    try:
        insert_pessoa_query = """ INSERT INTO darthvader.CupomDesconto (`IdCupom`,
                                                        `Codigo`,
                                                        `Valor`,
                                                        `Qtd`)
                              VALUES('1','Cupom123','50','12')"""#(info,info,info,info)
        cur.execute(insert_pessoa_query)
    except Exception as e:
        print("Erro ao inserir: ", e)
    else:
        print("Inserido com sucesso!\n")
        con.commit()

    app.run()

if __name__ == '__main__':
    main()
