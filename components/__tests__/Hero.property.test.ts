// Property 2: Icon-Free Design Validation
// Validates: Requirements 2.1, 2.3, 2.5
// Property 4: Typography System Hierarchy
// Validates: Requirements 3.2, 5.1, 5.3, 5.4

import fs from 'fs';
import path from 'path';

describe('Design Properties (Hero)', () => {
    const heroPath = path.join(process.cwd(), 'components/Hero.tsx');
    const heroContent = fs.readFileSync(heroPath, 'utf8');

    describe('Property 2: Icon-Free Design Validation', () => {
        it('should not use @heroicons/react', () => {
            expect(heroContent).not.toContain('@heroicons/react');
        });

        it('should use text-based alternatives for stats/features', () => {
            // We look for typographic elements replacing what were likely icons
            expect(heroContent).toContain('text-display'); // Using display font
            expect(heroContent).toContain('font-heading');
        });
    });

    describe('Property 4: Typography System Hierarchy', () => {
        it('should use correct heading hierarchy', () => {
            // H1 should be present with display classes
            expect(heroContent).toContain('h1');
            expect(heroContent).toContain('text-display');
        });

        it('should use design system spacing tokens or similar utils', () => {
            expect(heroContent).toContain('mb-8');
            expect(heroContent).toContain('mb-12');
        });
    });
});
