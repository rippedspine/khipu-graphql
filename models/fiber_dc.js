/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fiber_dc', {
    fiber_cd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    fiber_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fiber_dc'
  });
};
