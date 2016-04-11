/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord_cluster', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
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
    ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    start_position: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_position: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num_cords: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cluster_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    spacing: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    beg_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end_cord: {
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
    grouping_class: {
      type: DataTypes.STRING,
      allowNull: true
    },
    beg_inv_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end_inv_cord: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cord_cluster'
  });
};
