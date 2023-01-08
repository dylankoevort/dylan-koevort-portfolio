import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dylankoevort_portfolio',

  projectId: 'aym6hgh7',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
