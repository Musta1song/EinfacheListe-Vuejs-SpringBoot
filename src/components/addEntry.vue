<template>
  <v-sheet width="300" class="mx-auto">

    <v-form ref="form">
      <v-text-field v-model="list.product" label="Produkt" required></v-text-field>

      <v-select v-model="list.weekday" :items="weekdays" label="Wochentag" required></v-select>

      <v-btn @click="createEntry();">Eintrag Erstellen</v-btn>
    </v-form>
  </v-sheet>
</template>
<style  scoped>
.addentryform {
  display: flexbox;
}

input,
select {
  width: 170px;
  height: 25px;
}

label {
  font-size: 26px;
  margin-top: 10px;

}

select {
  width: 140px;
  height: 20px;
}

button {
  margin-top: 20px;
  background-color: rgb(191, 252, 231);
}
</style>
  
<script>
import DataService from '@/DataService';

export default {
  name: 'addEntry',
  data() {
    return {
      list: {
        product: "",
        weekday: "",
      },
      weekdays: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag"

      ]
    };
  },
  methods: {
    createEntry() {

      var data = {
        product: this.list.product,
        weekday: this.list.weekday,
      };
      if (this.list.weekday != "") {

        DataService.create(data)
          .then(response => {
            this.list.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
            window.location.reload()
          })
          .catch(e => {
            console.log(e);
          });
      } else if (this.list.weekday == "") {
        alert("Wählen Sie einen Wochentag aus.")
      } else if (this.list.product == "") {
        alert("Geben Sie ein Produkt an.")
      }
    },

  }
}
</script>
