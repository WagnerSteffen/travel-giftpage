import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import {
  ChevronDown,
  Gift,
  MapPin,
  Calendar,
  Plane,
  Sparkles,
  Heart,
} from "lucide-react";
const Confetti = () => {
  const [confetti] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      color: ["#FFB5E8", "#B5DEFF", "#FFC9DE", "#C9FFE5", "#FFFFD1"][
        Math.floor(Math.random() * 5)
      ],
    })),
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-fall"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const FadeInOnScroll = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ValeViagemPosadas() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-fall { animation: fall linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <Confetti />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header com ícones flutuantes */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-8 mb-6">
            <Sparkles
              className="w-8 h-8 text-pink-300 animate-float"
              style={{ animationDelay: "0s" }}
            />
            <Gift className="w-12 h-12 text-rose-300 animate-pulse-soft" />
            <Sparkles
              className="w-8 h-8 text-blue-300 animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 mb-4">
            Parabéns!
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            Você ganhou um presente especial
          </p>
        </div>
        {/* Card principal */}
        <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-3xl shadow-2xl pt-[4rem] md:p-12 border-4 border-pink-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full shimmer opacity-20"></div>

          <div className="relative z-10">
            {/* Ícone central */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-6 shadow-lg">
                <Plane className="w-16 h-16 text-rose-400" />
              </div>
            </div>

            {/* Título do prêmio */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4">
                Vale Jantar
              </h2>
              <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Restaurante: Generación Y
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center py-8">
              {/* Ícone com animação de bounce */}
              <ChevronDown
                className="animate-bounce w-10 h-10 text-gray-400"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        <div className="p-[6rem]"></div>
        <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-100 relative overflow-hidden">
          <div className="relative z-10">
            {/* Detalhes da viagem com Fade In */}
            <FadeInOnScroll>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Destino
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-9">
                    Posadas, Misiones
                    <br />
                    Argentina
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Validade
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-9">
                    1 meses a partir
                    <br />
                    de 25/12/2025
                  </p>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Características com Fade In */}
            <FadeInOnScroll delay={200}>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-400" />O que está incluído
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>
                      Deslocamento de ida e volta acompanhada da melhor
                      companhia
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Jantar com um ex-gogoboy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">✓</span>
                    <span>Experiências inesquecíveis</span>
                  </li>
                </ul>
              </div>
            </FadeInOnScroll>

            {/* Mensagem especial com Fade In */}
            <FadeInOnScroll delay={400}>
              <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
                <p className="text-lg text-gray-700 italic">
                  "Prepare suas malas para uma aventura incrível!
                  <br />
                  Seu xuxuzinho te espera com suas belezas naturais."
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Este vale viagem é pessoal e intransferível
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-pink-300 animate-pulse"></div>
            <div
              className="w-2 h-2 rounded-full bg-rose-300 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-purple-300 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
