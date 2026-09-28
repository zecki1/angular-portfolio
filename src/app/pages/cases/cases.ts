import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../core/supabase';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.html',
  styleUrl: './cases.css',
})
export class CasesPage {
  private readonly supabase = inject(SupabaseService);

  protected readonly titulo = 'Cases';
  protected readonly descricao = 'Os 12 projetos, com screenshot, métricas e o que aprendi.';
  protected readonly slugProjeto = 'portfolio';

  protected readonly conectando = signal(false);
  protected readonly conexaoOk = signal<boolean | null>(null);

  /** Health-check contra o projeto Supabase compartilhado. */
  protected async verificar(): Promise<void> {
    this.conectando.set(true);
    this.conexaoOk.set(await this.supabase.verificarConexão());
    this.conectando.set(false);
  }
}
