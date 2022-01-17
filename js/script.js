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
        timer: 0,
        hover: false
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
        // sfruttare un booleano per far partire l'hover
        mouseOver: function() {
            this.hover = true;
            clearInterval(this.timer);
        },
        mouseLeave: function() {
            this.hover = false;
            this.automaticSlide();
        },
        dotClick: function(i) {
            this.currentCounterIndex = i; 
        }
    },
    mounted: function() {
        this.automaticSlide();
      },
})