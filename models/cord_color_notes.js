/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord_color_notes', {
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    changed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    changed_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'cord_color_notes'
  });
};
