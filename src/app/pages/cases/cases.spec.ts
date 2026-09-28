import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CasesPage } from './cases';

describe('CasesPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CasesPage],
      providers: [provideRouter([])],
    });
  });

  it('deve criar e expor o título da página', () => {
    const fixture = TestBed.createComponent(CasesPage);
    expect(fixture.componentInstance.titulo).toBe('Cases');
  });
});
