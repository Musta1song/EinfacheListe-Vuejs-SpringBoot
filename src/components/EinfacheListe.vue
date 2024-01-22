<template>
  <div class="ul"><ul>
    <h3>Eintrag</h3>
    <div v-for="entry in list" :key="entry">
      <li>{{ entry.product }}</li>
    </div>
  </ul>
  <ul>
    <h3>Wochentag</h3>
    <div v-for="entry in list" :key="entry">
      <li>{{ entry.weekday }}</li>
    </div>
  </ul>
<ul>
    <h3> &nbsp;
</h3>
    <div v-for="entry in list" :key="entry">
      <li><input type="radio" id="radioID" :value=entry.id v-on:change="getIdByRadioEvent($event)" ></li>
    </div>
  </ul>
</div>
<Button id="button" v-on:click="removeEntry()">Eintrag löschen</Button>
</template>

<script>
import DataService from '@/DataService';

export default {
  name: 'EinfacheListe',
  data() {
    return {
      list: [],
      id: null,
      selectedEntry: null,

    };
  },
  methods: {
    getData() {
      DataService.getAll()
        .then(response => {
          this.list = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    removeEntry(){
      DataService.delete(this.id)
        .then(response => {
          this.list.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        window.location.reload();

    },
    getIdByRadioEvent(event){
      this.id=event.target.value;
      console.log(this.id)
      const bt = document.getElementById("button");
      bt.style.visibility = "visible"
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ul {
  display: flex;
  justify-content: center;

}
input{
  width: 50px;
}

ul {
  padding-right: 20px;
  padding-left: 20px;
  list-style-type: none;
background-color: rgb(255, 228, 193);
}
li{
  font-size: 20px;
  padding-left: 00px;
  color: rgb(104, 104, 104);
}
button{
  visibility: hidden;
  background-color: rgba(255, 228, 196, 0.589);
}

</style>
