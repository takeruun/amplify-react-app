# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# start Amplify

```sh
npm install -g @aws-amplify/cli
```

## Amplify 設定

```sh
amplify configure
```

```
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  <iam user region>
Specify the username of the new IAM user:
? user name: <iam user name>

...

Enter the access key of the newly created user:
? accessKeyId:  <iam user access key>
? secretAccessKey:  <iam user secret access key>
This would update/create the AWS Profile in your local machine
? Profile Name:  <profile name>

Successfully set up the new user.
```

# Amplify プロジェクト構築

## 初期化

```sh
amplify init
```

もろもろ入力

## 認証機能追加

```sh
amplify add auth
```

```
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource amplify566f3f35 locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

・デフォルトセキュリティ設定
・Email 認証

#### 反映

```sh
amplify push
```

```
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬─────────────────┬───────────┬───────────────────┐
│ Category │ Resource name   │ Operation │ Provider plugin   │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Auth     │ amplify566f3f35 │ Create    │ awscloudformation │
└──────────┴─────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes
```

## API 機能追加

```sh
amplify add api
```

簡易的に RestAPI 作成

```
? Select from one of the below mentioned services: REST
✔ Provide a friendly name for your resource to be used as a label for this category in the project: · amplify
✔ Provide a path (e.g., /book/{isbn}): · /amplify
Only one option for [Choose a Lambda source]. Selecting [Create a new Lambda function].
? Provide an AWS Lambda function name: amplify
? Choose the runtime that you want to use: NodeJS
? Choose the function template that you want to use: CRUD function for DynamoDB (Integration with API Gateway)
? Choose a DynamoDB data source option Create a new DynamoDB table

Welcome to the NoSQL DynamoDB database wizard
This wizard asks you a series of questions to help determine how to set up your NoSQL database table.

✔ Provide a friendly name · amplify
✔ Provide table name · todo

You can now add columns to the table.

✔ What would you like to name this column · id
✔ Choose the data type · number
✔ Would you like to add another column? (Y/n) · yes
✔ What would you like to name this column · title
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · yes
✔ What would you like to name this column · description
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · no

Before you create the database, you must specify how items in your table are uniquely organized. You do this by specifying a primary key. The primary key uniquely identifies each item in the table so that no two items can have the same key. This can be an individual column, or a combination that includes a primary key and a sort key.

To learn more about primary keys, see:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey

✔ Choose partition key for the table · id
✔ Do you want to add a sort key to your table? (Y/n) · no

You can optionally add global secondary indexes for this table. These are useful when you run queries defined in a different column than the primary key.
To learn more about indexes, see:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.SecondaryIndexes

✔ Do you want to add global secondary indexes to your table? (Y/n) · no
✔ Do you want to add a Lambda Trigger for your Table? (y/N) · no
Successfully added DynamoDb table locally

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings? No
? Do you want to edit the local lambda function now? Yes
Edit the file in your editor: /Users/take/myProject/sample-amplify/amplify/backend/function/amplify/src/app.js
? Press enter to continue
Successfully added resource amplify locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/amplify/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /Users/take/myProject/sample-amplify/amplify/backend/function/amplify/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
✅ Succesfully added the Lambda function locally
✔ Restrict API access? (Y/n) · no
✔ Do you want to add another path? (y/N) · no
✅ Successfully added resource amplify locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

・Rest API 作成

・PATH: /amplify

・Express の Lambda function

#### 反映

```sh
amplify push
```

```
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬─────────────────┬───────────┬───────────────────┐
│ Category │ Resource name   │ Operation │ Provider plugin   │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Api      │ amplify         │ Create    │ awscloudformation │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Storage  │ amplify         │ Create    │ awscloudformation │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Auth     │ amplify566f3f35 │ No Change │ awscloudformation │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Function │ amplify         │ No Change │ awscloudformation │
└──────────┴─────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes

Deployment completed.
Deployed root stack amplify [ ======================================== ] 5/5
	amplify-amplify-dev-235126     AWS::CloudFormation::Stack     UPDATE_COMPLETE                Mon Oct 03 2022 01:16:36…
	storageamplify                 AWS::CloudFormation::Stack     CREATE_COMPLETE                Mon Oct 03 2022 01:16:31…
	functionamplify                AWS::CloudFormation::Stack     UPDATE_COMPLETE                Mon Oct 03 2022 01:15:57…
	authamplify566f3f35            AWS::CloudFormation::Stack     UPDATE_COMPLETE                Mon Oct 03 2022 01:15:58…
	apiamplify                     AWS::CloudFormation::Stack     CREATE_COMPLETE                Mon Oct 03 2022 01:16:21…
Deployed api amplify [ ======================================== ] 5/5
	amplify                        AWS::ApiGateway::RestApi       CREATE_COMPLETE                Mon Oct 03 2022 01:16:06…
	functionamplifyPermissionampl… AWS::Lambda::Permission        CREATE_IN_PROGRESS             Mon Oct 03 2022 01:16:08…
	amplifyDefault5XXResponse      AWS::ApiGateway::GatewayRespo… CREATE_COMPLETE                Mon Oct 03 2022 01:16:10…
	amplifyDefault4XXResponse      AWS::ApiGateway::GatewayRespo… CREATE_COMPLETE                Mon Oct 03 2022 01:16:10…
	DeploymentAPIGWamplifyb6c7d1aa AWS::ApiGateway::Deployment    CREATE_COMPLETE                Mon Oct 03 2022 01:16:15…
Deployed storage amplify [ ======================================== ] 1/1
	DynamoDBTable                  AWS::DynamoDB::Table           CREATE_COMPLETE                Mon Oct 03 2022 01:16:18…


REST API endpoint: https://8szg58bm2h.execute-api.ap-northeast-1.amazonaws.com/dev
```
**API Gateway で cors を有効にしておく**
