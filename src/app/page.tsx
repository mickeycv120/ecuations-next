import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <header className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Modelado Matemático de la Propagación
            <span className="block text-blue-600">de un Virus Informático</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Análisis riguroso de la propagación de malware en redes de
            computadoras utilizando el modelo epidemiológico SIR y ecuaciones
            diferenciales ordinarias
          </p>
          <div className="mt-8">
            <Link
              href="/chart"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Explorar Simulación Interactiva
            </Link>
          </div>
        </header>

        {/* ¿Qué es el modelo SIR? */}
        <section className="bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            ¿Qué es el Modelo SIR?
          </h2>
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6 text-center max-w-4xl mx-auto">
              El modelo SIR es un marco matemático epidemiológico que divide la
              población en tres estados mutuamente excluyentes. Adaptado al
              contexto de seguridad informática, modela la dinámica de
              propagación de malware en redes digitales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h3 className="font-bold text-blue-800 mb-3 text-xl">
                Susceptibles
              </h3>
              <p className="text-blue-700 leading-relaxed">
                Computadoras vulnerables sin protección antivirus que pueden ser
                infectadas al entrar en contacto con sistemas comprometidos
              </p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">I</span>
              </div>
              <h3 className="font-bold text-red-800 mb-3 text-xl">
                Infectadas
              </h3>
              <p className="text-red-700 leading-relaxed">
                Sistemas comprometidos que contienen malware activo y pueden
                transmitir la infección a otros dispositivos de la red
              </p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <h3 className="font-bold text-green-800 mb-3 text-xl">
                Recuperadas
              </h3>
              <p className="text-green-700 leading-relaxed">
                Computadoras que han sido limpiadas y patched, adquiriendo
                inmunidad temporal contra el mismo tipo de malware
              </p>
            </div>
          </div>
        </section>

        {/* Sistema de Ecuaciones Diferenciales */}
        <section className="bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Sistema de Ecuaciones Diferenciales
          </h2>

          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6 text-center">
              El modelo SIR se describe matemáticamente mediante el siguiente
              sistema de ecuaciones diferenciales ordinarias acopladas:
            </p>

            <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white p-10 rounded-xl shadow-2xl mb-8 max-w-3xl mx-auto border border-gray-600">
              <div className="space-y-6">
                <div className="text-center text-gray-300 text-lg font-semibold mb-6 tracking-wide">
                  SISTEMA DE ECUACIONES DIFERENCIALES ORDINARIAS
                </div>
                <div className="space-y-5 font-mono text-2xl">
                  <div className="bg-blue-900/30 border-l-4 border-blue-400 pl-6 py-4 rounded-r-lg">
                    <span className="text-blue-300 font-bold">dS/dt</span>
                    <span className="text-white mx-3">=</span>
                    <span className="text-red-300">-β</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-blue-300">S</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-red-300">I</span>
                    <span className="text-white mx-2">/</span>
                    <span className="text-yellow-300">N</span>
                  </div>
                  <div className="bg-red-900/30 border-l-4 border-red-400 pl-6 py-4 rounded-r-lg">
                    <span className="text-red-300 font-bold">dI/dt</span>
                    <span className="text-white mx-3">=</span>
                    <span className="text-red-300">β</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-blue-300">S</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-red-300">I</span>
                    <span className="text-white mx-2">/</span>
                    <span className="text-yellow-300">N</span>
                    <span className="text-white mx-3">-</span>
                    <span className="text-green-300">γ</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-red-300">I</span>
                  </div>
                  <div className="bg-green-900/30 border-l-4 border-green-400 pl-6 py-4 rounded-r-lg">
                    <span className="text-green-300 font-bold">dR/dt</span>
                    <span className="text-white mx-3">=</span>
                    <span className="text-green-300">γ</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-red-300">I</span>
                  </div>
                </div>
                <div className="text-center text-gray-400 text-sm mt-6 italic border-t border-gray-600 pt-4">
                  Modelo SIR adaptado para propagación de malware en redes
                  digitales
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-4 text-xl">
                📊 Parámetros del Modelo
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>β (beta):</strong> Tasa de transmisión del virus
                  (contactos infectivos por unidad de tiempo)
                </li>
                <li>
                  <strong>γ (gamma):</strong> Tasa de recuperación (inverso del
                  período infeccioso medio)
                </li>
                <li>
                  <strong>N:</strong> Población total de computadoras en la red
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 mb-4 text-xl">
                🎯 Condiciones Iniciales
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>S(0) = N - I₀:</strong> Casi toda la población es
                  susceptible inicialmente
                </li>
                <li>
                  <strong>I(0) = I₀:</strong> Pequeño número de sistemas
                  infectados (patient zero)
                </li>
                <li>
                  <strong>R(0) = 0:</strong> Ningún sistema recuperado al inicio
                  del brote
                </li>
                <li>
                  <strong>Invariante:</strong> S(t) + I(t) + R(t) = N ∀t ≥ 0
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interpretación de las Ecuaciones */}
        <section className="bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Interpretación Física de las Ecuaciones
          </h2>

          <div className="space-y-8">
            <div className="border-l-8 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-800 mb-3 text-xl">
                📉 Ecuación de Susceptibles: dS/dt = -β × S × I / N
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La derivada negativa indica que el número de sistemas
                susceptibles <em>decrece monotónicamente</em>. La tasa de
                disminución es proporcional al producto S×I (ley de acción de
                masas), representando la probabilidad de encuentros infectivos
                en la red.
              </p>
            </div>

            <div className="border-l-8 border-red-500 bg-red-50 p-6 rounded-r-lg">
              <h3 className="font-bold text-red-800 mb-3 text-xl">
                📈 Ecuación de Infectadas: dI/dt = β × S × I / N - γ × I
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ecuación de balance con dos términos competitivos: el{" "}
                <strong>flujo de entrada</strong>
                βSI/N (nuevas infecciones) y el <strong>
                  flujo de salida
                </strong>{" "}
                γI (recuperaciones). El signo de dI/dt determina si la epidemia
                crece o decrece localmente.
              </p>
            </div>

            <div className="border-l-8 border-green-500 bg-green-50 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-800 mb-3 text-xl">
                📊 Ecuación de Recuperadas: dR/dt = γ × I
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La población recuperada <em>aumenta monotónicamente</em> a una
                tasa directamente proporcional al número actual de infectados. γ
                representa la eficacia del proceso de detección y limpieza del
                malware.
              </p>
            </div>
          </div>
        </section>

        {/* Número Básico de Reproducción */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg p-10">
          <h2 className="text-4xl font-bold mb-8 text-center">
            🔬 Número Básico de Reproducción (R₀)
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-8 border border-purple-300/20">
              <div className="text-center">
                <div className="text-gray-300 text-lg font-semibold mb-4 tracking-wider uppercase">
                  Número Básico de Reproducción
                </div>
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-5xl font-mono font-bold mb-2 text-yellow-300 tracking-wider">
                    R₀ = β / γ
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-4"></div>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Número promedio de infecciones secundarias producidas por un
                    sistema infectado en una población completamente susceptible
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
                <h3 className="font-bold text-xl mb-4 text-yellow-200 flex items-center">
                  � Ejemplo Numérico
                </h3>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">β =</span>
                    <span className="text-white font-bold">0.6</span>
                    <span className="text-gray-400 text-sm">
                      (tasa transmisión)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-300">γ =</span>
                    <span className="text-white font-bold">0.1</span>
                    <span className="text-gray-400 text-sm">
                      (tasa recuperación)
                    </span>
                  </div>
                  <div className="border-t border-gray-600 pt-2 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-300 font-bold">R₀ =</span>
                      <span className="text-yellow-400 font-bold text-xl">
                        6.0
                      </span>
                      <span className="text-gray-400 text-sm">(crítico)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <h3 className="font-bold text-xl mb-4 text-emerald-200 flex items-center">
                  🎯 Interpretación Crítica
                </h3>
                <div className="space-y-3">
                  <div className="bg-red-900/30 rounded-lg p-3 border-l-4 border-red-400">
                    <p className="text-red-200">
                      <span className="font-mono font-bold">R₀ &gt; 1:</span>
                      <span className="ml-2">
                        Epidemia se propaga exponencialmente
                      </span>
                    </p>
                  </div>
                  <div className="bg-yellow-900/30 rounded-lg p-3 border-l-4 border-yellow-400">
                    <p className="text-yellow-200">
                      <span className="font-mono font-bold">R₀ = 1:</span>
                      <span className="ml-2">Punto crítico de equilibrio</span>
                    </p>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="text-green-200">
                      <span className="font-mono font-bold">R₀ &lt; 1:</span>
                      <span className="ml-2">
                        Epidemia se extingue naturalmente
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Método de Resolución Numérica */}
        <section className="bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🔢 Método de Resolución Numérica
          </h2>

          <div className="mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-amber-800 mb-3 text-xl">
                ⚠️ Ausencia de Solución Analítica
              </h3>
              <p className="text-amber-700">
                El sistema SIR es <strong>no-lineal</strong> debido al término
                βSI, lo que impide encontrar soluciones analíticas cerradas. Se
                requieren métodos numéricos para aproximar la evolución temporal
                del sistema.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-2xl border border-slate-600">
              <h3 className="font-bold text-blue-300 mb-4 text-xl text-center tracking-wide">
                🧮 MÉTODO DE EULER EXPLÍCITO
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                Discretización temporal de primer orden con paso fijo Δt:
              </p>
              <div className="space-y-4 font-mono text-lg">
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                  <div className="text-blue-300 font-semibold mb-2">
                    Susceptibles:
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-200">S</span>
                    <sub className="text-blue-400">n+1</sub>
                    <span className="text-white mx-2">=</span>
                    <span className="text-blue-200">S</span>
                    <sub className="text-blue-400">n</sub>
                    <span className="text-white mx-2">+</span>
                    <span className="text-yellow-300">Δt</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-red-300">-β</span>
                    <span className="text-white mx-1">×</span>
                    <span className="text-blue-200">S</span>
                    <sub className="text-blue-400">n</sub>
                    <span className="text-white mx-1">×</span>
                    <span className="text-red-200">I</span>
                    <sub className="text-red-400">n</sub>
                    <span className="text-white mx-1">/</span>
                    <span className="text-yellow-200">N</span>
                    <span className="text-gray-300">)</span>
                  </div>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                  <div className="text-red-300 font-semibold mb-2">
                    Infectadas:
                  </div>
                  <div className="pl-4">
                    <span className="text-red-200">I</span>
                    <sub className="text-red-400">n+1</sub>
                    <span className="text-white mx-2">=</span>
                    <span className="text-red-200">I</span>
                    <sub className="text-red-400">n</sub>
                    <span className="text-white mx-2">+</span>
                    <span className="text-yellow-300">Δt</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-red-300">β</span>
                    <span className="text-white mx-1">×</span>
                    <span className="text-blue-200">S</span>
                    <sub className="text-blue-400">n</sub>
                    <span className="text-white mx-1">×</span>
                    <span className="text-red-200">I</span>
                    <sub className="text-red-400">n</sub>
                    <span className="text-white mx-1">/</span>
                    <span className="text-yellow-200">N</span>
                    <span className="text-white mx-2">-</span>
                    <span className="text-green-300">γ</span>
                    <span className="text-white mx-1">×</span>
                    <span className="text-red-200">I</span>
                    <sub className="text-red-400">n</sub>
                    <span className="text-gray-300">)</span>
                  </div>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
                  <div className="text-green-300 font-semibold mb-2">
                    Recuperadas:
                  </div>
                  <div className="pl-4">
                    <span className="text-green-200">R</span>
                    <sub className="text-green-400">n+1</sub>
                    <span className="text-white mx-2">=</span>
                    <span className="text-green-200">R</span>
                    <sub className="text-green-400">n</sub>
                    <span className="text-white mx-2">+</span>
                    <span className="text-yellow-300">Δt</span>
                    <span className="text-white mx-2">×</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-green-300">γ</span>
                    <span className="text-white mx-1">×</span>
                    <span className="text-red-200">I</span>
                    <sub className="text-red-400">n</sub>
                    <span className="text-gray-300">)</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4 italic">
                Esquema numérico estable con complejidad computacional O(n)
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">
                ✅ Ventajas del Método
              </h4>
              <ul className="text-sm space-y-2 text-green-700">
                <li>
                  • <strong>Simplicidad:</strong> Fácil implementación
                  computacional
                </li>
                <li>
                  • <strong>Estabilidad:</strong> Convergente para Δt
                  suficientemente pequeño
                </li>
                <li>
                  • <strong>Eficiencia:</strong> Bajo costo computacional O(n)
                </li>
                <li>
                  • <strong>Visualización:</strong> Ideal para simulaciones en
                  tiempo real
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-gray-800">
                ⚙️ Parámetros de Simulación
              </h4>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>
                  • <strong>Δt = 0.5:</strong> Paso temporal (días)
                </li>
                <li>
                  • <strong>N = 10,000:</strong> Población total
                </li>
                <li>
                  • <strong>β = 0.6:</strong> Alta transmisibilidad
                </li>
                <li>
                  • <strong>γ = 0.1:</strong> Recuperación lenta
                </li>
                <li>
                  • <strong>T = 50:</strong> Horizonte temporal (días)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Predicciones del Modelo */}
        <section className="bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            📈 Predicciones Clave del Modelo
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">~7,200</div>
              <div className="text-red-800 font-semibold">
                Pico de Infección
              </div>
              <div className="text-red-600 text-sm mt-2">
                Máximo número de sistemas comprometidos simultáneamente
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8-10</div>
              <div className="text-blue-800 font-semibold">Días al Pico</div>
              <div className="text-blue-600 text-sm mt-2">
                Tiempo hasta alcanzar el máximo de infectados
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">~60</div>
              <div className="text-green-800 font-semibold">Duración Total</div>
              <div className="text-green-600 text-sm mt-2">
                Días hasta extinción práctica de la epidemia
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">72%</div>
              <div className="text-purple-800 font-semibold">Ataque Total</div>
              <div className="text-purple-600 text-sm mt-2">
                Fracción final de la población infectada
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones */}
        <section className="bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            🌟 Aplicaciones del Modelo
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-4 text-xl flex items-center">
                🔒 Seguridad Informática
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>
                  • <strong>Predicción de brotes:</strong> Anticipar la
                  propagación de nuevos malware
                </li>
                <li>
                  • <strong>Estrategias de contención:</strong> Optimizar
                  políticas de aislamiento
                </li>
                <li>
                  • <strong>Planificación de recursos:</strong> Dimensionar
                  equipos de respuesta
                </li>
                <li>
                  • <strong>Análisis de vulnerabilidades:</strong> Identificar
                  puntos críticos de la red
                </li>
                <li>
                  • <strong>Evaluación de defensas:</strong> Cuantificar
                  efectividad de antivirus
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 mb-4 text-xl flex items-center">
                🏥 Epidemiología Clásica
              </h3>
              <ul className="space-y-3 text-green-700">
                <li>
                  • <strong>Modelado de pandemias:</strong> COVID-19, influenza,
                  SARS
                </li>
                <li>
                  • <strong>Políticas de vacunación:</strong> Optimizar
                  cobertura y timing
                </li>
                <li>
                  • <strong>Salud pública:</strong> Diseñar intervenciones
                  no-farmacológicas
                </li>
                <li>
                  • <strong>Vigilancia epidemiológica:</strong> Sistemas de
                  alerta temprana
                </li>
                <li>
                  • <strong>Investigación biomédica:</strong> Ensayos clínicos y
                  drug discovery
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitaciones del Modelo */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-10">
          <h2 className="text-4xl font-bold text-orange-800 mb-8 text-center">
            ⚠️ Limitaciones y Supuestos del Modelo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-orange-800 mb-4 text-xl">
                🔶 Supuestos Simplificadores
              </h3>
              <ul className="space-y-2 text-orange-700">
                <li>
                  • <strong>Mezcla homogénea:</strong> Todos los sistemas tienen
                  igual probabilidad de contacto
                </li>
                <li>
                  • <strong>Población cerrada:</strong> No hay entrada/salida de
                  dispositivos de la red
                </li>
                <li>
                  • <strong>Inmunidad permanente:</strong> Los sistemas
                  recuperados no pueden reinfectarse
                </li>
                <li>
                  • <strong>Parámetros constantes:</strong> β y γ no varían en
                  el tiempo
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-800 mb-4 text-xl">
                🔶 Aspectos No Modelados
              </h3>
              <ul className="space-y-2 text-orange-700">
                <li>
                  • <strong>Topología de red:</strong> Estructura física de
                  conexiones
                </li>
                <li>
                  • <strong>Heterogeneidad:</strong> Diferentes tipos de
                  sistemas y vulnerabilidades
                </li>
                <li>
                  • <strong>Comportamiento adaptativo:</strong> Cambios en
                  patrones de uso
                </li>
                <li>
                  • <strong>Medidas dinámicas:</strong> Activación de firewalls
                  y patches
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg border border-orange-300">
            <p className="text-orange-800 text-center">
              <strong>Nota:</strong> A pesar de estas limitaciones, el modelo
              SIR proporciona
              <em>insights</em> valiosos y sirve como base para modelos más
              sofisticados.
            </p>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🎯 Experimenta con la Simulación Interactiva
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Explora el comportamiento dinámico del modelo SIR modificando
            parámetros en tiempo real. Observa cómo pequeños cambios en β y γ
            pueden alterar dramáticamente la evolución de la epidemia.
          </p>
          <div className="space-y-4">
            <Link
              href="/chart"
              className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
            >
              🚀 Iniciar Simulación Interactiva
            </Link>
            <p className="text-sm opacity-75">
              Controla β, γ, N e I₀ • Visualización en tiempo real • Cálculo
              automático de R₀
            </p>
          </div>
        </section>

        {/* Footer académico */}
        <footer className="text-center text-gray-500 border-t pt-8">
          <p className="text-sm">
            Proyecto Académico • Ecuaciones Diferenciales • Modelo SIR Digital
          </p>
          <p className="text-xs mt-2">
            Implementación en Next.js + TypeScript + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
