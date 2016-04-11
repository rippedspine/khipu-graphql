/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('knot_type_dc', {
    type_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    code_order: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'knot_type_dc'
  });
};
