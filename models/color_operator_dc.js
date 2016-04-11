/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('color_operator_dc', {
    operator: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    operator_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'color_operator_dc'
  });
};
