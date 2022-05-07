<template>
    <div>
        Top Page<br/>
        <input type="text" id="result" value=""/>
    </div>
</template>

<script>
import axios from 'axios';
import router from "../../router";
export default {
  name: "TopPage",
  mounted() {
    this.getContents();
  },
  methods: {
    getContents() {
      this.$session.start();
      // アクセストークンがなければ認証画面に遷移
      if (!this.$session.has("access")) {
        router.push("/auth");
      }
      var elem = document.getElementById('result');
      axios.get('http://localhost:8000/contents/', {
        headers: {
          Authorization: `Bearer ${this.$session.get("access")}`,
        }
      })
      .then(function (response) {
        elem.value = response.data.message;
      })
      .catch(error => {
        // TODO accessが期限切れでcontentsが取得できなかったらrefreshでaccessを取得しなおす
        console.log(error.response.status);
      });
    }
  }
};
</script>