import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Dra. Thainá Carvalho CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dvxmt9nz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [structureTool()],

  schema: schema,
})
