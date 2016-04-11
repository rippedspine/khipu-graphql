/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pigmentation_dc', {
    pigmentation_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pigmentation_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pigmentation_dc'
  });
};
