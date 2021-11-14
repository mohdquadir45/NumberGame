

gameStatus = "Not started"


const Images = [
    {
        image_name: '0',
        item_name: 'bat',
        number: 11
    },
    {
        image_name: '1',
        item_name: 'dog',
        number: 2
    },
    {
        image_name: '2',
        item_name: 'cat',
        number: 3
    },
    {
        image_name: '3',
        item_name: 'football',
        number: 6
    },
    {
        image_name: '4',
        item_name: 'pen',
        number: 7
    }
]

let selectRandomImage = Math.floor(Math.random() * Images.length);
let currentScore = 0;
let itemNumber = 0;

let alreadAppeard = [];


const showItemNumber = (n) => {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        itemNumber = n - 1
    } else if (num === 1) {
        return itemNumber = n + 1
    } else {
        itemNumber = n
    }

}

const setRandomImage = () => {
    const n= Math.floor(Math.random() * Images.length);
   
    if(alreadAppeard.includes(n)){
        if(alreadAppeard.length===Images.length){
            document.getElementById("itemImage").style.display = 'none';
            document.getElementById("leftData").style.display = 'none';
            document.getElementById("finalScore").style.display = 'block';
            document.getElementById('finalScore').innerHTML = `Game Over, Your Final Score Is ${currentScore}/${Images.length}`
            

        }else{
            setRandomImage()
        }
        //selectRandomImage()
    }else{
        selectRandomImage=n
    }
}




const showImage = () => {

    alreadAppeard.push(selectRandomImage);
    document.getElementById("itemImage").setAttribute('src', `images/${Images[selectRandomImage].image_name}.jpeg`);
    //itemNumber= Math.floor(Math.random() * Images[selectRandomImage].number);
    showItemNumber(Images[selectRandomImage].number)
    document.querySelector('#leftData #answer').innerHTML = `${itemNumber} ${Images[selectRandomImage].item_name}`;
}
const showScore = () => {
    document.querySelector('#leftData #score').innerHTML = `${currentScore}/${Images.length}`;
}

const startGame = () => {
    document.getElementsByClassName("before-start")[0].style.display = "none";
    document.getElementById("itemImage").style.display = 'block';
    document.getElementById("leftData").style.display = 'block';

    showImage();
    showScore();
}
const thumbsUp = () => {
    if (itemNumber === Images[selectRandomImage].number) {
        currentScore++;
    }
    setRandomImage();
    showImage();
    showScore();
}

const thumbsDown = () => {
    if (itemNumber !== Images[selectRandomImage].number) {
        currentScore++;
    }
    setRandomImage();
    showImage();
    showScore();
}


