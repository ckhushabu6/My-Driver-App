import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

import ApiError from "../utils/ApiError.js";

const protect = async (
  req,
  res,
  next
) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {
      token =
        req.headers.authorization.split(
          " "
        )[1];
    }

    if (!token) {
      return next(
        new ApiError(
          401,
          "Unauthorized"
        )
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET
    );

    const user =
      await User.findById(
        decoded.id
      );

    if (!user) {
      return next(
        new ApiError(
          401,
          "User not found"
        )
      );
    }

    if (user.isBlocked) {
      return next(
        new ApiError(
          403,
          "Account blocked"
        )
      );
    }

    req.user = user;

    next();
  } catch (error) {
    return next(
      new ApiError(
        401,
        "Invalid token"
      )
    );
  }
};

export default protect;