/* ==========================================================================
   THAT'S IT NURSERY - VERTICAL GARDEN CALCULATOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const widthSlider = document.getElementById('calc-width');
  const heightSlider = document.getElementById('calc-height');
  const widthVal = document.getElementById('calc-width-val');
  const heightVal = document.getElementById('calc-height-val');
  const areaVal = document.getElementById('calc-area-val');
  const plantsVal = document.getElementById('calc-plants-val');
  const priceRange = document.getElementById('calc-price-range');
  const oxygenVal = document.getElementById('calc-oxygen-val');
  const typeBtns = document.querySelectorAll('.calc-type-btn');
  const calcWhatsappBtn = document.getElementById('calc-whatsapp-cta');

  let currentType = 'Indoor Living / Office';
  let ratePerSqFtMin = 950;
  let ratePerSqFtMax = 1250;
  let plantMultiplier = 18; // approx 18 plants per sq.ft

  function updateCalculations() {
    if (!widthSlider || !heightSlider) return;

    const width = parseInt(widthSlider.value, 10);
    const height = parseInt(heightSlider.value, 10);
    const area = width * height;

    if (widthVal) widthVal.textContent = `${width} ft`;
    if (heightVal) heightVal.textContent = `${height} ft`;
    if (areaVal) areaVal.textContent = `${area} sq.ft`;

    const totalPlants = Math.round(area * plantMultiplier);
    if (plantsVal) plantsVal.textContent = `~${totalPlants.toLocaleString()} plants`;

    const minPrice = Math.round(area * ratePerSqFtMin);
    const maxPrice = Math.round(area * ratePerSqFtMax);
    if (priceRange) {
      priceRange.textContent = `₹${minPrice.toLocaleString('en-IN')} – ₹${maxPrice.toLocaleString('en-IN')}`;
    }

    // Oxygen calculation: approx 5 liters of O2 per sq.ft of dense foliage per day
    const oxygenPerDay = Math.round(area * 5.2);
    if (oxygenVal) {
      oxygenVal.textContent = `+${oxygenPerDay} L / day`;
    }

    // Update WhatsApp link
    if (calcWhatsappBtn) {
      const message = `Hello That's It Nursery, I am planning an *${currentType}* Vertical Garden (%20${width}ft x ${height}ft = ${area} sq.ft, ~${totalPlants} plants). Please arrange a site inspection and custom estimate.`;
      calcWhatsappBtn.href = `https://wa.me/919921324365?text=${message}`;
    }
  }

  if (typeBtns.length > 0) {
    typeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.getAttribute('data-type');
        const minRate = parseInt(btn.getAttribute('data-min-rate'), 10);
        const maxRate = parseInt(btn.getAttribute('data-max-rate'), 10);
        const density = parseInt(btn.getAttribute('data-density'), 10);

        if (!isNaN(minRate)) ratePerSqFtMin = minRate;
        if (!isNaN(maxRate)) ratePerSqFtMax = maxRate;
        if (!isNaN(density)) plantMultiplier = density;

        updateCalculations();
      });
    });
  }

  if (widthSlider) widthSlider.addEventListener('input', updateCalculations);
  if (heightSlider) heightSlider.addEventListener('input', updateCalculations);

  updateCalculations();
});
