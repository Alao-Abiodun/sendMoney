import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'name'> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number
    public name!: string
    public email!: string
    public password!: string
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

export default User