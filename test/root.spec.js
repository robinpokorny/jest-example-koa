const app = require('../server/index');
const request = require('supertest');

describe('root route', () => {
  test('with item-level assertions', async () => {
    const response = await request(app.callback()).get('/');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual('Sending some JSON');
    expect(Object.keys(response.body.person)).toEqual(
      expect.arrayContaining(['name', 'lastname', 'role', 'age'])
    );
  });

  test('with object equality', async () => {
    const response = await request(app.callback()).get('/');

    expect(response.body).toEqual(
      expect.objectContaining({
        person: {
          name: expect.anything(),
          lastname: expect.any(String),
          role: expect.stringMatching(/^Brewery/),
          age: expect.any(Number)
        }
      })
    );
  });

  test('with object equality', async () => {
    const response = await request(app.callback()).get('/');

    expect(response.body).toMatchSnapshot();
  });
});
