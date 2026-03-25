import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'variety',
  title: 'Lotus Variety',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Variety Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'bloomColour',
      title: 'Bloom Colour',
      type: 'string',
    }),

    defineField({
      name: 'species',
      title: 'Species',
      type: 'string',
      options: {
        list: ['Small', 'Medium', 'Large']
      }
    }),

    defineField({
      name: 'tuberPhoto',
      title: 'Tuber Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'flowerPhoto',
      title: 'Flower Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
    }),

    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: ['In Stock', 'Out of Stock', 'Preorder']
      }
    }),

    defineField({
      name: 'waterDepth',
      title: 'Water Depth',
      type: 'string',
      description: 'Example: 5-10 inches'
    }),

    defineField({
      name: 'sunHours',
      title: 'Sunlight (hours/day)',
      type: 'number',
    }),

    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example: Bestseller, Rare, Easy to grow'
    }),
  ],
})