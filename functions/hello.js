const currentDir = process.env.LAMBDA_TASK_ROOT;

exports.handler = function(event, context, callback) {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  console.log("EVENT: \n" + currentDir)
  const text = process.env.TEST_VARIBLE;
  callback(null, {
    statusCode: 200,
    body: '<html><h3 style="color:red;">' + text + '</h3></html>'
  });
}
