/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('primary_cord_attach', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attached_to_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'primary_cord',
        key: 'id'
      }
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
    tableName: 'primary_cord_attach'
  });
};
