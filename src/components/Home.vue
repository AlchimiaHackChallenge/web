<template>
  <v-carousel
    cycle="true"
    >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
    data: () => ({
        items: [
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/slide-Modena.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/refacciones.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/slide-Fiera.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/Beneficios.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/slide-renta-de-locales.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/SLIDE-emplacado.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/italikaracing.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/slide-cursos-min.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/slide-Modena.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/refacciones.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/slide-Fiera.jpg'},
            { src: 'http://www.italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Slide/Mexico/Beneficios.jpg'},
        ],
      }),
  }
</script>
