import gsap from 'gsap';

export function animate(target, animations = {}, defaults = {}, direction = 'to') {
    gsap.defaults(defaults)
    switch (direction) {
        case 'from':
            return gsap.from(target, animations);
        default:
            return gsap.to(target, animations); 
    }
}