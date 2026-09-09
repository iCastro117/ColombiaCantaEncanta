// Agrega tus fotos en src/assets con los nombres indicados en README.md.
// JPG, JPEG, PNG, WEBP y AVIF tienen prioridad sobre los SVG de reemplazo.
const files = import.meta.glob('./assets/**/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function asset(name) {
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'JPG', 'JPEG', 'PNG', 'WEBP', 'AVIF', 'svg'];
  const path = extensions.map((extension) => `./assets/${name}.${extension}`)
    .find((candidate) => files[candidate]);
  return files[path];
}

export const images = {
  logo: asset('logo/logo'),
  logoAuth: asset('logo/LOGO2'),
  inicio: asset('inicio/festival'),
  carrusel: [1, 2, 3, 4].map((number) => asset(`carrusel/0${number}`)),
  canto: asset('cursos/canto'),
  iniciacion: asset('cursos/iniciacion'),
  instrumento: asset('cursos/instrumento'),
  perfil: asset('perfil/perfil') || asset('cursos/iniciacion'),
  eventos: {
    canto: asset('eventosCatalogo/01'),
    danzas: asset('eventosCatalogo/02'),
    andina: asset('eventosCatalogo/03'),
    ritmos: asset('eventosCatalogo/04'),
    narracion: asset('eventosCatalogo/05'),
    ensamble: asset('eventosCatalogo/06'),
  },
};
