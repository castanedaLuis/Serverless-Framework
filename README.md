API-SERVERLESS
Correr la app en local --> serverless offline start --reloadHandler

Necesitamos tener instalado java.

npm install aws-sdk --save-dev npm install serverless-offline --save-dev

Para instalar Dynamondb en local --> npm install --save serverless-dynamodb-local

Para instalar Dynamondb  --> sls dynamodb install

Para solucionar el error Error getting DynamoDb local latest tar.gz location undefined: 403.

Modifica download_url en la carpeta node_modules/dynamodb-localhost/dynamodb/config.json 
pon la siguiente url https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz.
Y en el installer.js camabia el import http a https.


Desplegar la App en la nube
-- serverless deploy 

Para borrar todos los recursos creados por el deploy debes ejecutar:
-- serverless remove

COMANDOS Serveless:
    -- sls logs --function "name de la fucnion" --> muestra los logs de la función son necesidad de ir 
                                                    cloudWach

https://www.serverless.com/plugins/serverless-offline
https://www.serverless.com/plugins/serverless-dynamodb-local
