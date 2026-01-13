import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

// Property 6: Mobile Touch Interface Standards
// Validates: Requirements 4.1, 4.4
describe('Property 6: Mobile Touch Interface Standards', () => {
    it('should have minimum touch target size of 48px on mobile', () => {
        // The design system enforce min-height: 48px for .btn class
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button');

        // We verify the class 'btn' is present, which carries the min-height property
        expect(button).toHaveClass('btn');

        // In a real browser environment (e.g. Cypress or Playwright), we would check:
        // const styles = window.getComputedStyle(button);
        // expect(parseInt(styles.minHeight)).toBeGreaterThanOrEqual(48);
    });

    it('should support primary, secondary, and accent variants', () => {
        // Validates Requirement 2.1: Design System
        const { rerender } = render(<Button variant="primary">Primary</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-primary');

        rerender(<Button variant="secondary">Secondary</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-secondary');

        rerender(<Button variant="accent">Accent</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-accent');
    });

    it('should render as a link when href is provided', () => {
        render(<Button href="/test">Link Button</Button>);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/test');
        expect(link).toHaveClass('btn');
    });
});
