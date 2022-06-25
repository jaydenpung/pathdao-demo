import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Footballer } from 'src/db';

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

const createFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let footballer = await Footballer.create({
    name: event.body.name,
    age: event.body.age
  })
  return formatJSONResponse({
    message: `Created Footballer ${footballer.name}, age ${footballer.age}`
  });
};
export const createFootballerApi = middyfy(createFootballer);