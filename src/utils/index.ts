export const formatPopulation = (population: number): string => {
  return population.toLocaleString('pt-BR', { style: 'decimal' });
};
