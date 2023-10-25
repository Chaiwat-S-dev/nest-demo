export default () => ({
    port: parseInt(process.env.PORT) || 3000,
    redis: {
        host: process.env.REDIS_HOST || "localhost",
        port: parseInt(process.env.REDIS_PORT) || 6379
    }
  });