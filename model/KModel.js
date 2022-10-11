class KModel{
    #KonyvekTomb = [];
    constructor(){
    }

    Adatlekeres(vegpont, myCallback){
        fetch(vegpont, {
            method: 'Get', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            //body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              //console.log('Success:', data);
              this.#KonyvekTomb = data.konyv;
              myCallback(this.#KonyvekTomb);
            })
            .catch((error) => {
             // console.error('Error:', error);
            });
    }

}
export default KModel;