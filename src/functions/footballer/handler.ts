import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const helloFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Hello Footballer ${event.body.name}, age ${event.body.age}`
  });
};
export const helloFootballerApi = middyfy(helloFootballer);

const howdyFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Howdy Footballer ${event.body.name}, age ${event.body.age}`
  });
};
export const howdyFootballerApi = middyfy(howdyFootballer);