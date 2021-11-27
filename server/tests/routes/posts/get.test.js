/* eslint-disable no-undef */
const getPost = require('../../../src/routes/posts/get');
const postModel = require('../../../src/lib/mongo');
const httpMocks = require('node-mocks-http');
const singlePostMock = require('../../mocked-data/single-post.json');
const manyPostsMock = require('../../mocked-data/many-posts.json');

postModel.findById = jest.fn();

let req;
let res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe('getPost :id', () => {
  it('Should be a function', () => {
    expect(typeof getPost).toBe('function');
  });

  it('Should find by :id from request params, and sent document back 200', async () => {
    req.params.id = 'someid';
    postModel.findById.mockReturnValue(singlePostMock);

    await getPost(req, res);

    expect(postModel.findById).toBeCalledWith('someid');
    // Makes sure response has been sent() over
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(200);
    // Compares values to be equal despite memory address toStrictEqual
    expect(res._getJSONData()).toStrictEqual(singlePostMock);
  });

  it('Should return 404 when :id is not present in database', async () => {
    req.params.id = 'not_a_panda';
    postModel.findById.mockReturnValue(null);

    await getPost(req, res);
    expect(postModel.findById).toBeCalledWith('not_a_panda');
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(404);
  });

  it('Should return 500 in case promise returns an error', async () => {
    req.params.id = 'someid';
    const errorMessage = {message: 'Panda is offline'};
    const rejectedPromiseFromMongoose = Promise.reject(errorMessage);
    postModel.findById.mockReturnValue(rejectedPromiseFromMongoose);

    await getPost(req, res);

    expect(res.statusCode).toBe(500);
  });
});

describe('getPost', () => {
  it('Should return an array of objects with 200 code', async () => {
    // Testing chained mocks is a bit more challenging:
    // https://medium.com/@tehvicke/integration-and-unit-testing-with-jest-in-nodejs-and-mongoose-bd41c61c9fbc
    // https://stackoverflow.com/questions/54561550/jest-mocking-spying-on-mongoose-chained-find-sort-limit-skip-methods
    // https://stackoverflow.com/questions/56249372/how-to-mock-mongoose-chaining-query-with-jest

    postModel.find = jest.fn().mockImplementationOnce(() => ({
      limit: jest
        .fn()
        .mockImplementationOnce(() => ({
          skip: jest.fn().mockReturnValue(manyPostsMock),
        })),
    }));

    await getPost(req, res);

    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual(manyPostsMock);
  });

  it('Should return 404 in case no documents are available in database', async () => {
    postModel.find = jest.fn().mockImplementationOnce(() => ({
      limit: jest
        .fn()
        .mockImplementationOnce(() => ({
          skip: jest.fn().mockReturnValue(null),
        })),
    }));

    await getPost(req, res);

    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(404);
  });

  it('Should return 500 in case promise returns an error', async () => {
    const errorMessage = {message: 'Panda is offline'};
    const rejectedPromiseFromMongoose = Promise.reject(errorMessage);

    postModel.find = jest.fn().mockImplementationOnce(() => ({
      limit: jest
        .fn()
        .mockImplementationOnce(() => ({
          skip: jest.fn().mockReturnValue(rejectedPromiseFromMongoose),
        })),
    }));

    await getPost(req, res);

    expect(res.statusCode).toBe(500);
  });
});
