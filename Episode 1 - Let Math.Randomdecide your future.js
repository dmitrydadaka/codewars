const yourFutureCareer = () =>
  (career => `${career <= 0.32 ? `FrontEnd` : career <= 0.65 ? `BackEnd` : `Full-Stack`} Developer`)
  (Math.random());