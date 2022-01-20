exports.handler = function(event, context, callback) {
  if(event.httpMethod === 'POST') {
    //const body = JSON.parse(event.body);
    const name = event.body.split('=')[1] || 'world';
    // const name = event.queryStringParameters.name;
    
    callback(null, {
      statusCode: 200,
      body: `Hello POST, ${name}` 
    });
  } else {
    callback(null, {
      statusCode: 400,
      body: {}
    });
  }
}
