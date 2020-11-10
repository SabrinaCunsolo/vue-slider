var app = new Vue(
    {
        el: '#root',
        data: {
            caroselloImg: 0,
            // creo array di img
            immagini: [
                'https://desenio.it/bilder/artiklar/zoom/8386_2.jpg?imgwidth=435&qt=',
                'https://desenio.it/bilder/artiklar/zoom/12897_2.jpg?imgwidth=435&qt=Illustrazione%20in%20rosa',
                'https://desenio.it/bilder/artiklar/zoom/8233_2.jpg?imgwidth=435&qt=',
                'https://desenio.it/bilder/artiklar/zoom/12326_2.jpg?imgwidth=435&qt=',
                'https://desenio.it/bilder/artiklar/zoom/2920_2.jpg?imgwidth=435&qt='
            ]
        },
        methods: {
            // per scorrere immagini devo attivare click
            clickRight() {
                this.caroselloImg ++;
                if (this.caroselloImg == this.immagini.length) {
                    this.caroselloImg = 0;
                }
            },
            clickLeft() {
                this.caroselloImg --;
                if (this.caroselloImg < 0) {
                    this.caroselloImg = this.immagini.length - 1;
                }
            },

        },

        // created va messa fuori da methods!
        created: function() {
            setInterval(() => {
                this.clickRight()
            }, 3000)
        }
    },




);
