import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import StartPage from './StartPage';
import '@testing-library/jest-dom';

describe('Start Page', () => {
  test('should select category and difficulty, then trigger getQuizOptions', () => {
    // Mock the getQuizOptions function
    const mockGetQuizOptions = vi.fn();

    render(<StartPage getQuizOptions={mockGetQuizOptions} />);

    // Select category and difficulty in Select Tags by data-testid
    const selectCategory = screen.getByTestId('category');
    const selectDifficulty = screen.getByTestId('difficulty');

    // Choose specific options
    fireEvent.change(selectCategory, {
      target: { value: '9' },
    });
    fireEvent.change(selectDifficulty, {
      target: { value: 'easy' },
    });

    // Test if the options were applied
    expect(screen.getByText('General Knowledge')).toBeInTheDocument();
    expect(screen.getByText('Easy')).toBeInTheDocument();

    // Trigger getQuizOptions
    const startButton = screen.getByText('Start quiz');
    fireEvent.click(startButton);

    // Assert that getQuizOptions was called with the correct arguments
    expect(mockGetQuizOptions).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
    );
  });
});
