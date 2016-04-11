/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord_classification_dc', {
    as_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ur_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classification_cd: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cord_classification_dc'
  });
};
