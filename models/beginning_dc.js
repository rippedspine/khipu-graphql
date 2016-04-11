/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('beginning_dc', {
    beg_cd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'beginning_dc'
  });
};
