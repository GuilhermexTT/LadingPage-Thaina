import { groq } from 'next-sanity'

export const proceduresQuery = groq`*[_type == "procedure"] {
  niche,
  name,
  desc,
  "image": image.asset->url
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  name,
  role,
  text,
  "image": image.asset->url
}`

export const siteConfigQuery = groq`*[_type == "siteConfig"][0]`

export const resultsQuery = groq`*[_type == "result"] | order(order asc) {
  title,
  badge,
  "image": image.asset->url
}`
