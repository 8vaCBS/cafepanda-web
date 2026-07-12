import { type SchemaTypeDefinition } from 'sanity'

import product from './schemaTypes/product'
import category from './schemaTypes/category'
import service from './schemaTypes/service'

export const schemaTypes: SchemaTypeDefinition[] = [
  product,
  category,
  service,
]
