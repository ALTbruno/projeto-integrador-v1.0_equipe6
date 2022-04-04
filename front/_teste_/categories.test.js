import React from 'react';
import ResultByCategory from '../src/components/resultSearchByCategory/index'
import { render, screen, waitFor, fireEvent } from '../src/test-utils/testing-library-utils';

describe('teste de integração na página de categorias',  () => {
    it('criar um novo usuário',() => {
        render(<ResultByCategory />);
        
    })
})