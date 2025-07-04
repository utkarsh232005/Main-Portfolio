import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date Range',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "June 2023 - August 2023"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tech',
      title: 'Skills/Technologies',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Comma-separated list of skills and technologies',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
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
      subtitle: 'subtitle',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${title} at ${subtitle}`,
        subtitle: `Order: ${order}`,
      }
    },
  },
})
