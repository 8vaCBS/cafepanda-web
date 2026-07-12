import { groq } from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    categoria-> { titulo },
    mainImage { asset->{ url }, alt }
  }
`

export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    categoria-> { titulo },
    mainImage { asset->{ url }, alt },
    seo { metaDescription, keywords }
  }
`

export const latestPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc)[0..2] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    categoria-> { titulo },
    mainImage { asset->{ url }, alt }
  }
`
