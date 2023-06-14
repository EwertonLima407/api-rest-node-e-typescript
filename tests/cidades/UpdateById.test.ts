import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - Update by id', () => {

  it('Atualiza registro', async () => {
    
    const resp = await testServer
      .post('/cidades')
      .send({ nome: 'Recife'});
      
    expect(resp.statusCode).toEqual(StatusCodes.CREATED);
    //expect(typeof resp).toEqual('number');

    const reAtualizada = await testServer
      .put(`/cidades/${resp.body}`)
      .send({ nome: 'Rec' });
    
    expect(reAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

   it('Tenta atualizar um registro que não existe', async () => {

    const reposta2 = await testServer
      .put('/cidades/9999')
      .send({
        nome: 'Olinda'
      });
      
    expect(reposta2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(reposta2.body).toHaveProperty('errors.default');
 
 
  });
   
});