<template>
<v-container>
  <v-layout row>
    <v-flex xs12>
      <v-img
        src="http://italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Modelos/Trabajo/Principal/FT250TS.png"
        lazy-src="http://italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Modelos/Trabajo/Principal/FT250TS.png">
      </v-img>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex xs12>
      <h1 class="accent--text">FT 250 TS</h1>
      <p>
        Esta motocicleta de trabajo es para los que buscan una fiel compañera que les permita ser más productivos en sus días.
      </p>
      <v-btn
        color="primary"
        class="ma-2 white--text"
        small
        >
        Comprar ahora!
        <v-icon right >mdi-cart</v-icon>
      </v-btn>
      <p style="font-size: 70%">
        Aplican términos y condiciones. Consulta tu punto de venta para conocer promociones.
      </p>
    </v-flex>
  </v-layout>
  <v-expansion-panel popout>
    <v-expansion-panel-content>
      <div slot="header">
        <h4 class="">Motor</h4> 
      </div>
      <v-data-table
       show-group-by="false"
        hide-default-footer
        hide-default-headers
        :items="motor">
      </v-data-table>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-container>
</template>

<script>

export default {
    data: () => ({
        motor: [
            {
                title: 'Tipo de motor',
                description: '4 Tiempos, monocilindrico'
            },
            {
                title: 'Cilindrada',
                description: '250 CC'
            },
        ]
    })
}
</script>
