const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should respond with a JSON message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
});