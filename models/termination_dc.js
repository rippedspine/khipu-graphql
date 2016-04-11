/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('termination_dc', {
    termination_cd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    termination_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'termination_dc'
  });
};
