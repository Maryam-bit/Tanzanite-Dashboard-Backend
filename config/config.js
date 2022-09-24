const config = {
    'MODE': 'Development',
    'PORT': process.env.PORT || 5000,
    'MONGO_URL': process.env.MONGO_URL || 'mongodb://localhost:27017/testDB',
    'JWT_SECRET': process.env.JWT_SECRET || "pmsRHuOihHkFQzMo1m"
}

export default config;