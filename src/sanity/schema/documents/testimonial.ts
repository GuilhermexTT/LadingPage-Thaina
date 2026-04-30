import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Depoimentos',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Paciente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo/Descrição (ex: Paciente)',
      type: 'string',
      initialValue: 'Paciente',
    }),
    defineField({
      name: 'text',
      title: 'Depoimento',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto do Paciente',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
