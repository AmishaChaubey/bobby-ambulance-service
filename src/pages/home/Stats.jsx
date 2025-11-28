import { useState, useEffect } from 'react';

const StatsBar = () => {
  const [responseTime, setResponseTime] = useState(0);
  const [callsHandled, setCallsHandled] = useState(0);
  const [survivalRate, setSurvivalRate] = useState(0);
  const [ambulancesReady, setAmbulancesReady] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animation for response time
    const responseTimer = setTimeout(() => {
      setResponseTime(6);
    }, 300);

    // Animation for calls handled
    let callsCount = 0;
    const callsInterval = setInterval(() => {
      callsCount += 120;
      if (callsCount >= 2400) {
        callsCount = 2400;
        clearInterval(callsInterval);
      }
      setCallsHandled(callsCount);
    }, 30);

    // Animation for survival rate
    const survivalTimer = setTimeout(() => {
      let rateCount = 0;
      const rateInterval = setInterval(() => {
        rateCount += 2;
        if (rateCount >= 94) {
          rateCount = 94;
          clearInterval(rateInterval);
        }
        setSurvivalRate(rateCount);
      }, 30);
    }, 600);

    // Animation for ambulances ready
    const ambulanceTimer = setTimeout(() => {
      setAmbulancesReady(12);
    }, 800);

    return () => {
      clearTimeout(responseTimer);
      clearInterval(callsInterval);
      clearTimeout(survivalTimer);
      clearTimeout(ambulanceTimer);
    };
  }, []);

  const stats = [
    {
      value: responseTime,
      suffix: 'min',
      label: 'Average Response Time',
      icon: '⏱️',
      color: 'bg-red-500',
    },
    {
      value: callsHandled,
      suffix: '+',
      label: 'Emergency Calls Handled',
      icon: '📞',
      color: 'bg-blue-500',
    },
    {
      value: survivalRate,
      suffix: '%',
      label: 'Survival Rate',
      icon: '💓',
      color: 'bg-green-500',
    },
    {
      value: ambulancesReady,
      suffix: '',
      label: 'Ambulances Ready',
      icon: '🚑',
      color: 'bg-orange-500',
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 overflow-hidden">
      {/* Medical Cross Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 40px, #fff 41px),
                            repeating-linear-gradient(90deg, #fff 0px, transparent 1px, transparent 40px, #fff 41px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

  

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Emergency Response Statistics</h2>
          <div className="w-32 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Our commitment to rapid, life-saving emergency medical services is reflected in our performance metrics.
          </p>
        </div>

        {/* Stats Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Stat Card */}
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 group">
                {/* Icon Container */}
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                    <span className="text-xl text-gray-300">{stat.suffix}</span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-sm text-gray-400 text-center mt-2">{stat.label}</div>

                {/* Hover Effect Line */}
                <div className="h-0.5 w-0 bg-red-500 mx-auto mt-3 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;