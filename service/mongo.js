import mongoose from 'mongoose'

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log('✅ MongoDB connected:', conn.connection.name)
    return conn
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message)
  }
}
