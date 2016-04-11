/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord_value_components', {
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cord',
        key: 'id'
      }
    },
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    value_component: {
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
    component_order: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cord_value_components'
  });
};
