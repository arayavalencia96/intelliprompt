import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "El email ya existe en BBDD."],
    required: [true, "El email es requerido."],
  },
  username: {
    type: String,
    required: [true, "El user es requerido."],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Usuario inválido.",
    ],
    image: {
      type: String,
    },
  },
});

const User = models.User || model("User", UserShema);
export default User;
