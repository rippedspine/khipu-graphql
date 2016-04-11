/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grouping_class_dc', {
    class_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    class_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'grouping_class_dc'
  });
};
