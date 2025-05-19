const connectionConfig = {
  development: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB_NAME,
  },
  prod: {
    host: process.env.AMAZON_RDS_HOST,
    user: process.env.AMAZON_RDS_USER,
    database: process.env.AMAZON_RDS_DB_NAME,
  }
};

export default connectionConfig;