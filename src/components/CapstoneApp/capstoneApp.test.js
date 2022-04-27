import { CapstoneApp } from '.';
import { render, screen } from '@testing-library/react';

describe('Capstone App', () => {
  it('Renders the Capstone App Component', () => {
    render(<CapstoneApp />);
    const projectBannerElement = screen.getByRole('banner');
    // screen.debug(projectBannerElement);
    expect(projectBannerElement).toBeInTheDocument();
  });

  it('Header should render the title of the project (on h1 header)', () => {
    render(<CapstoneApp />);
    const projectTitleElement = screen.getByRole('heading', { name: /hell's capstone project/i });
    // screen.debug(projectTitleElement);
    expect(projectTitleElement).toBeInTheDocument();
  });
});