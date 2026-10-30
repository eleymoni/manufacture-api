function remise(prix, pourcentage) {
  if (typeof pourcentage !== 'number' || Number.isNaN(pourcentage) || pourcentage < 0 || pourcentage > 100) {
    throw new Error('Remise invalide');
  }
  return Math.round(prix * (1 - pourcentage / 100) * 100) / 100;
}

module.exports = { remise };
