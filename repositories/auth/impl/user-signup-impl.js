const {generateAccessToken, generateRefreshToken} = require("../../../utils/jwt");
const User = require('../../../schemas/user');
const bcrypt = require('bcrypt');

class UserSignupImpl {
    static async getToken(email) {
        try {
            const user = await User.findOne({email});
            if (!user) {
                throw new Error('User not found');
            }
            return {
                access_token: generateAccessToken({id: user._id}),
                refresh_token: generateRefreshToken({id: user._id})
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    static async login(email, password) {
        const user = await User.findOne({email});
        if (!user) {
            throw new Error(`User does not exist`);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error(`Invalid email or password`);
        } else {
            return {
                access_token: generateAccessToken({id: user._id}),
                refresh_token: generateRefreshToken({id: user._id}),
                user: {_id: user._id, email: user.email}
            };
        }
    }

    static async register(email, password) {
        if (!email) {
            throw new Error(`Email is required`);
        }
        if (!password) {
            throw new Error(`Password is required`);
        }
        const userExists = await User.findOne({email});
        if (userExists) {
            throw new Error(`User already exists`);
        }
        const user = await User.create({
            email: params.email,
            password: await bcrypt.hash(params.password, 10)
        });
        return {
            access_token: generateAccessToken({id: user._id}),
            refresh_token: generateRefreshToken({id: user._id}),
            user: {_id: user._id, email: user.email}
        };
    }
}

module.exports = UserSignupImpl;
