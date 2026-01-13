// Property 7: Responsive Adaptation
// Validates: Requirements 4.1, 4.2

import fs from 'fs';
import path from 'path';

describe('Property 7: Responsive Adaptation', () => {

    it('should verify global CSS contains mobile optimizations', () => {
        const globalsPath = path.join(process.cwd(), 'app/design-system.css');
        const content = fs.readFileSync(globalsPath, 'utf8');

        // Check for mobile media query
        expect(content).toContain('@media (max-width: 640px)');

        // Check for touch target sizing adjustment
        // "min-height: 48px" inside media query or generally
        expect(content).toContain('min-height: 48px');
    });

    it('should verify components use responsive grid layouts', () => {
        const componentFiles = [
            'components/ProfessionalServices.tsx',
            'components/Testimonials.tsx',
            'components/ProfessionalShowcase.tsx'
        ];

        componentFiles.forEach(file => {
            const filePath = path.join(process.cwd(), file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                // Look for responsive grid classes (md: or lg:)
                const hasResponsiveGrid = content.includes('md:grid-cols') || content.includes('lg:grid-cols') || content.includes('sm:flex-row');
                expect(hasResponsiveGrid).toBeTruthy();
            }
        });
    });
});
