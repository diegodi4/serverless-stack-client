export default {
  STRIPE_KEY: "pk_test_qCKgdbwWQQ5kzYPWnwJqdkjZ00tAtHJXv3",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-uploads-di4"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://twi738n50g.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_26wWlVBsp",
    APP_CLIENT_ID: "1egl99c13fnp7v0m7mut2kfq23",
    IDENTITY_POOL_ID: "eu-central-1:28cc73c3-3d6d-43c5-9659-46e830a47d0a"
  }
};
