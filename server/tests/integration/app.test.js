/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/index');
const postModel = require('../../src/lib/mongo');
const singlePostMock = require('../mocked-data/single-post.json');

const endPointUrl = '/posts';
postModel.findById = jest.fn();

describe(endPointUrl, () => {
  it('GET ' + endPointUrl, async () => {
    postModel.findById.mockReturnValue(singlePostMock);

    const response = await request(app)
      .get(endPointUrl + '/someid')
      .send();
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('panda does a backflip');
  });
});
