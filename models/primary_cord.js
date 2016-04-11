/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('primary_cord', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    struct: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thickness: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    attached_to: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pcord_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fiber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    termination: {
      type: DataTypes.STRING,
      allowNull: true
    },
    beginning: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    changed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    changed_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    twist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plainnotes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'primary_cord'
  });
};
