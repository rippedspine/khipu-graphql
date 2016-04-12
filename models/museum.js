/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('museum', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    museum_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'museum'
  });
};
