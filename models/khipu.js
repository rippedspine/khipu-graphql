/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khipu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    earliest_age: {
      type: DataTypes.DATE,
      allowNull: true
    },
    latest_age: {
      type: DataTypes.DATE,
      allowNull: true
    },
    provenance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_discovered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    discovered_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    museum_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    museum_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    museum_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condition_of_khipu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    investigator_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complete: {
      type: DataTypes.BOOLEAN,
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
    duplicate_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    duplicate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    archive_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    orig_inv_num: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'khipu'
  });
};
