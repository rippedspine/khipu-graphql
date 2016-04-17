'use strict'

const graphql = require('graphql')
const graphqlSequelize = require('graphql-sequelize')
const _ = require('lodash')

const attributeFields = graphqlSequelize.attributeFields
const resolver = graphqlSequelize.resolver

const GraphQLObjectType = graphql.GraphQLObjectType
const GraphQLList = graphql.GraphQLList
const GraphQLInt = graphql.GraphQLInt
const GraphQLSchema = graphql.GraphQLSchema

const models = require('khipu-models')

function getFields (params) {
  return _.assign(
    attributeFields(
      params.model,
      _.assign(params.options || {}, {
        map: k => _.camelCase(k)
      })
    ),
    params.additionalFields || {}
  )
}

var fields = _(models).map((model, key) => {
  return {
    fieldName: _.lowerFirst(key) + 's',
    type: new GraphQLList(new GraphQLObjectType({
      name: key,
      fields: () => getFields({ model: model })
    })),
    args: {
      id: { type: GraphQLInt },
      limit: { type: GraphQLInt }
    },
    resolve: function (root, args, _, info) {
      // Until graphql-sequelize is updated
      return resolver(model)(root, args, info)
    }
  }
})
.keyBy('fieldName')
.value()

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query.',
  fields: () => fields
})

const Schema = new GraphQLSchema({
  query: Query
})

module.exports = Schema
