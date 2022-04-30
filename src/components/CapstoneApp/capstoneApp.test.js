import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CapstoneApp } from '.';

// Arrange
const setup = () => { render(<CapstoneApp/>) };
const getShowButton = () => screen.getByRole('button', { name: /show/i })
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

describe('Acceptance Criteria.', () => {
  it('When the user enters the app, the app should show the Picture of the Day.', async () => {
    setup();

    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
    expect(screen.queryByText(/There's no image of that day, yet.../i)).not.toBeInTheDocument();
    // TODO: Read https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
  });

  it('When the user selects a specific date with the format YYYY-MM-DD, the app should show the picture of the day for the given date.', async () => {
    setup();

    const dateInputElement = screen.getByLabelText('image-date-input');
    const showButtonElement = screen.getByRole('button', { name: /show/i });

    expect(showButtonElement).toBeInTheDocument();  // button is present
    /** TO DO: Check this issue */
    // userEvent.type doesn't work the the same way with date inputs (next line)
    // userEvent.type(dateInputElement, { target: { value: '2022-04-28' } });
    // userEvent.type(dateInputElement, '2022-04-28');
    /** End of issue */

    fireEvent.change(dateInputElement, { target: { value: '2022-04-04' } });
    await userEvent.click(showButtonElement);

    await waitFor(() => {
      expect(screen.getByText(/2022-04-04/)).toBeInTheDocument();
      // expect(screen.getByText(/A Vortex Aurora over Iceland/i)).toBeInTheDocument(); // image of the day 2022-04-04
    });
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  // Use msw
  it('When the app fetches the API, and there is an unexpected error, the app should show a message: "There was an error, please try again."', () => {
    // There was an error, please try again.
  });
  
  it('When the user selects an invalid date value and clicks on the show button, the app should show a message from the API response (e.g., a day after the current date.)', async () => {
    setup();

    const dateInputElement = screen.getByLabelText('image-date-input');
    const showButtonElement = getShowButton();
    // test an incorrect date
    fireEvent.change(dateInputElement, { target: { value: '2022-05-24' } });
    await userEvent.click(showButtonElement);
    
    await waitFor(() => {
      // TO DO: From mocks handlers config -test as well-
      // expect(screen.getByText(/Lyrid of the Lake/i)).toBeInTheDocument();
      expect(screen.getByText(/Date must be between Jun 16, 1995 and/i)).toBeInTheDocument();
    });
    
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});