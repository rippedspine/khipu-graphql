/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('canuto_cord_flat', {
    khipu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pendant_from: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_inv_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    canuto_color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canuto_color_string: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cord_ordinal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_inv_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pf_ord_8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    inv_num_8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cord_class: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cord_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    thickness: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    termination: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fiber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color_string: {
      type: DataTypes.STRING,
      allowNull: true
    },
    knots: {
      type: DataTypes.STRING,
      allowNull: true
    },
    knot_string: {
      type: DataTypes.STRING,
      allowNull: true
    },
    total_value: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    alt_values: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alt_value_string: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subsidiaries: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subs_string: {
      type: DataTypes.STRING,
      allowNull: true
    },
    asur_num: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canutito_pos: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    canutito_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    canutito_color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canutito_string: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canutito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    canuto_image: {
      type: 'BLOB',
      allowNull: true
    },
    canutito_image: {
      type: 'BLOB',
      allowNull: true
    }
  }, {
    tableName: 'canuto_cord_flat'
  });
};
