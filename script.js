const { createApp } = Vue;

createApp({
  data() {
    return {
      showImage: false,
      showMain: true,
      typedText: "",
      fullText: "",
      showContent: false,
      contentHTML: "",
      typingIndex: 0,
      questions: [
        "Что здесь черт возьми происходит?",
        "Узнать вас поподробней",
        "Я бы хотел глянуть что вы там делали",
        "Эммм... я оказался не на том сайте.",
        "НЕТ ВРЕМЕНИ СРОЧНО ДАЙТЕ МНЕ СВОИ КОНТАКТЫ!!!"
      ],
      answers: {
        1: {
          text: "О, вам интересно, что происходит? Давайте разбираться!",
          content: "<p>Здесь будет объяснение того, что происходит на сайте.</p>"
        },
        2: {
          text: "Я веб-разработчик с опытом в HTML, CSS, JavaScript и WordPress.",
          content: "<p>Описание опыта работы и навыков.</p>"
        },
        3: {
          text: "Вот мои работы:",
          content: "<ul><li>Проект 1</li><li>Проект 2</li><li>Проект 3</li></ul>"
        },
        4: {
          text: "Похоже, вы ошиблись сайтом. Но если хотите, можем поболтать!",
          content: "<p>Можем поговорить о технологиях, обучении или проектах.</p>"
        },
        5: {
          text: "Вот мои контакты:",
          content: "<p>Email: <a href='mailto:ahoney.froggy@gmail.com' style='color: #fff;'>ahoney.froggy@gmail.com</a><br>LinkedIn: <a href='https://t.me/nxoxtxhxixnxgxexlxsxe' target='_blank' style='color: #fff;'>Тэгэшка</a></p>"
        }
      },
      currentAnswer: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.showImage = true;
    }, 500); // Плавное появление картинки
  },
  methods: {
    selectAnswer(answerId) {
      this.currentAnswer = answerId;
      this.showMain = false;
      this.typedText = "";
      this.showContent = false;
      this.fullText = this.answers[answerId].text;
      this.contentHTML = this.answers[answerId].content;
      this.typingIndex = 0;
      this.startTyping();
      this.showImage = false;
    },
    startTyping() {
      if (this.typingIndex < this.fullText.length) {
        this.typedText += this.fullText[this.typingIndex];
        this.typingIndex++;
        setTimeout(this.startTyping, 50);
      } else {
        // После завершения печатания показываем контент
        this.showContent = true;
      }
    },
    goBack() {
      this.showMain = true;
      this.typedText = "";
      this.showContent = false;
      this.showImage = true;
    },
    goNext() {
      const nextAnswer = this.currentAnswer + 1;
      if (nextAnswer <= Object.keys(this.answers).length) {
        this.selectAnswer(nextAnswer);
      }
    }
  }
}).mount('#app');
