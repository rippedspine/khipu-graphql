var Sequelize = require('sequelize')
var fs = require('fs')
var path = require('path')
var _ = require('lodash')

var sequelize = new Sequelize('khipu', 'root', 'root', {
  host: '33.33.33.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false,
    freezeTableName: true,
    paranoid: true,
    underscored: true
  }
})

var db = {}

fs
  .readdirSync(path.resolve(__dirname, 'models'))
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    var model = sequelize.import(path.join(__dirname, 'models', file))
    db[_.upperFirst(_.camelCase(model.name))] = model
  })

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

// -- ArchiveDc
// -- AttachmentDc
// -- BeginningDc
// -- Canutito
// -- CanutitoColor
// -- Canuto
// -- CanutoCluster
// -- CanutoColor
// -- CanutoCordFlat
// -- ColorDc
// -- ColorOperatorDc
// -- Cord
// -- CordClassificationDc
// -- CordCluster
// -- CordColor
// -- CordColorNotes
// -- CordNotes
// -- CordTypeDc
// -- CordValueComponents
// -- FiberDc
// -- GroupingClassDc
// -- Khipu
// -- KhipuBlobNotes
// -- KhipuNote
// -- Knot
// -- KnotCluster
// -- KnotTypeDc
// -- PcordNotes
// -- PigmentationDc
// -- PrimaryCord
// -- PrimaryCordAttach
// -- StructureDc
// -- TerminationDc
// -- UrtonKhipuType
// -- XCanutoColorFlat

//
// -- Associations

// Khipu <--- Cord
db.Cord.belongsTo(db.Khipu)
db.Khipu.hasMany(db.Cord, { as: 'Cords' })

// Khipu <-- Khipu Notes
db.KhipuNote.belongsTo(db.Khipu)
db.Khipu.hasMany(db.KhipuNote, { as: 'Notes' })

// Cord <--- Knot
db.Knot.belongsTo(db.Cord)
db.Cord.hasMany(db.Knot, { as: 'Knots' })

// Knot Cluster <-- Knot
db.Knot.belongsTo(db.KnotCluster)
db.KnotCluster.hasMany(db.Knot, { as: 'Knots' })

// Canuto <-- Cord
db.Cord.belongsTo(db.Canuto)
db.Canuto.hasMany(db.Cord, { as: 'Cords' })

module.exports = db
