/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('urton_khipu_type', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    investigator_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    provenance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    decimal_num: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cencus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    anomalous: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    positional: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    banded: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    seriated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    summing_internal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    matching_internal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    large_values: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    archive_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'urton_khipu_type'
  });
};
