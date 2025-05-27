import serverless from 'serverless-http';
import app from './src/server.js';


const sls = serverless(app);

export async function handler(event, context) {

    console.log(`### ${event.requestContext?.http?.method} ${event.requestContext?.http?.path}`);

    return sls(event, context);
}