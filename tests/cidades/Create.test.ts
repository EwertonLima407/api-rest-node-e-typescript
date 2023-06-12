import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Create', () => {

  it('Cria registro', async () => {
    
    const reposta1 = await testServer
      .post('/cidades')
      .send({
        nome: 'Olinda'
      });
      
    expect(reposta1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof reposta1.body).toEqual('number');
    
  });

  it('Valida o tamanho do nome', async () => {

    const reposta2 = await testServer
      .post('/cidades')
      .send({
        nome: 'Ol'
      });
      
    expect(reposta2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(reposta2.body).toHaveProperty('errors.body.nome');
 
 
  });
  
});