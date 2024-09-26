import { defineCollection, z } from "astro:content";


// Colección para Empresas y Personas
const descripcionesCollection = defineCollection({
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    servicios: z.array(z.object({
      nombre: z.string(),
      subcategoria: z.array(z.string()),
    })),
  }),
});

const serviciosCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      descripcion: z.string(),
      // need: z.string(),
      // cover: z.array(z.string()),
      // use_service: z.array(z.object({
      //   paso: z.string(),
      //   descripcion: z.string()
      // })),
      // category: z.string(),
      // image: z.array(z.string()),
    }),
  });


  export const collections = {
    servicios: serviciosCollection,
    descripciones: descripcionesCollection,
  }