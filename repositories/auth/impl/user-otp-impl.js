const Otp = require('../../../schemas/otp');
const User = require('../../../schemas/user');
const bcrypt = require('bcrypt');
const {generateAccessToken, generateRefreshToken} = require("../../../utils/jwt");
const UserSignUpImpl = require('./user-signup-impl')

class UserOtpImpl {
    static async insertOtp(email) {
        return await Otp.insertOtp(email);
    }

    static async verifyOtp(params) {
        const record = await Otp.findOne({email: params.email});
        if (!record) {
            throw new Error(`Otp already expired`);
        } else {
            if (params.otp === record.otp) {
                const user = await User.create({
                    email: params.email,
                    password: await bcrypt.hash(params.password, 10)
                });
                return await UserSignUpImpl.getToken(user.email);
            } else {
                throw new Error(`Wrong otp`);
            }
        }
    }
}

module.exports = UserOtpImpl;
