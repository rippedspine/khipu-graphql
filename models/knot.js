/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('knot', {
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    knot_value_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    knot_value_decimal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    knot_cluster_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'knot_cluster',
        key: 'id'
      }
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    knot_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cluster_ordinal: {
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
    num_turns: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    axis_orientation: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'knot'
  });
};
