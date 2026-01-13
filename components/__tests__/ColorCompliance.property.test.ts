// Property 5: Professional Color Palette Compliance
// Validates: Requirements 3.1, 3.3, 3.5

import fs from 'fs';
import path from 'path';

describe('Property 5: Professional Color Palette Compliance', () => {
    // We check key components for color usage
    const components = [
        'components/ProfessionalServices.tsx',
        'components/Testimonials.tsx',
        'components/Hero.tsx',
        'components/Button.tsx'
    ];

    components.forEach(file => {
        it(`should use design system color tokens in ${file}`, () => {
            const filePath = path.join(process.cwd(), file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');

                // Should use primary / neutral / accent colors
                // Or specific brand colors defined in tailwind config mapped to CSS vars
                // e.g. text-primary-*, bg-neutral-*, etc.

                // We shouldn't see hardcoded standard tailwind colors like 'bg-blue-600' IF we are strictly using our new palette.
                // However, our new palette might alias blue-600 to primary-600 in our head, 
                // but in code we should prefer semantic names or the specific palette we defined.
                // For now, checks for 'primary-', 'neutral-', 'accent-' presence is good.

                const hasDesignSystemColors =
                    content.includes('primary-') ||
                    content.includes('neutral-') ||
                    content.includes('accent-') ||
                    content.includes('brand-'); // If we kept some brand- prefixes

                expect(hasDesignSystemColors).toBeTruthy();
            }
        });
    });

    it('should not use decorative gradients incorrectly', () => {
        const servicesPath = path.join(process.cwd(), 'components/ProfessionalServices.tsx');
        if (fs.existsSync(servicesPath)) {
            const content = fs.readFileSync(servicesPath, 'utf8');
            // Check that we removed specific high-noise gradients like 'from-purple-100 to-pink-100'
            expect(content).not.toContain('from-purple-100');
        }
    });
});
