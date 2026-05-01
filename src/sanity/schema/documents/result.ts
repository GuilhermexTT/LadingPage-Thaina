import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'result',
  title: 'Resultados (Antes e Depois)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título (ex: Preenchimento Labial)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Selo (ex: Antes e Depois)',
      type: 'string',
      initialValue: 'Antes e Depois',
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Menor número aparece primeiro',
      initialValue: 0,
    }),
  ],
})
