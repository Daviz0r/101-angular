 interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
 }
interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed sheran',
        year: 2015
    }
}

// desestructuracion de objetos

const {author, year} = audioPlayer.details

const {song} = audioPlayer

console.log('La cancion es:',song, 'y en cantante es:', author, 'del año', year)

// Desestruncturacion de arreglos

const [p1, p2, p3]:string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 3', p3)

export{};