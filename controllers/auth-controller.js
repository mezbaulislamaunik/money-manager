const UserOtpImpl = require('../repositories/auth/impl/user-otp-impl');
const UserEmailImpl = require('../repositories/auth/impl/user-email-impl');
const UserSignUpImpl = require('../repositories/auth/impl/user-signup-impl');
const ApiResponse = require("../models/api-response");
const User = require('../schemas/user');


exports.insertAndSendOtp = async (req, res) => {
    const duplicateUser = await User.findOne({email: req.body.email.toLowerCase()});
    if (duplicateUser) {
        return res.status(400).json(new ApiResponse.Error(['User already exists'], 400));
    }
    try {
        const response = await UserOtpImpl.insertOtp(req.body.email);
        await UserEmailImpl.sendSignUpOtpEmail(response.email.toLowerCase(), response.otp);
        return res.status(200).json(new ApiResponse.Success('An otp has been sent to your email address.'));
    } catch (err) {

    }
}

exports.verifyOtp = async (req, res) => {
    try {
        const {email, password, otp} = req.body;
        const token = await UserOtpImpl.verifyOtp({email, password, otp});
        return res.status(200).json(new ApiResponse.Success({
            access_token: token.access_token,
            refresh_token: token.refresh_token,
            message: 'User created successfully'
        }));

    } catch (error) {
        return res.status(400).json(new ApiResponse.Error([error.message], 400));
    }
}

exports.getToken = async (req, res) => {
    const token = await UserSignUpImpl.getToken(req.body.email);
    return res.status(200).json(new ApiResponse.Success({
        access_token: token.access_token,
        refresh_token: token.refresh_token,
    }));
}

exports.login = async (req, res) => {
    try {
        const response = await UserSignUpImpl
            .login(req.body.email, req.body.password);
        return res.status(200).json(new ApiResponse.Success({
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            user: {_id: response.user._id, email: response.user.email},
        }));
    } catch (error) {
        return res.status(401).json(new ApiResponse.Error([error.message], 401));
    }
}

exports.signup = async (req, res) => {
    try {
        const response = await UserSignUpImpl
            .register(req.body.email, req.body.password);
        return res.status(200).json(new ApiResponse.Success({
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            user: {_id: response.user._id, email: response.user.email},
        }));
    } catch (error) {
        return res.status(401).json(new ApiResponse.Error([error.message], 401));
    }

}
