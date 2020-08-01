import {} from 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import mongoose from 'mongoose';
import cors from 'cors';

import models from './models';
import schema from './schema';
import resolvers from './resolvers';
import { createApolloServer } from './utils/apollo-server';



const http = require('http');
const httpProxy = require('http-proxy');
const shttp = require('socks5-http-client');
const Agent = require('socks5-http-client/lib/Agent');



// Connect to database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

// Initializes application
const app = express();

// Enable cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

// Create a Apollo Server
const server = createApolloServer(schema, resolvers, models);
server.applyMiddleware({ app, path: '/graphql' });

// Create http server and add subscriptions to it
// const httpServer = createServer(app);
// httpProxy.createProxyServer({target:'http://localhost:9000'})

const httpServer = http.createServer(app, function(req, res) {
  //httpProxy.web(req, res, { target: 'http://localhost:9050' });
  // shttp.get('http://localhost:9500', function(res) {
	//    res.setEncoding('utf8');
	//    res.on('readable', function() {
	// 	  console.log(res.read()); // Log response to console.
  //    });
	// });

  // console.log(res.read()); // Log response to console.

  // request({
  // 	url: req, //'http://en.wikipedia.org/wiki/SOCKS',
  // 	agentClass: Agent,
  // 	agentOptions: {
  // 		// socksHost: 'my-tor-proxy-host', // Defaults to 'localhost'.
  // 		socksPort: 9050 // Defaults to 1080.
  // 	}
  // }, function(err, res) {
  // 	console.log(err || res.body);
  // });


});
server.installSubscriptionHandlers(httpServer);

// Listen to HTTP and WebSocket server
const PORT = process.env.PORT || process.env.API_PORT;
httpServer.listen({ port: PORT }, () => {
  console.log(`server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(
    `Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
