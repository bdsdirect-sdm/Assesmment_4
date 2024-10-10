import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
    id?: number;
    profile_photo: any;
    firstname: any;
    email: any;
}
User.init({
  firstname: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  profile_photo: { type: DataTypes.STRING, allowNull: true },
}, 
{ sequelize, modelName: 'user' }
);

export default User;
