import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Delete by id', () => {

  it('Apaga registro', async () => {
    
    const resp = await testServer
      .post('/cidades')
      .send({ nome: 'Recife'});
      
    expect(resp.statusCode).toEqual (StatusCodes.CREATED);
    //expect(typeof resp).toEqual('string');
    
    const resApagada = await testServer
      .delete(`/cidades/${resp.body}`)
      .send();
    
    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)
  });

  it('Tenta apagar registro inexistente', async () => {

    const resp1 = await testServer
      .delete('/cidades/9999')
      .send();
      
    expect(resp1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(resp1.body).toHaveProperty('errors.default');
 
 
  });
   
});