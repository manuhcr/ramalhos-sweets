import React, { useEffect, useRef, useState } from 'react';

export default function ChocolateDerretendo() {
  // 1. Hook de Estado para controlar a visibilidade
  const [isVisible, setIsVisible] = useState(false);
  // 2. Hook de Referência para apontar para o elemento DOM que queremos observar
  const caldaRef = useRef(null);

  // 3. Hook de Efeito para gerenciar o Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Se o elemento estiver interceptando a viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Parar de observar depois de aparecer uma vez
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1, // Dispara quando 10% do elemento está visível
      }
    );

    // Começa a observar o elemento referenciado
    if (caldaRef.current) {
      observer.observe(caldaRef.current);
    }

    // Função de limpeza do useEffect
    return () => {
      if (caldaRef.current) {
        observer.unobserve(caldaRef.current);
      }
    };
  }, []); // Array de dependências vazio garante que roda apenas uma vez no carregamento

  return (
    <div className='dripping'>
      {/* Aplicamos a referência e a classe CSS condicionalmente com base no estado 'isVisible' */}
      <div 
        ref={caldaRef} 
        className={`caldaChoco relative w-full ${isVisible ? 'animate-drip' : ''}`}
      >
        <svg
          xmlns="www.w3.org"
          viewBox="0 0 1440 320"
          className="chocolate-svg"
        >
          <path className="calda"
            fillOpacity="1"
            d="M0,192L13.3,181.3C26.7,171,53,149,80,149.3C106.7,149,133,171,160,186.7C186.7,203,213,213,240,202.7C266.7,192,293,160,320,160C346.7,160,373,192,400,197.3C426.7,203,453,181,480,160C506.7,139,533,117,560,138.7C586.7,160,613,224,640,224C666.7,224,693,160,720,133.3C746.7,107,773,117,800,106.7C826.7,96,853,64,880,85.3C906.7,107,933,181,960,202.7C986.7,224,1013,192,1040,160C1066.7,128,1093,96,1120,117.3C1146.7,139,1173,213,1200,224C1226.7,235,1253,181,1280,170.7C1306.7,160,1333,192,1360,192C1386.7,192,1413,160,1427,144L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>
    </div>
  );
}
