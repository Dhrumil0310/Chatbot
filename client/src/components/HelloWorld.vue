<template>
  <div>
    <v-container class="chat" style="max-width:1000px;height:500px">
      <div class="chat-title">
        <h1>Cloudcounselage BOt</h1>
        <h2>i am customer support chat bot</h2>
        <figure class="avatar">
          <img src="css/bot.png" />
        </figure>
      </div>
      <perfect-scrollbar style="color:white">
        <div
          v-for="msg in show"
          :key="msg"
          :style="getSender(msg) ? 'text-align:left' : 'text-align:right;'"
          style="margin:10px;border:solid;"
        >
          <p
            v-for="m in msg.content"
            :style="getSender(msg) ? 'margin-left:10px' : 'margin-right:10px'"
            :key="m"
          >{{ m }}</p>
          <!-- <p style="font-size:10px">{{ toHHMM(msg.time) }}</p> -->
        </div>
      </perfect-scrollbar>
      <div style="display:flex">
        <v-text-field v-model="input" v-on:keyup.enter="send" label="Message" />
        <v-btn text @click="send" class="message-submit">
          <v-icon>{{ mdiSend }}</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
//import vueCustomScrollbar from "vue-custom-scrollbar";
import { mdiSend } from "@mdi/js";
export default {
  name: "HelloWorld",

  created: async function() {
    try {
      let config = {
        url: "http://localhost:4000/question",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*"
        },

        data: {
          layer: this.layer
        }
      };
      let resp = await axios(config);

      this.show.push({
        content: resp.data,
        sender: "server",
        time: Date.now()
      });
      this.layer++;
    } catch (err) {
      console.log(err);
    }
  },
  mounted: function() {
    var messageDisplay = this.$refs.messageDisplay;
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
  },
  watch: {
    show(val) {
      this.show = val;
    }
  },
  data: () => ({
    layer: 0,
    response: null,
    prev: null,
    show: [
      /*      {
        content: [
          "Hello, This is cloudCounselage Helper bot, Please select your query",
        ],
        sender: "server",
        time: Date.now(),
      },*/
    ],
    input: null,
    mdiSend: mdiSend
  }),
  methods: {
    send: async function() {
      try {
        if (this.input == 0) window.location.reload();
        if (this.layer == 1) this.prev = this.input;
        this.show.push({
          content: [this.input],
          sender: "reciver",
          time: Date.now()
        });
        let config = {
          url: "http://localhost:4000/question",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "*/*"
          },

          data: {
            layer: this.layer,
            response: this.input,
            prev: this.prev
          }
        };
        let resp = await axios(config);

        this.show.push({
          content: resp.data,
          sender: "server",
          time: Date.now()
        });
        this.layer++;
        this.input = "";
      } catch (err) {
        console.log(err);
      }
    },
    getSender(m) {
      return m.sender == "server";
    },
    toHHMM(time) {
      let date = new Date(time);
      let HH =
        date.getHours().toString().length == 2
          ? date.getHours()
          : `0${date.getHours()}`;
      let MM =
        date.getMinutes().toString().length == 2
          ? date.getMinutes()
          : `0${date.getMinutes()}`;
      return `${HH}:${MM}`;
    }
  }
};
</script>
