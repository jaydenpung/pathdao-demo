import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Footballer } from 'src/db';

import schema from './schema';

// say hello to footballer
const helloFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Hello Footballer ${event.body.name}, age ${event.body.age}`,
    event: event
  });
};
export const helloFootballerApi = middyfy(helloFootballer);

// say howdy to footballer
const howdyFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Howdy Footballer ${event.body.name}, age ${event.body.age}`
  });
};
export const howdyFootballerApi = middyfy(howdyFootballer);

// create footballer
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

// read footballer
const readFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let whereClause = {};
  if (event.queryStringParameters?.name) {
    whereClause['name'] = event.queryStringParameters.name;
  }
  if (event.queryStringParameters?.age) {
    whereClause['age'] = event.queryStringParameters.age;
  }
  if (event.pathParameters?.id) {
    whereClause['id'] = event.pathParameters.id;
  }
  let footballers = await Footballer.findAll({
    where: whereClause
  })
  return formatJSONResponse({
    footballers
  });
};
export const readFootballerApi = middyfy(readFootballer);

// update footballer
const updateFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let footballer = await Footballer.findOne({
    where: {
      id: event.pathParameters.id
    }
  })

  if (!footballer) {
    throw new Error("No footballer found!");
  }

  footballer.name = event.body.name ?? footballer.name;
  footballer.age = event.body.age ?? footballer.age
  footballer.save();

  return formatJSONResponse({
    message: `Updated Footballer`,
    result: footballer
  });
};
export const updateFootballerApi = middyfy(updateFootballer);

// delete footballer
const deleteFootballer: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let footballer = await Footballer.findOne({
    where: {
      id: event.pathParameters.id
    }
  })

  if (!footballer) {
    throw new Error("No footballer found!");
  }

  footballer.destroy();

  return formatJSONResponse({
    message: `Deleted Footballer`
  });
};
export const deleteFootballerApi = middyfy(deleteFootballer);