import { defineCollection, z } from "astro:content";


const descripcionesCollection = defineCollection({
    schema: z.object({
      categoria: z.string(),
      descripcion: z.string(),
      img: z.string().url(),
    }),
  });


  const serviciosCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      descripcion: z.string(),
      need: z.string(),
      cover: z.array(z.string()),
      use_service: z.array(z.object({
        paso: z.string(),
        descripcion: z.string()
      })),
      category: z.string(),
      image: z.array(z.string()),
    }),
  });


  export const collections = {
    descripciones: descripcionesCollection,
    servicios: serviciosCollection
  }