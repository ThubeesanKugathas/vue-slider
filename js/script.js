new Vue({
    el: "#app",
    data: {
        currentCounterIndex: 0,
        immagini: [
            {
                name: 1,
                image: 'https://unsplash.it/600/300?image=12',
            },
            {
                name: 2,
                image: 'https://unsplash.it/600/300?image=22',
            },
            {
                name: 3,
                image: 'https://unsplash.it/600/300?image=32',
            },
            {
                name: 4,
                image: 'https://unsplash.it/600/300?image=42',
            },
            {
                name: 5,
                image: 'https://unsplash.it/600/300?image=52',
            },
        ],
        palline: [
            {
                numero: 1,
            },
            {
                numero: 2,
            },
            {
                numero: 3,
            },
            {
                numero: 4,
            },
            {
                numero: 5,
            },
        ],
        time: 0,
    },
    methods: {
        addColor: function() {
            if (this.immagini.name === this.palline.numero) {
                this.palline.numero.className += " ms_color";
            }
        },
        automaticSlide: function() {
            let tempo = this
            this.timer = setInterval(function() {
              tempo.nextSlide();
            }, 2000);
          },
        nextSlide: function() {
            this.currentCounterIndex++;
           
            if (this.currentCounterIndex > this.immagini.length - 1) {
                this.currentCounterIndex = 0;
            }

        },
        prevSlide: function() {
            this.currentCounterIndex--;

            if (this.currentCounterIndex < 0) {
                this.currentCounterIndex = this.immagini.length - 1;
            }
        },
        addColor: function() {

        }
    },
    mounted: function() {
        this.automaticSlide();
      },
})