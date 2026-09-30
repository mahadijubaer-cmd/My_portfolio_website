import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined' && !navigator.userAgent.includes('jsdom')) {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}
export { gsap, ScrollTrigger, SplitText };
