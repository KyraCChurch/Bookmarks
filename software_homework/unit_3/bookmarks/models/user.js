const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

const userSchema = new Schema ({
    name: { type: String, required: true },
    email: { type: String, unique: true, trim: true, lowercase: true, required: true},
    password: { type: String, trim: true, minLength: 5, require: true },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Bookmark'}]
}, {
    timestamps: true,
    toJSON: {
        TransformStream(doc, ret){
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()

    this.password  = await bcrypt.hash(this.password, SALT_ROUNDS)
})

module.exports = model('User', userSchema)