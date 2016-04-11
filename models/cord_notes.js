/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord_notes', {
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cord',
        key: 'id'
      }
    },
    cord_notes: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'cord_notes'
  });
};
