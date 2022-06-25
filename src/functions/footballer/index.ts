import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export const helloFootballer = {
  handler: `${handlerPath(__dirname)}/handler.helloFootballerApi`,
  events: [
    {
      http: {
        method: 'post',
        path: 'api/helloFootballer',
        cors: true,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    }
  ],
};
export const howdyFootballer = {
  handler: `${handlerPath(__dirname)}/handler.howdyFootballerApi`,
  events: [
      {
          http: {
              method: 'post',
              path: 'api/howdyFootballer',
          },
      },
  ],
};
export const createFootballer = {
  handler: `${handlerPath(__dirname)}/handler.createFootballerApi`,
  events: [
      {
          http: {
              method: 'post',
              path: 'api/createFootballer',
          },
      },
  ],
};
