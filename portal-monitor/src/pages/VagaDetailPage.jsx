import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { mockVagas } from '../data/mockData'
import PageContainer from '../components/PageContainer'

export default function VagaDetailPage(){
  const { id } = useParams()
  const navigate = useNavigate()

  const vaga = mockVagas.find(v => v.id === id) || mockVagas[0]

  return (
    <PageContainer>
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-slate-700 rounded-lg p-8 shadow-lg">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">{vaga.titulo}</h1>
            <div className="text-sm text-gray-300 mt-1">Curso: {vaga.curso} • ID da vaga: {vaga.id}</div>
          </div>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Descrição</h2>
            <p className="text-gray-300 text-sm">{vaga.descricao}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Tópicos</h2>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              {vaga.tags && vaga.tags.map((t, i) => (
                <li key={i}>Atividades relacionadas a {t} e suporte em aulas práticas.</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Requisitos</h2>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>Ter disponibilidade para atuar como monitor durante o almoço entre 11h40 e 13h30.</li>
              <li>Ter concluído com êxito as disciplinas relacionadas e atingir uma nota acima de 8.5 na disciplina.</li>
              <li>Boa comunicação e habilidades interpessoais.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Professor Responsável</h2>
            <p className="text-gray-300 text-sm">{vaga.professor} — responsável pela seleção dos monitores.</p>
          </section>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate(`/vaga/${vaga.id}/apply`)} className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition">Candidatar-se</button>
            <button onClick={() => navigate(-1)} className="bg-slate-600 text-gray-200 px-4 py-2 rounded-md">Voltar</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
