<template>
  <div class="addentryform">

    <label for="text">Produkt:</label><br>
    <input type="text" name="product" id="text" v-model="list.product"><br>

    <label for="weekday">Wochentag:</label><br>

    <select v-model="list.weekday" name="weekday" id="weekday">
      <option value="Montag">Montag</option>
      <option value="Dienstag">Dienstag</option>
      <option value="Mittwoch">Mittwoch</option>
      <option value="Donnerstag">Donnerstag</option>
      <option value="Freitag">Freitag</option>
      <option value="Samstag">Samstag</option>
    </select>

    <br>

    <button v-on:click="createEntry();">Eintrag Erstellen</button>
  </div>
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
      }
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
