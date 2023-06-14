import { testServer } from './../jest.setup';
import { StatusCodes } from "http-status-codes";



describe('Cidades - Get All', () => {
  
  it('Buscar todos os Registros', async () => {
    
    const resp1 = await testServer
      .post('/cidades')
      .send({ nome: "Recife" })
    
    
    expect(resp1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resBuscada = await testServer
      .get('/cidades')
      .send();
    
    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
    
    
  });
  
});