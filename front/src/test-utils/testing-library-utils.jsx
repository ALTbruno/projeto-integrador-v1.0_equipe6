import { render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import React, { Component } from 'react'

const renderWithContext = (ui, teste) => render(ui, {wrapper: BrowserRouter, ...teste});

export * from '@testing-library/react';
export {renderWithContext as render};
