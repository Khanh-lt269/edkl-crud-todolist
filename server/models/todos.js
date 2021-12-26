import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, { timestamps: true });

export default mongoose.model('Todo', todoSchema)