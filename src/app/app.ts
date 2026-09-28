import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SupabaseService } from './core/supabase';

interface ItemNav {
  path: string;
  rotulo: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly supabase = inject(SupabaseService);

  protected readonly titulo = 'Zecki Portfolio';
  protected readonly tagline = 'Vitrine dos 12 cases do roadmap, com métricas e o que aprendi';
  protected readonly semana = 12;
  protected readonly nav: ItemNav[] = [
    { path: '/cases', rotulo: 'Cases' },
  ];

  protected readonly menuAberto = signal(false);
  protected readonly modoDemo = this.supabase.modoDemo;
  protected readonly erro = this.supabase.erro;

  protected alternarMenu(): void {
    this.menuAberto.update((v) => !v);
  }
}
