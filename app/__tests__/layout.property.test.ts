// Property 1: Layout System Consistency
// Validates: Requirements 1.1, 1.2, 1.4, 1.5

import fs from 'fs';
import path from 'path';

describe('Property 1: Layout System Consistency', () => {
    it('should verify global CSS defines design tokens', () => {
        const designSystemPath = path.join(process.cwd(), 'app/design-system.css');
        const content = fs.readFileSync(designSystemPath, 'utf8');

        // Verify spacing tokens
        expect(content).toContain('--spacing-md:');
        expect(content).toContain('--spacing-xl:');

        // Verify typography tokens
        expect(content).toContain('--font-primary:');
        expect(content).toContain('--text-h1:');

        // Verify professional color palette
        expect(content).toContain('--color-primary-500:');
        expect(content).toContain('--color-accent-emerald-500:');
    });

    it('should verify tailwind config uses CSS variables', () => {
        const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js');
        const content = fs.readFileSync(tailwindConfigPath, 'utf8');

        // Verify mapping
        expect(content).toContain('var(--color-primary-500)');
        expect(content).toContain('var(--spacing-md)');
        expect(content).toContain('var(--font-primary)');
    });
});
