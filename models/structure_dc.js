/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('structure_dc', {
    structure_cd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    structure_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'structure_dc'
  });
};
