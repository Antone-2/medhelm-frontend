const config = {
    jwtSecret: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/medhelm',
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = config;
