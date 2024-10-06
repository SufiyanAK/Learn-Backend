import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true
    },

})

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },
        customerName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        orderItems: {
            type: [orderItemsSchema],
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending'
        },
        paymentMethod: {
            type: String,
            enum: ['Cash On Delivery', 'Credit Card', 'PayPal'],
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Order = mongoose.model('Order', orderSchema, 'orders');