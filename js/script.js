new Vue({
    el: "#app",
    data: {
        currentCounterIndex: 0,
        immagini: [
            {
                name: 'immagine-1',
                image: 'https://unsplash.it/600/300?image=12',
            },
            {
                name: 'immagine-2',
                image: 'https://unsplash.it/600/300?image=22',
            },
            {
                name: 'immagine-3',
                image: 'https://unsplash.it/600/300?image=32',
            },
            {
                name: 'immagine-4',
                image: 'https://unsplash.it/600/300?image=42',
            },
            {
                name: 'immagine-5',
                image: 'https://unsplash.it/600/300?image=52',
            },
        ],
        time: 0,
    },
    methods: {
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
    },
    // mounted: function() {
    //     this.automaticSlide();
    //   },
})