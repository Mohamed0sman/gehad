// Integration Test: Page Layouts
// Validates: 9.4

import fs from 'fs';
import path from 'path';

describe('Integration Test: Page Layouts', () => {
    // We want to verify that all major page components are being used or are structured correctly
    const pages = [
        'components/AboutHero.tsx',
        'components/ProgramsHero.tsx',
        'components/BlogHero.tsx',
        'components/ContactHero.tsx'
    ];

    pages.forEach(file => {
        it(`should verify proper import structure in ${file}`, () => {
            const filePath = path.join(process.cwd(), file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');

                // Should use common UI components
                expect(content).toContain("import Button from '@/components/Button'");

                // Should not use decorative icons (strict check)
                // We relaxed this rule for specific functional icons if needed, but HeroIcons generally removed
                expect(content).not.toContain("@heroicons/react");
            }
        });
    });
});
