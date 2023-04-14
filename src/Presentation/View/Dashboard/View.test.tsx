import { render, screen } from '@testing-library/react';

import Dashboard from './View';

describe('Dashboard', () => {
    it('main test', () => {
        render(<Dashboard />);

        screen.debug();
    });
});