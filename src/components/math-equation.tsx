"use client";

interface MathEquationProps {
  equation: string;
  className?: string;
}

export function MathEquation({ equation, className = "" }: MathEquationProps) {
  return (
    <div
      className={`math-equation ${className}`}
      dangerouslySetInnerHTML={{ __html: equation }}
    />
  );
}

// Componente específico para las ecuaciones del SIR
export function SIREquations() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white p-10 rounded-xl shadow-2xl mb-8 max-w-4xl mx-auto border border-gray-600">
      <div className="space-y-6">
        <div className="text-center text-gray-300 text-lg font-semibold mb-8 tracking-wide">
          SISTEMA DE ECUACIONES DIFERENCIALES ORDINARIAS
        </div>

        <div className="space-y-8">
          {/* Ecuación 1: dS/dt */}
          <div className="bg-blue-900/30 border-l-4 border-blue-400 pl-8 py-6 rounded-r-lg">
            <div className="flex items-center justify-center">
              <div className="math-display text-3xl">
                <span className="math-fraction">
                  <span className="math-numerator text-blue-300">
                    d<em>S</em>
                  </span>
                  <span className="math-denominator text-blue-300">
                    d<em>t</em>
                  </span>
                </span>
                <span className="text-white mx-4">=</span>
                <span className="text-red-300">−β</span>
                <span className="math-fraction mx-3">
                  <span className="math-numerator">
                    <span className="text-blue-300">
                      <em>S</em>
                    </span>
                    <span className="text-red-300">
                      <em>I</em>
                    </span>
                  </span>
                  <span className="math-denominator text-yellow-300">
                    <em>N</em>
                  </span>
                </span>
                <span className="text-gray-400 ml-4 text-lg">(1)</span>
              </div>
            </div>
          </div>

          {/* Ecuación 2: dI/dt */}
          <div className="bg-red-900/30 border-l-4 border-red-400 pl-8 py-6 rounded-r-lg">
            <div className="flex items-center justify-center">
              <div className="math-display text-3xl">
                <span className="math-fraction">
                  <span className="math-numerator text-red-300">
                    d<em>I</em>
                  </span>
                  <span className="math-denominator text-red-300">
                    d<em>t</em>
                  </span>
                </span>
                <span className="text-white mx-4">=</span>
                <span className="text-red-300">β</span>
                <span className="math-fraction mx-3">
                  <span className="math-numerator">
                    <span className="text-blue-300">
                      <em>S</em>
                    </span>
                    <span className="text-red-300">
                      <em>I</em>
                    </span>
                  </span>
                  <span className="math-denominator text-yellow-300">
                    <em>N</em>
                  </span>
                </span>
                <span className="text-white mx-3">−</span>
                <span className="text-green-300">γ</span>
                <span className="text-red-300 ml-2">
                  <em>I</em>
                </span>
                <span className="text-gray-400 ml-4 text-lg">(2)</span>
              </div>
            </div>
          </div>

          {/* Ecuación 3: dR/dt */}
          <div className="bg-green-900/30 border-l-4 border-green-400 pl-8 py-6 rounded-r-lg">
            <div className="flex items-center justify-center">
              <div className="math-display text-3xl">
                <span className="math-fraction">
                  <span className="math-numerator text-green-300">
                    d<em>R</em>
                  </span>
                  <span className="math-denominator text-green-300">
                    d<em>t</em>
                  </span>
                </span>
                <span className="text-white mx-4">=</span>
                <span className="text-green-300">γ</span>
                <span className="text-red-300 ml-2">
                  <em>I</em>
                </span>
                <span className="text-gray-400 ml-4 text-lg">(3)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8 italic border-t border-gray-600 pt-6">
          Modelo SIR adaptado para propagación de malware en redes digitales
        </div>
      </div>
    </div>
  );
}

// Componente para R₀
export function R0Equation() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 backdrop-blur-sm rounded-xl shadow-2xl p-10 mb-8 border border-purple-300/20">
      <div className="text-center">
        <div className="text-gray-300 text-lg font-semibold mb-6 tracking-wider uppercase">
          Número Básico de Reproducción
        </div>
        <div className="bg-white/10 rounded-lg p-8 mb-4">
          <div className="math-display text-6xl font-bold mb-4 text-yellow-300 tracking-wider">
            <em>R</em>
            <sub className="text-4xl">0</sub>
            <span className="text-white mx-4">=</span>
            <span className="math-fraction">
              <span className="math-numerator text-red-300">β</span>
              <span className="math-denominator text-green-300">γ</span>
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Número promedio de infecciones secundarias producidas por un sistema
            infectado en una población completamente susceptible
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente para las ecuaciones de Euler
export function EulerEquations() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-2xl border border-slate-600">
      <h3 className="font-bold text-blue-300 mb-6 text-xl text-center tracking-wide">
        🧮 MÉTODO DE EULER EXPLÍCITO
      </h3>
      <p className="text-gray-300 mb-8 text-center">
        Discretización temporal de primer orden con paso fijo Δt:
      </p>

      <div className="space-y-6">
        {/* Ecuación para Susceptibles */}
        <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
          <div className="text-blue-300 font-semibold mb-4 text-center">
            Susceptibles:
          </div>
          <div className="math-display text-2xl justify-center">
            <span className="text-blue-200">
              <em>S</em>
            </span>
            <sub className="text-blue-400 text-lg">n+1</sub>
            <span className="text-white mx-3">=</span>
            <span className="text-blue-200">
              <em>S</em>
            </span>
            <sub className="text-blue-400 text-lg">n</sub>
            <span className="text-white mx-3">+</span>
            <span className="text-yellow-300">Δt</span>
            <span className="text-white mx-2">×</span>
            <span className="text-gray-300">(</span>
            <span className="text-red-300">−β</span>
            <span className="math-fraction mx-2">
              <span className="math-numerator">
                <span className="text-blue-200">
                  <em>S</em>
                </span>
                <sub className="text-blue-400 text-sm">n</sub>
                <span className="text-red-200">
                  <em>I</em>
                </span>
                <sub className="text-red-400 text-sm">n</sub>
              </span>
              <span className="math-denominator text-yellow-200">
                <em>N</em>
              </span>
            </span>
            <span className="text-gray-300">)</span>
          </div>
        </div>

        {/* Ecuación para Infectadas */}
        <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
          <div className="text-red-300 font-semibold mb-4 text-center">
            Infectadas:
          </div>
          <div className="math-display text-2xl justify-center flex-wrap">
            <div className="flex items-center mb-2">
              <span className="text-red-200">
                <em>I</em>
              </span>
              <sub className="text-red-400 text-lg">n+1</sub>
              <span className="text-white mx-3">=</span>
              <span className="text-red-200">
                <em>I</em>
              </span>
              <sub className="text-red-400 text-lg">n</sub>
              <span className="text-white mx-3">+</span>
              <span className="text-yellow-300">Δt</span>
              <span className="text-white mx-2">×</span>
              <span className="text-gray-300">(</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-red-300">β</span>
              <span className="math-fraction mx-2">
                <span className="math-numerator">
                  <span className="text-blue-200">
                    <em>S</em>
                  </span>
                  <sub className="text-blue-400 text-sm">n</sub>
                  <span className="text-red-200">
                    <em>I</em>
                  </span>
                  <sub className="text-red-400 text-sm">n</sub>
                </span>
                <span className="math-denominator text-yellow-200">
                  <em>N</em>
                </span>
              </span>
              <span className="text-white mx-2">−</span>
              <span className="text-green-300">γ</span>
              <span className="text-red-200 ml-2">
                <em>I</em>
              </span>
              <sub className="text-red-400 text-sm">n</sub>
              <span className="text-gray-300">)</span>
            </div>
          </div>
        </div>

        {/* Ecuación para Recuperadas */}
        <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
          <div className="text-green-300 font-semibold mb-4 text-center">
            Recuperadas:
          </div>
          <div className="math-display text-2xl justify-center">
            <span className="text-green-200">
              <em>R</em>
            </span>
            <sub className="text-green-400 text-lg">n+1</sub>
            <span className="text-white mx-3">=</span>
            <span className="text-green-200">
              <em>R</em>
            </span>
            <sub className="text-green-400 text-lg">n</sub>
            <span className="text-white mx-3">+</span>
            <span className="text-yellow-300">Δt</span>
            <span className="text-white mx-2">×</span>
            <span className="text-gray-300">(</span>
            <span className="text-green-300">γ</span>
            <span className="text-red-200 ml-2">
              <em>I</em>
            </span>
            <sub className="text-red-400 text-sm">n</sub>
            <span className="text-gray-300">)</span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-6 italic">
        Esquema numérico estable con complejidad computacional O(n)
      </div>
    </div>
  );
}
