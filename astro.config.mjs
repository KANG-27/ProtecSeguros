import { defineConfig } from 'astro/config';

export default defineConfig({
  // Otras configuraciones de Astro
  vite: {
    css:{
      preprocessorOptions: {
        css:{
          import: ['./src/styles/global.css']
        }
      }
    },
    server: {
      // Habilitar cacheo para imágenes en la carpeta public
      middleware: {
        async handler(req, res) {
          // Verificar si la URL es una imagen
          if (req.url.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache por 1 año
          }
          return await next(req, res);
        },
      },
    },
  },
});
