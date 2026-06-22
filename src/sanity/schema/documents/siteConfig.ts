import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsapp',
      title: 'Link do WhatsApp',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Link do Instagram',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'E-mail de Contato',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título Hero (Principal)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo Hero',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Principal (Hero)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutImage',
      title: 'Foto da Seção Sobre',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'facialImage',
      title: 'Foto Categoria - Harmonização Facial',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'peleImage',
      title: 'Foto Categoria - Pele & Rejuvenescimento',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'corporalImage',
      title: 'Foto Categoria - Tratamentos Corporais',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
