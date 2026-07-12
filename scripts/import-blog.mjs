import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'm8varzzi',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk3MgPVfvF4sFsqTxCN69WiFyTtRFK3jqf20V7hV502m8XKNGB8an5xIPwPdHHKfQtn01WmLDipjfkkHU35CL3KtcRG7ODBkAbqa2NnAA01XbYTAVzlxGA2iRPiqAUVz32rzTwJZz1jf9SViiIBVHJqJGTLRVr0DyCCE72rTlVqBJutcnzDj',
  useCdn: false,
})

// Primero crear categorías
const categorias = [
  { _id: 'cat-b2b', _type: 'categoria', titulo: 'B2B · Corporativo', slug: { _type: 'slug', current: 'b2b-corporativo' } },
  { _id: 'cat-tortas', _type: 'categoria', titulo: 'Tortas · Tips', slug: { _type: 'slug', current: 'tortas-tips' } },
  { _id: 'cat-cafe', _type: 'categoria', titulo: 'Café · Especialidad', slug: { _type: 'slug', current: 'cafe-especialidad' } },
  { _id: 'cat-recetas', _type: 'categoria', titulo: 'Recetas · Local', slug: { _type: 'slug', current: 'recetas-local' } },
  { _id: 'cat-pasteleria', _type: 'categoria', titulo: 'Pastelería · Artesanal', slug: { _type: 'slug', current: 'pasteleria-artesanal' } },
]

const articulos = [
  {
    _id: 'blog-001',
    _type: 'blogPost',
    title: '¿Cómo organizar un Coffee Break para Empresas en Lampa y Quilicura?',
    slug: { _type: 'slug', current: 'coffee-break-empresas-lampa-quilicura' },
    excerpt: 'Logística Local · Lampa · Quilicura · Colina. Evita retrasos y costos extras si coordinas eventos corporativos o capacitaciones en Lampa, Valle Grande y la zona norte de Santiago.',
    publishedAt: '2026-04-08T10:00:00Z',
    categoria: { _type: 'reference', _ref: 'cat-b2b' },
    mainImage: {
      asset: { _type: 'reference', _ref: 'image-PHOTO-2026-04-08-08-07-39' },
      alt: 'Coffee break para empresas en Lampa y Quilicura — Café Panda',
      _type: 'object',
    },
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Organizar un coffee break para empresas en Lampa y Quilicura tiene sus particularidades logísticas. La zona norte de Santiago — que incluye Lampa, Valle Grande, Chicureo y Colina — requiere coordinación precisa para que todo llegue fresco y puntual.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '¿Qué incluye un coffee break corporativo?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Un coffee break bien ejecutado incluye café de grano o especialidad, té de hojas, agua saborizada, sándwiches variados, mini queques o brownies artesanales y fruta de temporada. La presentación y el montaje son igual de importantes que la calidad del producto.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '¿Con cuánta anticipación debo cotizar?' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Para eventos de hasta 30 personas, con 48 horas es suficiente. Para eventos de más de 50 personas, recomendamos cotizar con al menos una semana de anticipación para asegurar disponibilidad y preparación óptima.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: '¿Por qué elegir un proveedor local?' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'Un proveedor local como Café Panda conoce las rutas, los tiempos y las particularidades de la zona norte. Eso se traduce en puntualidad garantizada, productos frescos del día y capacidad de respuesta ante cualquier imprevisto.' }] },
    ],
    seo: {
      metaDescription: 'Cómo organizar un coffee break para empresas en Lampa, Quilicura y zona norte de Santiago. Tips de logística, costos y coordinación con Café Panda.',
      keywords: 'coffee break empresas lampa, coffee break quilicura, banquetería zona norte santiago',
    },
  },
  {
    _id: 'blog-002',
    _type: 'blogPost',
    title: 'Tortas Personalizadas en Santiago: Evita el "Expectativa vs Realidad"',
    slug: { _type: 'slug', current: 'tortas-personalizadas-santiago-pedido' },
    excerpt: 'Pastelería Artesanal · Santiago · Lampa. Evita los 3 errores más comunes al cotizar una torta personalizada en Santiago. Lo que define el valor final es el tamaño, el diseño y la anticipación.',
    publishedAt: '2026-05-17T10:00:00Z',
    categoria: { _type: 'reference', _ref: 'cat-tortas' },
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Pedir una torta personalizada no es "elige un sabor y listo". Lo que define el valor final es el tamaño + el nivel de diseño + la anticipación. Conocer estos tres factores te ahorra sorpresas el día de tu celebración.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: 'Error #1: Cotizar sin imagen de referencia' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'El diseño de una torta personalizada parte de una imagen o concepto claro. Sin referencia visual, el resultado puede alejarse mucho de lo que imaginabas. Siempre llega con 2 o 3 fotos de referencia al momento de cotizar.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: 'Error #2: Pedir con menos de 24 horas' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Las tortas personalizadas requieren tiempo de preparación, decoración y secado. Idealmente cotiza con 48-72 horas de anticipación para diseños complejos y al menos 24 horas para diseños más simples.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: 'Error #3: No confirmar tamaño vs número de personas' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'Una torta para 15 personas no es lo mismo que una para 30. El tamaño afecta directamente el precio. Siempre comunica el número exacto de personas que se van a servir para que el pastelero pueda calcular el tamaño correcto.' }] },
    ],
    seo: {
      metaDescription: 'Evita los 3 errores más comunes al pedir tortas personalizadas en Santiago. Tips de Café Panda para cotizar bien y recibir exactamente lo que imaginas.',
      keywords: 'tortas personalizadas santiago, tortas a pedido lampa, pastelería artesanal santiago',
    },
  },
  {
    _id: 'blog-003',
    _type: 'blogPost',
    title: 'Sopaipillas Pasadas a Domicilio desde Valle Grande, Lampa',
    slug: { _type: 'slug', current: 'sopaipillas-pasadas-a-domicilio-lampa' },
    excerpt: 'Receta Casera · 100% Zapallo Natural · Lampa. El fin del mito de la masa seca y la chancaca aguada. Sopaipillas pasadas artesanales a domicilio desde Valle Grande.',
    publishedAt: '2026-04-15T10:00:00Z',
    categoria: { _type: 'reference', _ref: 'cat-recetas' },
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Las sopaipillas pasadas de Café Panda están hechas con zapallo natural 100%, sin mezclas artificiales ni masa preparada. La chancaca es casera, con naranja, clavo y canela. El resultado es una sopaipilla que no se deshace ni queda dura.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '¿Por qué son diferentes las sopaipillas de Café Panda?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'La clave está en el porcentaje de zapallo en la masa. Una sopaipilla con poco zapallo queda dura y sin sabor. La nuestra lleva la proporción exacta para lograr una textura suave por dentro y crocante por fuera.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '¿A qué comunas despachamos?' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Despachamos desde Valle Grande a Lampa, Chicureo, Chicauma, Quilicura, Huechuraba y comunas de Santiago como Providencia y Las Condes. Consulta disponibilidad por WhatsApp.' }] },
    ],
    seo: {
      metaDescription: 'Sopaipillas pasadas artesanales a domicilio desde Valle Grande, Lampa. 100% zapallo natural, chancaca casera. Despacho a toda la RM.',
      keywords: 'sopaipillas pasadas domicilio lampa, sopaipillas artesanales santiago, delivery sopaipillas valle grande',
    },
  },
  {
    _id: 'blog-004',
    _type: 'blogPost',
    title: 'Café de Especialidad: cuando una buena taza te acompaña',
    slug: { _type: 'slug', current: 'cafe-de-especialidad-cuando-una-buena-taza-te-acompana' },
    excerpt: 'Café de especialidad no es un "café más caro". Es café con trazabilidad, cuidado y técnica: grano bien elegido, tueste correcto, molienda precisa y extracción controlada.',
    publishedAt: '2025-12-01T10:00:00Z',
    categoria: { _type: 'reference', _ref: 'cat-cafe' },
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'El café de especialidad no es un marketing de precio. Es un estándar de calidad que abarca desde el origen del grano hasta la taza que recibes. En Café Panda trabajamos exclusivamente con granos de especialidad porque creemos que el café merece el mismo respeto que cualquier otro producto artesanal.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '¿Qué hace especial a un café de especialidad?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Un café de especialidad debe puntuar sobre 80 en la escala de la Specialty Coffee Association. Eso implica trazabilidad del origen, proceso de secado controlado, tueste artesanal y una extracción precisa que respete las características del grano.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: 'Por qué lo usamos en nuestros coffee breaks corporativos' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Cuando organizamos un coffee break para una empresa, el café es el protagonista. Usar un café de especialidad marca la diferencia entre un evento memorable y uno olvidable. Nuestros clientes corporativos lo notan y lo valoran.' }] },
    ],
    seo: {
      metaDescription: 'Qué es el café de especialidad y por qué Café Panda lo usa en sus coffee breaks corporativos en Santiago y zona norte RM.',
      keywords: 'café de especialidad santiago, café artesanal lampa, coffee break café grano santiago',
    },
  },
  {
    _id: 'blog-005',
    _type: 'blogPost',
    title: '¿Pastelería a Pedido o hecha Industrialmente?',
    slug: { _type: 'slug', current: 'pasteleria-a-pedido-o-hecha-industrialmente' },
    excerpt: 'Industrializado y artesanal no compiten por lo mismo. Uno busca durar y estandarizar. El otro busca sabor, frescura y experiencia. Si puedes elegir, elige lo que esté hecho para hoy.',
    publishedAt: '2025-11-15T10:00:00Z',
    categoria: { _type: 'reference', _ref: 'cat-pasteleria' },
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'La pastelería industrial está diseñada para durar semanas en anaquel. La artesanal está diseñada para consumirse hoy. Esa diferencia lo cambia todo: los ingredientes, las técnicas, el sabor y la textura.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '¿Qué diferencia hay en los ingredientes?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'La pastelería industrial usa conservantes, emulsionantes y grasas vegetales hidrogenadas para extender la vida útil. La artesanal usa mantequilla real, huevos frescos, harina sin aditivos y azúcar sin refinar. El sabor es incomparable.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '¿Por qué importa para un coffee break?' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'En un coffee break corporativo, la calidad de la pastelería refleja la imagen de tu empresa. Servir productos artesanales frescos comunica cuidado y atención al detalle. Es una inversión en la percepción de tu marca interna.' }] },
    ],
    seo: {
      metaDescription: 'Diferencias entre pastelería artesanal y pastelería industrial para eventos y coffee breaks. Por qué Café Panda usa solo ingredientes frescos.',
      keywords: 'pastelería artesanal santiago, pastelería a pedido lampa, coffee break artesanal empresas',
    },
  },
  {
    _id: 'blog-006',
    _type: 'blogPost',
    title: 'Tortas a Pedido: Guía para Cotizar en línea y no morir en el intento',
    slug: { _type: 'slug', current: 'tortas-a-pedido-guia-para-cotizar-en-linea-y-no-morir-en-el-intento' },
    excerpt: 'Pedir una torta personalizada no es "elige un sabor y listo". Lo que define el valor final es el tamaño, el nivel de diseño y la anticipación. Acá tienes la guía completa.',
    publishedAt: '2025-11-20T10:00:00Z',
    categoria: { _type: 'reference', _ref: 'cat-tortas' },
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Cotizar una torta personalizada por WhatsApp o formulario web puede ser frustrante si no sabes qué información entregar. Esta guía te ayuda a preparar todo lo necesario para recibir una cotización precisa y sin sorpresas.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: 'Información que necesitas tener lista' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Número de personas, fecha del evento, sabor de la masa, sabor del relleno, diseño o temática (con foto de referencia), si necesita mensaje escrito y dirección de entrega. Con estos datos, te respondemos con precio exacto en menos de 2 horas.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '¿Qué afecta el precio de una torta personalizada?' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'El precio varía según el tamaño (número de personas), la complejidad del diseño (fondant vs buttercream, figuritas, flores), el sabor del relleno y el tiempo de anticipación. Una torta con 1 semana de anticipación siempre será más económica que una de urgencia.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: '¿Cómo pagar y confirmar?' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'En Café Panda aceptamos transferencia bancaria y Mercado Pago. Se confirma el pedido con un abono del 50% y el saldo al momento de la entrega. Enviamos comprobante de pago inmediatamente.' }] },
    ],
    seo: {
      metaDescription: 'Guía completa para cotizar tortas personalizadas en Santiago. Qué información necesitas, cómo funciona el proceso y qué afecta el precio final.',
      keywords: 'cotizar torta personalizada santiago, tortas a pedido online lampa, cómo pedir torta personalizada',
    },
  },
]

async function importar() {
  console.log('Importando categorías...')
  for (const cat of categorias) {
    try {
      await client.createOrReplace(cat)
      console.log(`  ✓ ${cat.titulo}`)
    } catch (e) {
      console.log(`  ✗ ${cat.titulo}: ${e.message}`)
    }
  }

  console.log('\nImportando artículos...')
  for (const art of articulos) {
    try {
      // Limpiar mainImage si tiene referencia de imagen que no existe
      const artSinImagen = { ...art }
      delete artSinImagen.mainImage
      await client.createOrReplace(artSinImagen)
      console.log(`  ✓ ${art.title}`)
    } catch (e) {
      console.log(`  ✗ ${art.title}: ${e.message}`)
    }
  }

  console.log('\nListo.')
}

importar()
