gsap.registerPlugin(ScrollTrigger);

// // apple Lottie
// const appleLottieElem = {
//   container: document.getElementById("apple"),
//    renderer: "svg",
//   loop: true,
//   autoplay: false,
//   path: "assets/a.json",
// };

// const appleLottie = lottie.loadAnimation(appleLottieElem);

// gsap.to(appleLottie, {
//   scrollTrigger: {
//     trigger: "#apple",
//     scroll: "body",
//     scrub: 1,
//     markers:true,
//     start: "top 25%",
//     end: "bottom -350%",   
//     onUpdate: (self) => {
//       const progress = self.progress;
//       appleLottie.goToAndStop(progress * appleLottie.totalFrames, true);
//     },
//   },
//   ease: "power1.inOut",
// });

// // ball Lottie
// const ballLottieElem = {
//   container: document.getElementById("ball"),
//    renderer: "svg",
//   loop: true,
//   autoplay: false,
//   path: "assets/b.json",
// };

// const ballLottie = lottie.loadAnimation(ballLottieElem);

// gsap.to(ballLottie, {
//   scrollTrigger: {
//     trigger: "#ball",
//     scroll: "body",
//     scrub: 1,
//     markers:true,
//     start: "top 25%",
//     end: "bottom -350%",   
//     onUpdate: (self) => {
//       const progress = self.progress;
//       ballLottie.goToAndStop(progress * ballLottie.totalFrames, true);
//     },
//   },
//   ease: "power1.inOut",
// });

// // cat Lottie
// const catLottieElem = {
//   container: document.getElementById("cat"),
//    renderer: "svg",
//   loop: true,
//   autoplay: false,
//   path: "assets/c.json",
// };

// const catLottie = lottie.loadAnimation(catLottieElem);

// gsap.to(catLottie, {
//   scrollTrigger: {
//     trigger: "#cat",
//     scroll: "body",
//     scrub: 1,
//     markers:true,
//     start: "top 25%",
//     end: "bottom -350%",   
//     onUpdate: (self) => {
//       const progress = self.progress;
//       catLottie.goToAndStop(progress * catLottie.totalFrames, true);
//     },
//   },
//   ease: "power1.inOut",
// });

// // dog Lottie
// const dogLottieElem = {
//   container: document.getElementById("dog"),
//    renderer: "svg",
//   loop: true,
//   autoplay: false,
//   path: "assets/d.json",
// };

// const dogLottie = lottie.loadAnimation(dogLottieElem);

// gsap.to(dogLottie, {
//   scrollTrigger: {
//     trigger: "#dog",
//     scroll: "body",
//     scrub: 1,
//     markers:true,
//     start: "top 25%",
//     end: "bottom -350%",   
//     onUpdate: (self) => {
//       const progress = self.progress;
//       dogLottie.goToAndStop(progress * dogLottie.totalFrames, true);
//     },
//   },
//   ease: "power1.inOut",
// });

// // elephant Lottie
// const elephantLottieElem = {
//   container: document.getElementById("elephant"),
//    renderer: "svg",
//   loop: true,
//   autoplay: false,
//   path: "assets/e.json",
// };

// const elephantLottie = lottie.loadAnimation(elephantLottieElem);

// gsap.to(elephantLottie, {
//   scrollTrigger: {
//     trigger: "#elephant",
//     scroll: "body",
//     scrub: 1,
//     markers:true,
//     start: "top 25%",
//     end: "bottom -350%",   
//     onUpdate: (self) => {
//       const progress = self.progress;
//       elephantLottie.goToAndStop(progress * elephantLottie.totalFrames, true);
//     },
//   },
//   ease: "power1.inOut",
// });
// //frog Lottie
// const frogLottieElem = {
//   container: document.getElementById("frog"),
//    renderer: "svg",
//   loop: true,
//   autoplay: false,
//   path: "assets/f.json",
// };

// const frogLottie = lottie.loadAnimation(frogLottieElem);
// // gsap.to(frogLottie, {
// //   scrollTrigger: {
// //     trigger: "#frog",
// //     scroll: "body",
// //     scrub: 1,
// //     markers:true,
// //     start: "top 25%",
// //     end: "bottom -350%",   
// //     onUpdate: (self) => {
// //       const progress = self.progress;
// //       frogLottie.goToAndStop(progress * frogLottie.totalFrames, true);
// //     },
// //   },
// //   ease: "power1.inOut",
// // });
// gsap.to(frogLottie, {

//   // scrollTrigger: {
//   //   trigger: "#frog",
//   //   scroll: "body",
//   //   scrub: 1,
//   //   markers:true,
//   //   start: "top 25%",
//   //   end: "bottom -350%",   
   
//   // },
//   onUpdate: (self) => {
//       const progress = self.progress;
//       frogLottie.goToAndStop(progress * frogLottie.totalFrames, true);
//     },
//   ease: "power1.inOut",
// });

// horizontal scroll

let scrollSections = gsap.utils.toArray(".alphabet-card");

gsap.to(scrollSections, {
  xPercent: -100 * (scrollSections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (scrollSections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});


