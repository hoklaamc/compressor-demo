export const thresholdParams = {
  min: -50,
  max: 0,
  step: 1,
  defaultValue: 0,
  marks: {
    "-50": "-50dB",
    "-40": "-40dB",
    "-30": "-30dB",
    "-20": "-20dB",
    "-10": "-10dB",
    0: "0dB",
  },
};

export const ratioParams = {
  min: 1,
  max: 20,
  step: 0.1,
  marks: {
    1: "1:1",
    2: "2:1",
    3: "3:1",
    5: "5:1",
    8: "8:1",
    12: "12:1",
    20: "20:1",
  },
};

export const kneeParams = {
  min: 0,
  max: 1,
  step: 0.1,
  marks: {
    0: "0",
    0.2: "0.2",
    0.4: "0.4",
    0.6: "0.6",
    0.8: "0.8",
    1: "1.0",
  },
};

export const attackParams = {
  min: 0,
  max: 1000,
  step: 0.5,
  marks: {
    0: "0ms",
    100: "100ms",
    200: "200ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
    600: "600ms",
    700: "700ms",
    800: "800ms",
    900: "900ms",
    1000: "1000ms",
  },
};

export const releaseParams = {
  min: 0,
  max: 1000,
  step: 0.5,
  marks: {
    0: "0ms",
    100: "100ms",
    200: "200ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
    600: "600ms",
    700: "700ms",
    800: "800ms",
    900: "900ms",
    1000: "1000ms",
  },
};

export const gainParams = {
  min: -20,
  max: 50,
  step: 0.5,
  defaultValue: 0,
  marks: {
    "-20": "-20dB",
    "-10": "-10dB",
    0: "0dB",
    10: "10dB",
    20: "20dB",
    30: "30dB",
    40: "40dB",
    50: "50dB",
  },
};
