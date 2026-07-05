import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Configurações do Site',
  type: 'document',
  groups: [
    {
      name: 'geral',
      title: 'Geral',
    },
    {
      name: 'hero',
      title: 'Primeira Seção (Hero)',
    },
    {
      name: 'about',
      title: 'Segunda Seção (Sobre)',
    },
    {
      name: 'categories',
      title: 'Categorias de Serviços',
    },
  ],
  fields: [
    defineField({
      name: 'whatsapp',
      title: 'Link do WhatsApp',
      type: 'url',
      group: 'geral',
    }),
    defineField({
      name: 'instagram',
      title: 'Link do Instagram',
      type: 'url',
      group: 'geral',
    }),
    defineField({
      name: 'email',
      title: 'E-mail de Contato',
      type: 'string',
      group: 'geral',
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'string',
      group: 'geral',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título Hero (Principal)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo Hero',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Principal (Hero)',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'hero',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Foto da Seção Sobre',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'about',
    }),
    defineField({
      name: 'facialImage',
      title: 'Foto Categoria - Harmonização Facial',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'categories',
    }),
    defineField({
      name: 'peleImage',
      title: 'Foto Categoria - Pele & Rejuvenescimento',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'categories',
    }),
    defineField({
      name: 'corporalImage',
      title: 'Foto Categoria - Tratamentos Corporais',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'categories',
    }),
  ],
})
