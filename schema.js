'use strict'

const graphql = require('graphql')
const attributeFields = require('graphql-sequelize').attributeFields
const _ = require('lodash')

const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLFloat = graphql.GraphQLFloat
const GraphQLList = graphql.GraphQLList
const GraphQLInt = graphql.GraphQLInt
const GraphQLSchema = graphql.GraphQLSchema
const GraphQLString = graphql.GraphQLString

const models = require('./db')

function getFields (params) {
  return _.assign(
    attributeFields(params.model, params.options || {}),
    params.additionalFields || {}
  )
}

function getArgs (params) {
  var args = {}
  args.where = _.omit(params, 'limit')

  if (params.limit) {
    args.limit = params.limit
  }

  return args
}

const RGBType = new GraphQLObjectType({
  name: 'RGB',
  fields: {
    r: { type: GraphQLFloat },
    g: { type: GraphQLFloat },
    b: { type: GraphQLFloat }
  }
})

const Color = new GraphQLObjectType({
  name: 'Color',
  description: ' Color',
  fields: () => getFields({
    model: models.ColorDc,
    additionalFields: {
      rgb: {
        type: RGBType,
        resolve (color) {
          return {
            r: color.r_dec,
            g: color.g_dec,
            b: color.b_dec
          }
        }
      }
    }
  })
})

const ColorOperator = new GraphQLObjectType({
  name: 'ColorOperator',
  fields: () => getFields({
    model: models.ColorOperatorDc
  })
})

const Pigmentation = new GraphQLObjectType({
  name: 'Pigmentation',
  fields: () => getFields({
    model: models.PigmentationDc
  })
})

const CordColor = new GraphQLObjectType({
  name: 'CordColor',
  description: 'Cord Color',
  fields: () => getFields({
    model: models.CordColor,
    additionalFields: {
      operators: {
        type: new GraphQLList(ColorOperator),
        resolve (cordColor) {
          var promises = []

          for (let i = 1; i <= 5; i++) {
            let operatorId = cordColor['operator_' + i]
            if (operatorId) {
              promises.push(models.ColorOperatorDc.findOne({ where: { operator: operatorId } }))
            }
          }

          return Promise.all(promises)
        }
      },
      pigmentation: {
        type: new GraphQLList(Pigmentation),
        resolve (cordColor) {
          var promises = []

          for (let i = 1; i <= 5; i++) {
            let pigmentId = cordColor['pigmentation_cd_' + i]
            if (pigmentId && pigmentId.length === 1) {
              promises.push(models.PigmentationDc.findOne({ where: { pigmentation_code: pigmentId } }))
            }
          }

          return Promise.all(promises)
        }
      },
      colors: {
        type: new GraphQLList(Color),
        resolve (cordColor) {
          var promises = []

          for (let i = 1; i <= 5; i++) {
            let colorId = cordColor['color_cd_' + i]
            if (colorId && colorId.length) {
              promises.push(models.ColorDc.findOne({ where: { id: colorId } }))
            }
          }

          return Promise.all(promises)
        }
      }
    }
  })
})

const Cord = new GraphQLObjectType({
  name: 'Cord',
  description: 'Khipu Cord',
  fields: () => getFields({
    model: models.Cord,
    additionalFields: {
      cordColor: {
        type: CordColor,
        resolve (cord) {
          return models.CordColor.findOne({ where: { cord_id: cord.id } })
        }
      },
      knots: {
        type: new GraphQLList(Knot),
        resolve (cord) {
          return cord.getKnots()
        }
      },
      canuto: {
        type: Canuto,
        resolve (cord) {
          return cord.getCanuto()
        }
      },
      khipu: {
        type: Khipu,
        resolve (cord) {
          return cord.getKhipu()
        }
      }
    }
  })
})

const KnotType = new GraphQLObjectType({
  name: 'KnotType',
  description: 'Knot type description',
  fields: () => getFields({
    model: models.KnotTypeDc
  })
})

const Knot = new GraphQLObjectType({
  name: 'Knot',
  description: 'Khipu Knot',
  fields: () => getFields({
    model: models.Knot,
    additionalFields: {
      knotType: {
        type: KnotType,
        resolve (knot) {
          return models.KnotTypeDc.findOne({ where: { type_code: knot.type_code } })
        }
      },
      cord: {
        type: Cord,
        resolve (knot) {
          return knot.getCord()
        }
      }
    }
  })
})

const KnotCluster = new GraphQLObjectType({
  name: 'KnotCluster',
  description: 'Khipu Knot Cluster',
  fields: () => getFields({
    model: models.KnotCluster,
    additionalFields: {
      knots: {
        type: new GraphQLList(Knot),
        resolve (knotCluster) {
          return knotCluster.getKnots()
        }
      }
    }
  })
})

const KhipuNote = new GraphQLObjectType({
  name: 'KhipuNote',
  fields: () => getFields({ model: models.KhipuNote })
})

const CordStructure = new GraphQLObjectType({
  name: 'CordStructure',
  fields: () => getFields({
    model: models.StructureDc
  })
})

const PrimaryCordNotes = new GraphQLObjectType({
  name: 'PrimaryCordNotes',
  fields: () => ({
    primaryCordId: {
      type: GraphQLString,
      resolve (primaryCordNotes) {
        return primaryCordNotes.pcord_id
      }
    },
    notes: {
      type: GraphQLString,
      resolve (primaryCordNotes) {
        return primaryCordNotes.notes
      }
    }
  })
})

const Termination = new GraphQLObjectType({
  name: 'Termination',
  fields: () => getFields({
    model: models.TerminationDc
  })
})

const Beginning = new GraphQLObjectType({
  name: 'Beginning',
  fields: () => getFields({
    model: models.BeginningDc
  })
})

const Fiber = new GraphQLObjectType({
  name: 'Fiber',
  fields: () => getFields({
    model: models.FiberDc
  })
})

const PrimaryCord = new GraphQLObjectType({
  name: 'PrimaryCord',
  fields: () => getFields({
    model: models.PrimaryCord,
    additionalFields: {
      cords: {
        type: new GraphQLList(Cord),
        resolve (primaryCord) {
          return primaryCord.getCords()
        }
      },
      fiber: {
        type: Fiber,
        resolve (primaryCord) {
          return models.FiberDc.findOne({ where: { fiber_cd: primaryCord.fiber } })
        }
      },
      termination: {
        type: Termination,
        resolve (primaryCord) {
          return models.TerminationDc.findOne({ where: { termination_dc: primaryCord.termination } })
        }
      },
      beginning: {
        type: Beginning,
        resolve (primaryCord) {
          return models.BeginningDc.findOne({ where: { beginning_dc: primaryCord.beginning } })
        }
      },
      notes: {
        type: PrimaryCordNotes,
        resolve (primaryCord) {
          return models.PcordNotes.findOne({ where: { pcord_id: primaryCord.id } })
        }
      },
      structure: {
        type: CordStructure,
        resolve (primaryCord) {
          return models.StructureDc.findOne({ where: { structure_dc: primaryCord.struct } })
        }
      },
      cordClusters: {
        type: new GraphQLList(CordCluster),
        resolve (primaryCord) {
          return primaryCord.getCordClusters()
        }
      }
    }
  })
})

const CordCluster = new GraphQLObjectType({
  name: 'CordCluster',
  fields: () => getFields({
    model: models.CordCluster,
    additionalFields: {
      cords: {
        type: new GraphQLList(Cord),
        resolve (cordCluster) {
          return cordCluster.getCords()
        }
      }
    }
  })
})

const Archive = new GraphQLObjectType({
  name: 'Archive',
  description: 'Khipu Archive',
  fields: () => getFields({
    model: models.ArchiveDc,
    additionalFields: {
      khipus: {
        type: new GraphQLList(Khipu),
        resolve (archive) {
          return archive.getKhipus()
        }
      }
    }
  })
})

const Khipu = new GraphQLObjectType({
  name: 'Khipu',
  description: 'Khipu',
  fields: () => getFields({
    model: models.Khipu,
    additionalFields: {
      archive: {
        type: Archive,
        resolve (khipu) {
          return khipu.getArchive()
        }
      },
      cords: {
        type: new GraphQLList(Cord),
        resolve (khipu) {
          return khipu.getCords()
        }
      },
      primaryCord: {
        type: PrimaryCord,
        resolve (khipu) {
          return khipu.getPrimaryCord()
        }
      },
      cordClusters: {
        type: new GraphQLList(CordCluster),
        resolve (khipu) {
          return khipu.getCordClusters()
        }
      },
      notes: {
        type: new GraphQLList(KhipuNote),
        resolve (khipu) {
          return khipu.getNotes()
        }
      }
    }
  })
})

const Canuto = new GraphQLObjectType({
  name: 'Canuto',
  description: 'Canuto',
  fields: () => getFields({
    model: models.Canuto,
    additionalFields: {
      cords: {
        type: new GraphQLList(Cord),
        resolve (canuto) {
          return canuto.getCords()
        }
      }
    }
  })
})

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query.',
  fields: () => ({
    colors: {
      args: {
        'id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      type: new GraphQLList(Color),
      resolve (root, args) {
        return models.ColorDc.findAll(getArgs(args))
      }
    },
    cordColors: {
      args: {
        'id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      type: new GraphQLList(CordColor),
      resolve (root, args) {
        return models.CordColor.findAll(getArgs(args))
      }
    },
    khipus: {
      type: new GraphQLList(Khipu),
      args: {
        'id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.Khipu.findAll(getArgs(args))
      }
    },
    canutos: {
      type: new GraphQLList(Canuto),
      args: {
        'id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.Canuto.findAll(getArgs(args))
      }
    },
    knots: {
      type: new GraphQLList(Knot),
      args: {
        'id': { type: GraphQLInt },
        'knot_cluster_id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.Knot.findAll(getArgs(args))
      }
    },
    knotClusters: {
      type: new GraphQLList(KnotCluster),
      args: {
        'id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.KnotCluster.findAll(getArgs(args))
      }
    },
    cordClusters: {
      type: new GraphQLList(CordCluster),
      args: {
        'id': { type: GraphQLInt },
        'khipu_id': { type: GraphQLInt },
        'primary_cord_id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.CordCluster.findAll(getArgs(args))
      }
    },
    cords: {
      args: {
        'id': { type: GraphQLInt },
        'khipu_id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      type: new GraphQLList(Cord),
      resolve (root, args) {
        return models.Cord.findAll(getArgs(args))
      }
    },
    primaryCords: {
      args: {
        'id': { type: GraphQLInt },
        'khipu_id': { type: GraphQLInt },
        'limit': { type: GraphQLInt }
      },
      type: new GraphQLList(PrimaryCord),
      resolve (root, args) {
        return models.PrimaryCord.findAll(getArgs(args))
      }
    }
  })
})

const Schema = new GraphQLSchema({
  query: Query
})

module.exports = Schema
