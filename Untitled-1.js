// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const frameCount = 1000;
// const images = [];
// const imageSeq = {
//     frame: 0
// };


// for (let i = 1; i <= frameCount; i++) {
//     const img = new Image();

//     img.src = `./frames/frame_${String(i).padStart(4, "0")}.jpg`;

//     images.push(img);
// }

// function render() {

//     const img = images[imageSeq.frame];

//     if (!img.complete) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     const scale = Math.max(
//         canvas.width / img.width,
//         canvas.height / img.height
//     );

//     const x = (canvas.width - img.width * scale) / 2;
//     const y = (canvas.height - img.height * scale) / 2;

//     ctx.drawImage(
//         img,
//         x,
//         y,
//         img.width * scale,
//         img.height * scale
//     );
// }


// images[0].onload = render;


// gsap.to(kuchtoayega, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//         trigger: "body",
//         start: "top top",
//         end: "+=5000",
//         scrub: true
//     },
//     onUpdate: render
// });


// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
// });