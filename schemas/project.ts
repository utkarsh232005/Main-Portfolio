import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tech',
      title: 'Technologies',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Comma-separated list of technologies',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Mark as featured project',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order of appearance (1 = first, 2 = second, etc.)',
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare({ title, media, featured }) {
      return {
        title: title,
        subtitle: featured ? 'Featured Project' : 'Project',
        media: media,
      }
    },
  },
})
