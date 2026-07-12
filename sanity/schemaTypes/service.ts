import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Servicio Corporativo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Servicio',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
      description: 'Ej: Coffee Break Premium, Desayuno Ejecutivo, Torta Personalizada',
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
      name: 'type',
      title: 'Tipo de Servicio',
      type: 'string',
      options: {
        list: [
          { title: 'Coffee Break', value: 'coffee-break' },
          { title: 'Desayuno Ejecutivo', value: 'desayuno' },
          { title: 'Almuerzo Ejecutivo', value: 'almuerzo' },
          { title: 'Torta Personalizada', value: 'torta' },
          { title: 'Catering Empresarial', value: 'catering' },
          { title: 'Evento Institucional', value: 'evento' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción General',
      type: 'text',
      rows: 5,
      description: 'Descripción completa del servicio',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'string',
      validation: (Rule) => Rule.max(160),
      description: 'Para SEO y previsualizaciones (máx 160 caracteres)',
    }),
    defineField({
      name: 'basePrice',
      title: 'Precio Base (CLP)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      description: 'Precio base por persona o por servicio',
    }),
    defineField({
      name: 'priceDescription',
      title: 'Descripción de Precio',
      type: 'string',
      description: 'Ej: Por persona, Por 10 porciones, etc.',
    }),
    defineField({
      name: 'minimumOrder',
      title: 'Pedido Mínimo',
      type: 'number',
      description: 'Mínimo de personas o porciones (si aplica)',
    }),
    defineField({
      name: 'deliveryTime',
      title: 'Tiempo de Entrega/Preparación',
      type: 'string',
      description: 'Ej: 48 horas, 2-3 días, consultar disponibilidad',
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
      name: 'gallery',
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
      name: 'includes',
      title: '¿Qué Incluye?',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de lo que incluye el servicio',
    }),
    defineField({
      name: 'customizationOptions',
      title: 'Opciones de Personalización',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ej: Sabores disponibles, temas de decoración, etc.',
    }),
    defineField({
      name: 'targetAudience',
      title: 'Público Objetivo',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'Empresas', value: 'empresas' },
          { title: 'Colegios', value: 'colegios' },
          { title: 'Instituciones', value: 'instituciones' },
          { title: 'Cumpleaños', value: 'cumpleaños' },
          { title: 'Bodas', value: 'bodas' },
          { title: 'Eventos Privados', value: 'privados' },
        ],
      },
    }),
    defineField({
      name: 'isFeature',
      title: '¿Destacar en página principal?',
      type: 'boolean',
      initialValue: false,
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
      type: 'type',
      media: 'image',
      price: 'basePrice',
    },
    prepare(selection) {
      const { title, type, media, price } = selection
      const typeLabel = {
        'coffee-break': '☕',
        desayuno: '🥐',
        almuerzo: '🍽️',
        torta: '🎂',
        catering: '🍳',
        evento: '🎉',
      }
      return {
        title: `${typeLabel[type as keyof typeof typeLabel] || '📌'} ${title}`,
        subtitle: price ? `CLP $${price.toLocaleString('es-CL')}` : 'Sin precio',
        media: media,
      }
    },
  },
})
