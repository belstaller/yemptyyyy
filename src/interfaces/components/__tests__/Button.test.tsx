import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button pink styling', () => {
  // AC-1: Button background color is set to pink
  it('has a pink background color by default', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    expect(btn).toHaveStyle({ backgroundColor: '#E91E63' });
  });

  // AC-2: Button text has sufficient contrast against the pink background
  it('renders white text for sufficient contrast against pink background', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    expect(btn).toHaveStyle({ color: '#FFFFFF' });
  });

  // AC-3: Hover and active states reflect a darker/lighter shade of pink
  it('shows a darker pink on hover', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    fireEvent.mouseEnter(btn);
    expect(btn).toHaveStyle({ backgroundColor: '#C2185B' });
  });

  it('shows the darkest pink on active (mousedown)', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    fireEvent.mouseEnter(btn);
    fireEvent.mouseDown(btn);
    expect(btn).toHaveStyle({ backgroundColor: '#880E4F' });
  });

  it('returns to base pink after mouseleave', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);
    expect(btn).toHaveStyle({ backgroundColor: '#E91E63' });
  });

  // AC-4: Disabled state maintains a muted pink appearance
  it('shows muted pink background when disabled', () => {
    render(<Button disabled>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    expect(btn).toHaveStyle({ backgroundColor: '#F8BBD9' });
  });

  it('shows muted text color when disabled', () => {
    render(<Button disabled>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    expect(btn).toHaveStyle({ color: '#9E9E9E' });
  });

  it('does not change background on hover when disabled', () => {
    render(<Button disabled>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    fireEvent.mouseEnter(btn);
    expect(btn).toHaveStyle({ backgroundColor: '#F8BBD9' });
  });

  // AC-5: Style is consistent across all screen sizes
  it('uses fluid sizing with no hardcoded fixed pixel width', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByTestId('pink-button');
    const style = btn.style;
    // width: 100% and maxWidth: 100% ensure fluid/responsive layout
    expect(style.width).toBe('100%');
    expect(style.maxWidth).toBe('100%');
    // padding uses em units (relative), not px
    expect(style.padding).toContain('em');
    // font size is relative
    expect(style.fontSize).toContain('rem');
  });
});
