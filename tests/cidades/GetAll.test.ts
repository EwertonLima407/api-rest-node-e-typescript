import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Get All', () => {

  it('Testa o get All', async () => {
    
    const resp1 = await testServer
      .get('/cidades/:id')
      
      
    expect(resp1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(typeof resp1.body).toEqual('object');
    
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