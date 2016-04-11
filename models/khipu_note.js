/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khipu_note', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    khipu_id: {
      type: DataTypes.INTEGER(11),
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
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plainnotes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'khipu_note'
  });
};
