/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('knot_cluster', {
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    start_post: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_pos: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total_value: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    num_knots: {
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
    tableName: 'knot_cluster'
  });
};
