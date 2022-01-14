new Vue({
    el: "#app",
    data: {
        currentCounterIndex: 0,
        immagini: [
            {
                name: 1,
                image: 'https://unsplash.it/300/300?image=12',
            },
            {
                name: 2,
                image: 'https://unsplash.it/300/300?image=22',
            },
            {
                name: 3,
                image: 'https://unsplash.it/300/300?image=32',
            },
            {
                name: 4,
                image: 'https://unsplash.it/300/300?image=42',
            },
            {
                name: 5,
                image: 'https://unsplash.it/300/300?image=52',
            },
        ],
        time: 0,
    },
    methods: {
        // automaticSlide: function() {
        //     let tempo = this
        //     this.timer = setInterval(function() {
        //       tempo.nextSlide();
        //     }, 2000);
        //   },
        nextSlide: function() {
            this.currentCounterIndex++;
           
            if (this.currentCounterIndex > this.immagini.lenght - 1) {
                this.currentCounterIndex = 0;
            }
        },
        prevSlide: function() {
            this.currentCounterIndex--;

            // if (this.currentCounterIndex < 0) {
            //     this.currentCounterIndex = this.immagini.lenght - 1;
            // }
        },
        
    }
})