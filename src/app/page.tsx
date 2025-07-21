import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8 mt-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Propagación de Virus Informático en Redes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Análisis matemático de la propagación de malware usando el modelo SIR
          y ecuaciones diferenciales ordinarias
        </p>
      </div>

      {/* Navegación rápida */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Explorar la Simulación</h2>
        <Link
          href="/chart"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Ver Simulación Interactiva →
        </Link>
      </div>

      {/* ¿Qué es el modelo SIR? */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Qué es el Modelo SIR?
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            El modelo SIR es un modelo epidemiológico que describe la
            propagación de enfermedades infecciosas en una población. En nuestro
            caso, lo adaptamos para estudiar la propagación de virus
            informáticos en redes de computadoras.
          </p>
          <p className="text-gray-700 mb-6">
            El modelo divide la población total (N) en tres compartimentos:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">S - Susceptibles</h3>
              <p className="text-blue-700">
                Computadoras vulnerables que pueden ser infectadas
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold text-red-800 mb-2">I - Infectadas</h3>
              <p className="text-red-700">
                Computadoras que contienen el virus y pueden propagarlo
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">R - Recuperadas</h3>
              <p className="text-green-700">
                Computadoras que han sido limpiadas y son inmunes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecuaciones Diferenciales */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Sistema de Ecuaciones Diferenciales
        </h2>

        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            El modelo SIR se describe mediante el siguiente sistema de
            ecuaciones diferenciales ordinarias:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg font-mono text-lg mb-6">
            <div className="space-y-3">
              <div>dS/dt = -β × S × I / N</div>
              <div>dI/dt = β × S × I / N - γ × I</div>
              <div>dR/dt = γ × I</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Parámetros:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>β (beta):</strong> Tasa de transmisión del virus
                </li>
                <li>
                  <strong>γ (gamma):</strong> Tasa de recuperación
                </li>
                <li>
                  <strong>N:</strong> Población total de computadoras
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Condiciones:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>S(0) = N - 1 (casi toda la población es susceptible)</li>
                <li>I(0) = 1 (una computadora infectada inicial)</li>
                <li>R(0) = 0 (ninguna recuperada al inicio)</li>
                <li>S + I + R = N (conservación de la población)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interpretación de las Ecuaciones */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Interpretación de las Ecuaciones
        </h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="font-bold text-blue-800 mb-2">
              Ecuación de Susceptibles: dS/dt = -β × S × I / N
            </h3>
            <p className="text-gray-700">
              La tasa de cambio de computadoras susceptibles es negativa,
              disminuye proporcionalmente al número de contactos entre
              susceptibles e infectadas.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="font-bold text-red-800 mb-2">
              Ecuación de Infectadas: dI/dt = β × S × I / N - γ × I
            </h3>
            <p className="text-gray-700">
              El cambio de infectadas tiene dos términos: uno positivo (nuevas
              infecciones) y uno negativo (recuperaciones). El término βSI/N
              representa nuevas infecciones, mientras que γI representa las
              recuperaciones.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="font-bold text-green-800 mb-2">
              Ecuación de Recuperadas: dR/dt = γ × I
            </h3>
            <p className="text-gray-700">
              Las recuperadas aumentan a una tasa proporcional al número de
              infectadas, donde γ es la tasa de detección y limpieza del virus.
            </p>
          </div>
        </div>
      </section>

      {/* Método de Resolución */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Método de Resolución Numérica
        </h2>

        <div className="space-y-6">
          <p className="text-gray-700">
            El sistema de ecuaciones diferenciales SIR no tiene una solución
            analítica cerrada, por lo que utilizamos métodos numéricos para
            resolverlo.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="font-bold text-amber-800 mb-3">Método de Euler</h3>
            <p className="text-amber-700 mb-4">
              Aproximamos la solución usando el método de Euler con paso fijo:
            </p>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <div>S(t+Δt) = S(t) + Δt × (-β × S(t) × I(t) / N)</div>
              <div>I(t+Δt) = I(t) + Δt × (β × S(t) × I(t) / N - γ × I(t))</div>
              <div>R(t+Δt) = R(t) + Δt × (γ × I(t))</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Ventajas del Método de Euler:</h4>
              <ul className="text-sm space-y-1">
                <li>• Fácil de implementar</li>
                <li>• Computacionalmente eficiente</li>
                <li>• Buena para visualizaciones en tiempo real</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Parámetros de la Simulación:</h4>
              <ul className="text-sm space-y-1">
                <li>• Δt = 0.5 (paso de tiempo)</li>
                <li>• N = 10,000 computadoras</li>
                <li>• β = 0.6 (alta transmisión)</li>
                <li>• γ = 0.1 (recuperación lenta)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Aplicaciones del Modelo
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-3">
              Seguridad Informática:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Predicción de propagación de malware</li>
              <li>• Evaluación de estrategias de contención</li>
              <li>• Planificación de recursos de seguridad</li>
              <li>• Análisis de vulnerabilidades de red</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Epidemiología:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Propagación de enfermedades infecciosas</li>
              <li>• Efectividad de vacunación</li>
              <li>• Políticas de salud pública</li>
              <li>• Modelado de pandemias</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Explora la Simulación Interactiva
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Observa cómo se propaga el virus en tiempo real y experimenta con
          diferentes parámetros
        </p>
        <Link
          href="/chart"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
        >
          Iniciar Simulación
        </Link>
      </div>
    </div>
  );
}
