//import querystring from "querystring";

exports.handler = async (event, context) => {
  
  if (event.httpMethod == "POST") {
    const name = event.body.split('=')[1];
    
    return { 
      statusCode: 200,
      body: `Hello POST, ${name}` 
    };
    
  } else if (event.httpMethod == "GET") {
    const name = event.queryStringParameters.name || "World";
    
    return { 
      statusCode: 200,
      body: `Hello GET, ${name}`
    };
    
  } else {
  
    return {
      statusCode: 405, 
      body: "Method Not Allowed" 
    };
  }
};
