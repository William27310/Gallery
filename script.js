// console.log("NbExample")

// for (let i = 0; i < NbExample; i++) {
//     document.getElementById("img-js").innerHTML += 
//             `
//             <a class="example-image-link" href="https://picsum.photos/200/300?random=${i}"
//                 data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
//                 <img class="example-image" src="https://picsum.photos/200/300?random=${i}" alt="" />
//             </a>
//             `
// }
function generateNbExample(NbExample) {

    for (let i = 0; i < NbExample; i++) {
        let randomNb = Math.floor(Math.random() * 200)

        document.getElementById("img-js").innerHTML +=
            `
            <div class="col-lg-3 col-3-sm mb-5 mt-4">
            <a class="example-image-link" href="https://picsum.photos/id/${randomNb}/2000/1200"
                data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img class="example-image" src="https://picsum.photos/id/${randomNb}/50/50" alt="" />
            </a>
            </div>
            `
    }
}

generateNbExample(50)

document.addEventListener("scroll", () => {
    console.log(window.scrollY)
    console.log(window.innerHeight)
    if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight) {
        generateNbExample(50)
    }
})