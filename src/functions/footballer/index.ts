import { handlerPath } from '@libs/handler-resolver';

export const createFootballer = {
  handler: `${handlerPath(__dirname)}/handler.createFootballerApi`,
  events: [
      {
          http: {
              method: 'put',
              path: 'api/footballer',
          },
      },
  ],
};

export const readFootballer = {
  handler: `${handlerPath(__dirname)}/handler.readFootballerApi`,
  events: [
      {
          http: {
              method: 'get',
              path: 'api/footballer/{id?}',
          },
      },
  ],
};

export const updateFootballer = {
  handler: `${handlerPath(__dirname)}/handler.updateFootballerApi`,
  events: [
      {
          http: {
              method: 'patch',
              path: 'api/footballer/{id}',
          },
      },
  ],
};

export const deleteFootballer = {
  handler: `${handlerPath(__dirname)}/handler.deleteFootballerApi`,
  events: [
      {
          http: {
              method: 'delete',
              path: 'api/footballer/{id}',
          },
      },
  ],
};

