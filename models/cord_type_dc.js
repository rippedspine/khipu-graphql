/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord_type_dc', {
    type_cd: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
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
    }
  }, {
    tableName: 'cord_type_dc'
  });
};
