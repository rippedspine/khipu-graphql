/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcord_notes', {
    pcord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    notes: {
      type: 'BLOB',
      allowNull: false
    }
  }, {
    tableName: 'pcord_notes'
  });
};
