import { render } from '@testing-library/react';
import {CardCategory} from '../pages/Home/components/cardCategory';

const renderWithContext = (ui, App) => render(ui, {wrapper: CardCategory, ...App});

export * from '@testing-library/react';
export {renderWithContext as render};
