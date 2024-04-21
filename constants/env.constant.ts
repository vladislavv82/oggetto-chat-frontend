const env = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4200',
  SOCKET_SERVER_URL: process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || 'http://localhost:4200',
};

export default env;
