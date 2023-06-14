import { create } from './../../src/server/controllers/cidades/Create';
import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Get by id', () => {

  it('Busca registro por id', async () => {
    
    const resp = await testServer
      .post('/cidades')
      .send({
        nome: 'Recife'
      });
      
    expect(resp.statusCode).toEqual(StatusCodes.CREATED);
    
    const resBuscada = await testServer
      .get(`/cidades/${resp.body}`)
      .send();
    
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });

   it('Tenta buscar registro que não existe', async () => {

   const resp1 = await testServer
      .get('/cidades/9999')
      .send();
      
    expect(resp1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(resp1.body).toHaveProperty('errors.default');
 
 
  });
   
});