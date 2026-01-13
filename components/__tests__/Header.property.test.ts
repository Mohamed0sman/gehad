// Property 10: Navigation System Consistency
// Validates: Requirements 8.1, 8.2, 8.3, 8.5

import fs from 'fs';
import path from 'path';

describe('Property 10: Navigation System Consistency', () => {
    it('should ensure Header does not use icon libraries for navigation', () => {
        const headerPath = path.join(process.cwd(), 'components/Header.tsx');
        const content = fs.readFileSync(headerPath, 'utf8');

        // Should not import icon libraries for basic navigation
        expect(content).not.toContain('@heroicons/react');

        // Should use text for menu toggle
        expect(content).toContain('copy.menu.open');
        expect(content).toContain('copy.menu.close');
    });

    it('should include RTL support', () => {
        const headerPath = path.join(process.cwd(), 'components/Header.tsx');
        const content = fs.readFileSync(headerPath, 'utf8');

        // Ensure language context is used for RTL logic if needed, 
        // though the design system handles direction via [dir="rtl"] global css mostly.
        // Here we check if language context is hooked up.
        expect(content).toContain('useLanguage');
    });
});
