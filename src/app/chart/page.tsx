"use client";
import { TrendingUp } from "lucide-react";
import { Line, LineChart, XAxis, YAxis, Legend } from "recharts";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Parámetros del modelo SIR para virus informático
const POPULATION = 10000; // Total de computadoras
const BETA = 0.6; // Tasa de transmisión alta (porque no hay antivirus)
const GAMMA = 0.1; // Tasa de recuperación baja (porque se tarda en detectar)
const TIME_STEPS = 100; // Más pasos para mayor detalle y velocidad
const DT = 0.5; // Paso más pequeño para mayor suavidad

// Función para calcular un solo paso de la simulación
function calculateNextStep(S: number, I: number, R: number, time: number) {
  // Ecuaciones diferenciales del modelo SIR:
  // dS/dt = -β * S * I / N
  // dI/dt = β * S * I / N - γ * I
  // dR/dt = γ * I

  const dS_dt = (-BETA * S * I) / POPULATION;
  const dI_dt = (BETA * S * I) / POPULATION - GAMMA * I;
  const dR_dt = GAMMA * I;

  // Método de Euler para actualizar las variables
  const newS = Math.max(0, S + dS_dt * DT);
  const newI = Math.max(0, I + dI_dt * DT);
  const newR = Math.max(0, R + dR_dt * DT);

  return {
    time: parseFloat(time.toFixed(1)),
    susceptible: Math.round(newS),
    infected: Math.round(newI),
    recovered: Math.round(newR),
    S: newS,
    I: newI,
    R: newR,
  };
}

const chartConfig = {
  susceptible: {
    label: "Susceptibles",
    color: "#0088cc",
  },
  infected: {
    label: "Infectados",
    color: "#ff6b6b",
  },
  recovered: {
    label: "Recuperados",
    color: "#4ecdc4",
  },
} satisfies ChartConfig;

export default function ChartPage() {
  // Estados para la simulación en tiempo real
  const [currentData, setCurrentData] = useState<
    Array<{
      time: number;
      susceptible: number;
      infected: number;
      recovered: number;
    }>
  >([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Estado actual de las variables SIR
  const [currentState, setCurrentState] = useState({
    S: POPULATION - 1,
    I: 1,
    R: 0,
  });

  useEffect(() => {
    if (!isRunning || currentStep >= TIME_STEPS) return;

    const timer = setTimeout(() => {
      const time = currentStep * DT;
      const nextStep = calculateNextStep(
        currentState.S,
        currentState.I,
        currentState.R,
        time
      );

      // Agregar nuevo punto a los datos
      setCurrentData((prev) => [
        ...prev,
        {
          time: nextStep.time,
          susceptible: nextStep.susceptible,
          infected: nextStep.infected,
          recovered: nextStep.recovered,
        },
      ]);

      // Actualizar estado
      setCurrentState({
        S: nextStep.S,
        I: nextStep.I,
        R: nextStep.R,
      });

      setCurrentStep((prev) => prev + 1);

      // Parar la simulación si ya no hay infectados
      if (nextStep.infected < 1 && currentStep > 50) {
        setIsRunning(false);
      }
    }, 20); // Actualizar cada 20ms para carga más rápida

    return () => clearTimeout(timer);
  }, [currentStep, currentState, isRunning]);

  const resetSimulation = () => {
    setCurrentData([]);
    setCurrentStep(0);
    setCurrentState({
      S: POPULATION - 1,
      I: 1,
      R: 0,
    });
    setIsRunning(true);
  };

  const maxInfected =
    currentData.length > 0
      ? Math.max(...currentData.map((d) => d.infected))
      : 0;
  const currentPoint = currentData[currentData.length - 1];

  return (
    <div className="w-full p-4 pt-6 sm:pt-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Propagación de Virus Informático - Simulación en Tiempo Real
          </CardTitle>
          <CardDescription className="text-base sm:text-lg">
            Modelo SIR (Susceptible-Infectado-Recuperado) - Día{" "}
            {currentPoint?.time?.toFixed(1) || "0.0"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[400px] sm:h-[500px]">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart
                data={currentData}
                width={800}
                height={450}
                margin={{
                  left: 60,
                  right: 30,
                  top: 20,
                  bottom: 60,
                }}
              >
                <XAxis
                  dataKey="time"
                  tickLine={true}
                  axisLine={true}
                  tickMargin={8}
                  tickFormatter={(value) => `${Math.round(value)}d`}
                  fontSize={12}
                />
                <YAxis
                  tickLine={true}
                  axisLine={true}
                  tickFormatter={(value) => value.toLocaleString()}
                  fontSize={12}
                />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <ChartTooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="susceptible"
                  type="monotone"
                  stroke="#0088cc"
                  strokeWidth={3}
                  dot={false}
                  name="Susceptibles"
                  animationDuration={500}
                  animationEasing="ease-in-out"
                />
                <Line
                  dataKey="infected"
                  type="monotone"
                  stroke="#ff6b6b"
                  strokeWidth={3}
                  dot={false}
                  name="Infectados"
                  animationDuration={500}
                  animationEasing="ease-in-out"
                />
                <Line
                  dataKey="recovered"
                  type="monotone"
                  stroke="#4ecdc4"
                  strokeWidth={3}
                  dot={false}
                  name="Recuperados"
                  animationDuration={500}
                  animationEasing="ease-in-out"
                />
              </LineChart>
            </ChartContainer>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4">
            <button
              onClick={resetSimulation}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
              Reiniciar Simulación
            </button>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-2 rounded transition-colors text-sm sm:text-base ${
                isRunning
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {isRunning ? "Pausar" : "Reanudar"}
            </button>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4 text-sm">
          <div className="flex gap-2 leading-none font-medium text-base sm:text-lg">
            Pico de infección: {maxInfected} computadoras{" "}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none text-sm sm:text-base">
            Parámetros: β={BETA} (tasa transmisión), γ={GAMMA} (tasa
            recuperación), N={POPULATION} computadoras
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full mt-4">
            <div className="text-center p-3 sm:p-2 bg-blue-50 rounded">
              <div className="font-bold text-blue-700 text-sm sm:text-base">
                Susceptibles Actuales
              </div>
              <div className="text-lg sm:text-xl text-blue-600">
                {currentPoint?.susceptible || POPULATION - 1}
              </div>
            </div>
            <div className="text-center p-3 sm:p-2 bg-red-50 rounded">
              <div className="font-bold text-red-700 text-sm sm:text-base">
                Infectados Actuales
              </div>
              <div className="text-lg sm:text-xl text-red-600">
                {currentPoint?.infected || 1}
              </div>
            </div>
            <div className="text-center p-3 sm:p-2 bg-teal-50 rounded">
              <div className="font-bold text-teal-700 text-sm sm:text-base">
                Recuperados Actuales
              </div>
              <div className="text-lg sm:text-xl text-teal-600">
                {currentPoint?.recovered || 0}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
