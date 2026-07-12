import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la Categoría',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icono (emoji)',
      type: 'string',
      description: 'Emoji que representa la categoría (ej: ☕)',
    }),
    defineField({
      name: 'order',
      title: 'Orden en el Menú',
      type: 'number',
      description: 'Número para ordenar las categorías (menor = primero)',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
    },
    prepare(selection) {
      const { title, icon } = selection
      return {
        title: `${icon || '📁'} ${title}`,
      }
    },
  },
})
