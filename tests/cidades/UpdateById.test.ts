import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - UpdateById', () => {
  let accessToken = '';
  beforeAll(async () => {
    const email = 'updatebyid-cidades@gmail.com';
    await testServer.post('/cadastrar').send({ email, senha: '123456', nome: 'Teste' });
    const signInRes = await testServer.post('/entrar').send({ email, senha: '123456' });
    
    accessToken = signInRes.body.accessToken;
  });
  
  it('Tenta atualizar sem usar token de autenticação', async () => {
    const res1 = await testServer
      .put('/cidades/1')
      .send({ nome: 'Teste' });
    
    expect(res1.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(res1.body).toHaveProperty('errors.default');
  });
  
  it('Atualiza registro', async () => {    
    const resp = await testServer
      .post('/cidades')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Recife'});
    
    expect(resp.statusCode).toEqual(StatusCodes.CREATED);
    
    
    const reAtualizada = await testServer
      .put(`/cidades/${resp.body}`)
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Itamaracá' });
    
    expect(reAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  
  it('Tenta atualizar um registro que não existe', async () => {
    const resp1 = await testServer
      .put('/cidades/99999')
      .set({ Authorization: `Bearer ${accessToken}` })
      .send({ nome: 'Olinda' });
    
    expect(resp1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(resp1.body).toHaveProperty('erros.default');   
    
  });  
});