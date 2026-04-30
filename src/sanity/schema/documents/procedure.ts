import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'procedure',
  title: 'Procedimentos',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Procedimento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'niche',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Harmonização Facial', value: 'facial' },
          { title: 'Pele e Rejuvenescimento', value: 'pele' },
          { title: 'Tratamentos Corporais', value: 'corporal' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Descrição',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
