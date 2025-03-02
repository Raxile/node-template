import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
    try {
        const dbUrl =
            process.env.MONGO_DB_URL || 'mongodb://localhost:27017/defaultDB'
        await mongoose.connect(dbUrl)
        console.log('✅ Database connected successfully')
    } catch (error) {
        console.log('❌ Database connection failed:', error)
        process.exit(1)
    }
}
mongoose.connection.on('connecting', () =>
    console.log('🔄 Database connecting...')
)
mongoose.connection.on('error', (error: Error) =>
    console.error('❌ Database error:', error)
)

export default connectDB
