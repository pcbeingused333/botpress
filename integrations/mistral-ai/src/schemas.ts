import { z } from '@botpress/sdk'

export type ModelId = z.infer<typeof ModelId>

export const DefaultModel: ModelId = 'mistral-large-2512'

export const ModelId = z
  .enum([
    'mistral-large-2512',
    'mistral-small-2603',
    'ministral-14b-2512',
    'ministral-8b-2512',
    'ministral-3b-2512',
  ])
  .describe('Model to use for content generation')
  .placeholder(DefaultModel)
