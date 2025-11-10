import gsap, { Circ } from 'gsap';

// f для поворота круга
export const rotateCircle = (length: number, index: number): void => {
  console.log(index);

  // прячем заголовок
  gsap.to(`.pag_a8964dbe_header`, {
    opacity: 0
  });

  // поворачиваем круг
  gsap.to(`.ref_697a371`, {
    delay: 0.5,
    duration: 1.5,
    rotation: -(360 / length) * index,
    ease: Circ.easeOut
  });

  //поворачиваем dot
  gsap.to(`.pag_a8964dbe`, {
    delay: 0.1,
    duration: 1,
    rotation: (360 / length) * index,
    ease: Circ.easeOut,
    onComplete: () => {
      gsap.to(`.pag_a8964dbe_header`, { opacity: 1, duration: 2 });
    }
  });
};
