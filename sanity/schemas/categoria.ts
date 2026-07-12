const categoria = {
  name: 'categoria',
  title: 'Categoría de Blog',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo' },
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
  ],
}

export default categoria
