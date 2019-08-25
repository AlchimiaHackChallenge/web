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
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Motor
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-simple-table>
          <tbody>
            <tr v-for="(item, i) in motor" :key="i">
              <td><strong>{{ item.title }}</strong></td>
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
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
