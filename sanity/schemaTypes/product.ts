import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
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
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio Base (CLP)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'servings',
      title: 'Número de Porciones (si aplica)',
      type: 'number',
      description: 'Para tortas, coffee breaks, etc.',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredientes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de ingredientes principales',
    }),
    defineField({
      name: 'isAvailable',
      title: '¿Disponible?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'published',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      price: 'price',
    },
    prepare(selection) {
      const { title, media, price } = selection
      return {
        title: title,
        subtitle: price ? `CLP $${price.toLocaleString('es-CL')}` : 'Sin precio',
        media: media,
      }
    },
  },
})
