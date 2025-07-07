// Temporary placeholder icons until proper icon system is configured
import type { ComponentType } from 'svelte';

// Simple SVG icon component factory
function createIcon(path: string): ComponentType {
  return class {
    constructor(target: any, props: any) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.className.baseVal = props.class || '';
      
      const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathElement.setAttribute('d', path);
      svg.appendChild(pathElement);
      
      target.appendChild(svg);
    }
  } as any;
}

// Export placeholder icons
export const IconBrain = createIcon('M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0V4.5A2.5 2.5 0 0 1 9.5 2Z');
export const IconEye = createIcon('M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z');
export const IconTarget = createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z');
export const IconGitBranch = createIcon('M6 3v12a3 3 0 0 0 3 3h6');
export const IconRadar = createIcon('M19.07 4.93A10 10 0 0 0 4.93 19.07');
export const IconAlertTriangle = createIcon('M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z');
export const IconDatabase = createIcon('M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3');
export const IconNetwork = createIcon('M16 18l2-2-2-2M8 6l-2 2 2 2');
export const IconShield = createIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z');
export const IconMenu = createIcon('M3 12h18M3 6h18M3 18h18');
export const IconChevronRight = createIcon('M9 18l6-6-6-6');
export const IconChevronDown = createIcon('M6 9l6 6 6-6');
export const IconCheck = createIcon('M20 6L9 17l-5-5');
export const IconX = createIcon('M18 6L6 18M6 6l12 12');
export const IconClock = createIcon('M12 6v6l4 2');
export const IconLaptop = createIcon('M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16');
export const IconBuilding = createIcon('M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z');
export const IconArrowUpRight = createIcon('M7 7h10v10M7 17L17 7');
export const IconBriefcase = createIcon('M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16');
export const IconUsers = createIcon('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2');
export const IconHeart = createIcon('M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
export const IconGlobe = createIcon('M21.54 15H17a2 2 0 0 0-2 2v4.54');
export const IconZap = createIcon('M13 2L3 14h9l-1 8 10-12h-9l1-8z');
export const IconSettings = createIcon('M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z');
export const IconPalette = createIcon('M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5h1.77C19.1 17 22 14.1 22 10.5 22 5.81 17.79 2 12 2z');