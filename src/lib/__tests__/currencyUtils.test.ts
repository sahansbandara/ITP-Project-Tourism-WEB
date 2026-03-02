/**
 * @jest-environment node
 */
import { formatPrice } from '../CurrencyContext';

describe('formatPrice', () => {
    const rate = 310;

    it('should format LKR price with locale string', () => {
        const result = formatPrice(31000, 'LKR', rate);
        expect(result).toContain('LKR');
        expect(result).toContain('31');
    });

    it('should convert and format USD price', () => {
        const result = formatPrice(31000, 'USD', rate);
        expect(result).toContain('USD');
        expect(result).toContain('100');
    });

    it('should handle zero price', () => {
        expect(formatPrice(0, 'LKR', rate)).toContain('0');
        expect(formatPrice(0, 'USD', rate)).toContain('0');
    });

    it('should round USD conversion to nearest integer', () => {
        // 15500 / 310 = 50
        const result = formatPrice(15500, 'USD', rate);
        expect(result).toContain('50');
    });

    it('should handle large prices', () => {
        const result = formatPrice(1000000, 'LKR', rate);
        expect(result).toContain('LKR');
        expect(result).toContain('1,000,000');
    });
});
