export default {
  type: "object",
  properties: {
    name: { type: String },
    age: { type: Number }
  },
  required: ['name']
} as const;
