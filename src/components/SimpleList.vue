<template>
  <div class="flex justify-center">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Einkaufsliste
          </th>
          <th class="text-left">
            Wochentag
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in list" :key="entry" class="text-left">
          <td>{{ entry.product }}</td>
          <td>{{ entry.weekday }}</td>
          <td><v-btn id="button" @click="removeEntry(entry.id)">löschen</v-btn></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 50px;
}

tr {
  padding-right: 20px;
  padding-left: 20px;
}

td,
th {
  font-size: 20px;
  padding-left: 00px;
  color: rgb(104, 104, 104);
}

button {
  background-color: rgba(255, 228, 196, 0.589);
}
</style>

<script>
import DataService from '@/DataService';

export default {
  name: 'SimpleList',
  data() {
    return {
      data: [],
      list: [],
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
    getData() {
      DataService.getAll()
        .then(response => {
          this.data = response.data;
          console.log(this.data)
          this.sortlist();
          console.log(this.list)
        })
        .catch(e => {
          console.log(e);
        });
    },
    sortlist() {
      for (let j = 0; j <= 6; j++) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].weekday === this.weekdays[j]) {
            this.list.push(this.data[i]);
          }

        }
      }
    },
    removeEntry(id) {
      DataService.delete(id)
        .then(response => {
          this.list.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      window.location.reload();

    }
  },
  mounted() {
    this.getData();
  }
}
</script>

