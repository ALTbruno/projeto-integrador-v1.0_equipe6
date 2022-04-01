import { render } from '@testing-library/react';
import {RegisterForm} from '../components/registerform/index';
import React, { Component } from 'react'

const renderWithContext = (ui, register) => render(ui, {wrapper: RegisterForm, ...register});

export * from '@testing-library/react';
export {renderWithContext as render};
