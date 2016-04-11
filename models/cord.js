/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cord', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    twist_angle: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    thickness: {
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
    pendant_from: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attached_to: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attachment_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cluster_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cluster_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attach_post: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cord_length: {
      type: DataTypes.DECIMAL,
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
    cord_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cord_classification: {
      type: DataTypes.STRING,
      allowNull: true
    },
    investigator_cord_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cord'
  });
};
