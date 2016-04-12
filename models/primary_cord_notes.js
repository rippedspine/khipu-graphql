/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('primary_cord_notes', {
    pcord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    notes: {
      type: 'BLOB',
      allowNull: false
    }
  }, {
    tableName: 'primary_cord_notes'
  });
};
