import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Get by id', () => {

  it('Testa o get by id', async () => {
    
    const resp = await testServer
      .get('/cidades/:id')
      .send({
        id: 1
      });
      
    expect(resp.statusCode).toEqual(StatusCodes.GONE);
    expect(typeof resp).toEqual('number');
    
  });

 /*  it('Valida o tamanho do nome', async () => {

    const reposta2 = await testServer
      .post('/cidades')
      .send({
        nome: 'Ol'
      });
      
    expect(reposta2.statusCode).toEqual(StatusCodes.CREATED);
    expect(reposta2.body).toHaveProperty('errors.body.nome');
 
 
  });
   */
});