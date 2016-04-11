/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('color_dc', {
    ISCC_NBS_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'na',
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    r_dec: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    g_dec: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    b_dec: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    intensity: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    }
  }, {
    tableName: 'color_dc'
  });
};
