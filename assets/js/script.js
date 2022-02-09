const IIFEsetAttribute = (() => {
    function privada(url, id) {
        id.setAttribute('src', url);
    }
    return {
        publica(url, id) {
            privada(url, id);
        },
    };
})();



class Multimedia {
    constructor(url) {
        let _url = url;

        this.setUrl = value => (_url = value);
        this.getUrl = () => _url;
    }

    set url(value) {
        this.setUrl(value);
    }

    get url() {
        return this.getUrl();
    }

    setInicio() {
        "Este medoto es para realizar un cambio en la URL del video"
    }
}


class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        IIFEsetAttribute.publica(this.getUrl(), this._id)
    }
    setInicio(tiempo) {
        IIFEsetAttribute.publica(`${this.getUrl()}?start=${tiempo}`, this._id)
    }
}


const fmusica = document.querySelector("#musica")
const fpelicula = document.querySelector("#peliculas")
const fserie = document.querySelector("#series")


const video1 = new Reproductor("https://www.youtube.com/embed/5IpYOF4Hi6Q", fmusica);
video1.setInicio(100);

const video2 = new Reproductor("https://www.youtube.com/embed/uY6oRW9Vn4c", fpelicula);

const video3 = new Reproductor("https://www.youtube.com/embed/rXlzC4UOq2I", fserie);
//video1.setInicio(100);

video2.playMultimedia();
video3.playMultimedia();