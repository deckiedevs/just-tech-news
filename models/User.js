const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS
        // define an id column
        id: {
            // use the special Sequelize DataTypes object to provide type of data
            type: DataTypes.INTEGER,
            // defines NOT NULL
            allowNull: false,
            // defines primary key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be duplicate email values in this table
            unique: true,
            // if allowNull is false, run data through validation before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS HERE
        // pass in sequlize connection
        sequelize,
        // don't automatically create timestamp fields
        timestamps: false,
        // don't pluralize name ofatabase table
        freezeTableName: true,
        // use underscores
        underscored: true,
        // mode name stays lowercase
        modelname: 'user'
    }
);

module.exports = User;