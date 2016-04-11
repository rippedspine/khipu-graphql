const graphql = require('graphql')
const attributeFields = require('graphql-sequelize').attributeFields
const _ = require('lodash')

const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLFloat = graphql.GraphQLFloat
const GraphQLList = graphql.GraphQLList
const GraphQLInt = graphql.GraphQLInt
const GraphQLSchema = graphql.GraphQLSchema

const models = require('./db')

function getFields (params) {
  return _.assign(
    attributeFields(params.model, params.options || {}),
    params.additionalFields || {}
  )
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

const CordColor = new GraphQLObjectType({
  name: 'CordColor',
  description: ' Cord Color',
  fields: () => getFields({
    model: models.CordColor,
    additionalFields: {}
  })
})

const Cord = new GraphQLObjectType({
  name: 'Cord',
  description: 'Khipu Cord',
  fields: () => getFields({
    model: models.Cord,
    additionalFields: {
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

const Knot = new GraphQLObjectType({
  name: 'Knot',
  description: 'Khipu Knot',
  fields: () => getFields({
    model: models.Knot,
    additionalFields: {
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

const Khipu = new GraphQLObjectType({
  name: 'Khipu',
  description: 'Khipu',
  fields: () => getFields({
    model: models.Khipu,
    additionalFields: {
      cords: {
        type: new GraphQLList(Cord),
        resolve (khipu) {
          return khipu.getCords()
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
        'id': { type: GraphQLInt }
      },
      type: new GraphQLList(Color),
      resolve (root, args) {
        return models.ColorDc.findAll({ where: args })
      }
    },
    cordColors: {
      args: {
        'id': { type: GraphQLInt }
      },
      type: new GraphQLList(CordColor),
      resolve (root, args) {
        return models.CordColor.findAll({ where: args })
      }
    },
    khipus: {
      type: new GraphQLList(Khipu),
      args: {
        'id': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.Khipu.findAll({ where: args })
      }
    },
    canutos: {
      type: new GraphQLList(Canuto),
      args: {
        'id': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.Canuto.findAll({ where: args })
      }
    },
    knots: {
      type: new GraphQLList(Knot),
      args: {
        'id': { type: GraphQLInt },
        'knot_cluster_id': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.Knot.findAll({ where: args })
      }
    },
    knotClusters: {
      type: new GraphQLList(KnotCluster),
      args: {
        'id': { type: GraphQLInt }
      },
      resolve (root, args) {
        return models.KnotCluster.findAll({ where: args })
      }
    },
    cords: {
      args: {
        'id': { type: GraphQLInt }
      },
      type: new GraphQLList(Cord),
      resolve (root, args) {
        return models.Cord.findAll({ where: args })
      }
    }
  })
})

const Schema = new GraphQLSchema({
  query: Query
})

module.exports = Schema
