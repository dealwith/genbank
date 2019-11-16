import * as argon2 from "argon2";
import database from "../src/models";
import jwt from "jsonwebtoken";

class AuthService {
  static async signUp({ email, name, password }) {
    try {
      const passwordHashed = await argon2.hash(password);

      const userRecord = await database.User.create({
        password: passwordHashed,
        email,
        name
      });

      const user = {
        email: userRecord.email,
        name: userRecord.name
      };

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async signIn(email, password) {
    const userRecord = await database.User.findOne({ where: { email } });
    if (!userRecord) {
      throw new Error("User not found");
    } else {
      const correctPassword = await argon2.verify(
        userRecord.password,
        password
      );
      if (!correctPassword) {
        throw new Error("Incorrect input data");
      }
    }

    return {
      user: {
        name: userRecord.name,
        email: userRecord.email
      },
      token: this._generateToken(userRecord)
    };
  }

  static _generateToken(user) {
    const data = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    const signature = "THATS_AN_I3REAM";
    const expiration = "6h";

    return jwt.sign({ data }, signature, { expiresIn: expiration });
  }
}

export default AuthService;
