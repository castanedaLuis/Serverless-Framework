const aws = require("aws-sdk")


let dynamoDBClientParams = {}

if (process.env.IS_OFFLINE) {
    dynamoDBClientParams =  {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
        secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
    }
}

const dynamodb = new aws.DynamoDB.DocumentClient(dynamoDBClientParams)

const deleteUsers = async (event, context) => {

    let userId = event.pathParameters.id


    let params = {
        TableName: "usersTable",
        Key: { pk: userId },
      };


    return dynamodb.delete(params).promise().then(res => {
        return {
            "statusCode": 200,
            "body": JSON.stringify(
                {   'message': 'El recurso se ELIMINO correctamente ',
                    userId
                })
        }
    })
    
}

module.exports = {
    deleteUsers
}
