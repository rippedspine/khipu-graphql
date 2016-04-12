/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khipu_provenance', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    provenance: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'khipu_provenance'
  });
};
