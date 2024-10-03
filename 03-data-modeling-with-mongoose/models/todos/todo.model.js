import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        isComplete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        subTodos: [ // Array of subtodos
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo",
            }
        ]
    },
    {
        timestamps: true
    }
)

// when it will initializes itself in db schema name will be changes from Todo to todos
export const Todo = mongoose.model("Todo", todoSchema);