import { CapstoneApp } from '.';
import { render, screen } from '@testing-library/react';

// Arrange
const setup = () => { render(<CapstoneApp/>) };

describe('Render correctly the header, footer and main content in the app.', () => {
  it('Renders the Capstone App Component', () => {
    setup();
    const projectBannerElement = screen.getByRole('banner');
    // screen.debug(projectBannerElement);
    expect(projectBannerElement).toBeInTheDocument();
  });

  it('Header should render the title of the project (on h1 header)', () => {
    setup();
    
    const titleElement = screen.getByRole('heading', { name: /hell's capstone project/i });
    
    expect(titleElement).toBeInTheDocument();
  });

  it('Should render a main section', () => {
    setup();

    const mainSectionElement = screen.getByRole('main');
    
    expect(mainSectionElement).toBeInTheDocument();
  });

  it('Should render a footer section', () => {
    setup();
    const footerElement = screen.getByText('Project created during Wizeline Academy React Testing Bootcamp', { exact: true });
    // screen.debug(footerElement);
    expect(footerElement).toBeInTheDocument();
  });
});