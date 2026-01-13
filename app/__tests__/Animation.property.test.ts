// Property 9: Animation Minimalism
// Validates: Requirement 2.5

import fs from 'fs';
import path from 'path';

describe('Property 9: Animation Minimalism', () => {
    it('should verify reduced motion support in CSS', () => {
        const globalsPath = path.join(process.cwd(), 'app/globals.css');
        const content = fs.readFileSync(globalsPath, 'utf8');

        expect(content).toContain('@media (prefers-reduced-motion: reduce)');
    });

    it('should verify moderate transition durations in design system', () => {
        const dsPath = path.join(process.cwd(), 'app/design-system.css');
        const content = fs.readFileSync(dsPath, 'utf8');

        // We shouldn't see excessively long transitions like 1s or 2s for standard interactions
        // Standard is usually 150ms - 500ms
        expect(content).toContain('--transition-normal: 300ms');
    });
});
