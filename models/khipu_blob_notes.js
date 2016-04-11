/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khipu_blob_notes', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    notes: {
      type: 'BLOB',
      allowNull: true
    }
  }, {
    tableName: 'khipu_blob_notes'
  });
};
