import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

// Static page to create or edit a Vaga (RF08, RF09)
export default function CreateVagaPage({ mode }){
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = mode === 'edit' || Boolean(id)

  // Static form state (no persistence yet)
  const [titulo, setTitulo] = useState('')
  const [disciplina, setDisciplina] = useState('')
  const [professor, setProfessor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [requisitos, setRequisitos] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate save/publication
    alert(isEdit ? 'Vaga editada (simulação)' : 'Vaga publicada (simulação)')
    navigate('/admin')
  }

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-3xl mx-auto space-y-4 sm:space-y-6">
  <div className="rounded-xl md:rounded-2xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-tight">
            {isEdit ? 'Editar Vaga' : 'Criar Nova Vaga'}
          </h1>
          <p className="text-sm text-gray-300 mb-5 sm:mb-6 leading-relaxed">
            Preencha os campos abaixo e clique em {isEdit ? 'Salvar' : 'Publicar Vaga'}. (Formulário estático para demonstração)
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Título da Vaga */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="titulo">Título da Vaga</label>
              <input
                id="titulo"
                type="text"
                required
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70"
                placeholder="Ex.: Monitor de Estruturas de Dados"
              />
            </div>

            {/* Disciplina */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="disciplina">Disciplina</label>
              <input
                id="disciplina"
                type="text"
                required
                value={disciplina}
                onChange={(e) => setDisciplina(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70"
                placeholder="Ex.: Estruturas de Dados"
              />
            </div>

            {/* Professor Responsável (select estático) */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="professor">Professor Responsável</label>
              <select
                id="professor"
                required
                value={professor}
                onChange={(e) => setProfessor(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70"
              >
                <option value="" disabled>Selecione um professor</option>
                <option value="Prof. João Silva">Prof. João Silva</option>
                <option value="Profa. Mariana Souza">Profa. Mariana Souza</option>
                <option value="Prof. Carlos Pereira">Prof. Carlos Pereira</option>
              </select>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                required
                rows={4}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70 resize-y"
                placeholder="Descreva as atividades e responsabilidades da monitoria."
              />
            </div>

            {/* Requisitos */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="requisitos">Requisitos</label>
              <textarea
                id="requisitos"
                required
                rows={3}
                value={requisitos}
                onChange={(e) => setRequisitos(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70 resize-y"
                placeholder="Ex.: Média mínima 8.0, ter cursado a disciplina, disponibilidade de 10h/semana, ..."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
              <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium">
                {isEdit ? 'Salvar' : 'Publicar Vaga'}
              </button>
              <button type="button" onClick={() => navigate('/admin')} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  )
}
