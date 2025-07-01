let NbExample = 5
// console.log("NbExample")

for (let i = 0; i < NbExample; i++) {
    document.getElementById("img-js").innerHTML += 
            `
            <a class="example-image-link" href="https://picsum.photos/200/300?random=${i}"
                data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img class="example-image" src="https://picsum.photos/200/300?random=${i}" alt="" />
            </a>
            `
}

