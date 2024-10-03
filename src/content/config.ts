import { defineCollection, z } from "astro:content";


// Colección para Empresas y Personas
const descripcionesCollection = defineCollection({
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    servicios: z.array(z.object({
      nombre: z.string(),
      subcategoria: z.array(z.object({
        nombre: z.string(),
        referencia: z.string(),
        descripcion: z.string(),
        imagen: z.string()
      })),
    })),
    imagenes: z.array(z.object({
      src: z.string(),
      alt: z.string()
    }))
  }),
});

const serviciosCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    descripcion: z.string(),
    necesito: z.string().optional(),
    prestaciones: z.array(z.string()).optional(),
    uso_servicio: z.array(z.object({
      paso: z.string(),
      descripcion: z.string(),
    })).optional(),
    imagenes: z.array(z.string()).optional(),
    categoria: z.string(),
    subcategoria: z.string()
  }),
});



  export const collections = {
    'descripciones': descripcionesCollection,
    'services': serviciosCollection,
  }