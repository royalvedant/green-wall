/* ==========================================================================
   THAT'S IT NURSERY - CLIENT PORTFOLIO & FILTER LOGIC
   ========================================================================== */

const clientsData = [
  {
    name: 'Sula Vineyards',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Luxury',
    location: 'Nashik',
    scope: 'Signature vertical green wall installations & winery landscape curation',
    feature: 'Eco-organic biophilic design'
  },
  {
    name: 'Axis Bank',
    category: 'banking',
    categoryLabel: 'Banking & Financial',
    location: 'Regional Hubs',
    scope: 'Indoor air-purifying vertical gardens in key administrative branches',
    feature: 'NASA Clean-Air foliage mix'
  },
  {
    name: 'Bank of Maharashtra',
    category: 'banking',
    categoryLabel: 'Banking & Financial',
    location: 'Nashik & Maharashtra',
    scope: 'Special Agricultural Hi-tech Branch green installations & campus gardening',
    feature: 'Hi-Tech Agriculture Partner'
  },
  {
    name: 'Surat Airport',
    category: 'infrastructure',
    categoryLabel: 'Aviation & Infra',
    location: 'Surat, Gujarat',
    scope: 'Airport terminal living green walls greeting thousands of daily travelers',
    feature: 'Automated Drip Irrigation'
  },
  {
    name: 'Express Inn',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Luxury',
    location: 'Nashik',
    scope: 'Five-star hotel exterior terrace green wall & poolside botanical landscaping',
    feature: 'Exterior Facade System'
  },
  {
    name: 'Ashoka Buildcon Limited',
    category: 'infrastructure',
    categoryLabel: 'Infrastructure & EPC',
    location: 'National Projects',
    scope: 'Corporate headquarters atrium green walls & large-scale environmental landscaping',
    feature: 'Heavy-Duty Modular Wall'
  },
  {
    name: 'Samrat Group',
    category: 'real-estate',
    categoryLabel: 'Luxury Real Estate',
    location: 'Nashik',
    scope: 'Power of Imagination luxury residential green wall entries & podium gardens',
    feature: 'Residential Landmark'
  },
  {
    name: 'Rajhans Group',
    category: 'commercial',
    categoryLabel: 'Commercial & Retail',
    location: 'Surat',
    scope: 'Commercial tech towers biophilic vertical facades & corporate landscapes',
    feature: 'Urban Heat Island Reduction'
  },
  {
    name: 'Rameshwaram Group',
    category: 'real-estate',
    categoryLabel: 'Luxury Real Estate',
    location: 'Surat',
    scope: 'Premium township clubhouse vertical gardens & boulevard horticulture',
    feature: 'Custom Soil-less Media'
  },
  {
    name: 'SRK Empire',
    category: 'commercial',
    categoryLabel: 'Commercial & Retail',
    location: 'Surat',
    scope: 'High-rise corporate green wall & internal wellness garden zones',
    feature: 'Acoustic Sound Buffer'
  },
  {
    name: 'Parksyde Jaykumar Construction',
    category: 'real-estate',
    categoryLabel: 'Luxury Real Estate',
    location: 'Nashik',
    scope: 'Multi-acre residential vertical garden facades & extensive park development',
    feature: 'Master Community Greens'
  },
  {
    name: 'Baya Park',
    category: 'real-estate',
    categoryLabel: 'Luxury Real Estate',
    location: 'Dadar, Mumbai',
    scope: 'Metropolitan Mumbai high-density vertical green wall integration',
    feature: 'Compact Space Optimization'
  },
  {
    name: 'Swami Narayan Sanstha',
    category: 'cultural',
    categoryLabel: 'Cultural & Civic',
    location: 'Nashik',
    scope: 'Spiritual campus sacred gardens & tranquil landscape horticulture',
    feature: 'Indigenous Plant Varieties'
  },
  {
    name: 'Rushiraj Ravira',
    category: 'real-estate',
    categoryLabel: 'Luxury Real Estate',
    location: 'Nashik',
    scope: 'Boutique architectural vertical garden features for luxury residences',
    feature: 'Micro-Drip System'
  },
  {
    name: 'PWC SPO',
    category: 'commercial',
    categoryLabel: 'Corporate Office',
    location: 'Dadar, Mumbai',
    scope: 'Premium corporate interior vertical garden boosting office oxygen levels',
    feature: 'Low Light Tolerant Flora'
  },
  {
    name: 'Aakash Group',
    category: 'real-estate',
    categoryLabel: 'Luxury Real Estate',
    location: 'Surat',
    scope: 'Residential tower green balcony facades and botanical club amenities',
    feature: 'Tropical Fern Matrix'
  }
];

function renderClients(filter = 'all', containerId = 'clients-grid-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filter === 'all' 
    ? clientsData 
    : clientsData.filter(c => c.category === filter);

  container.innerHTML = filtered.map(client => `
    <div class="client-card fade-up-element in-view" data-category="${client.category}">
      <div class="client-card-header">
        <span class="client-category-badge">${client.categoryLabel}</span>
        <span class="client-location-tag">📍 ${client.location}</span>
      </div>
      <div>
        <h3 class="client-name">${client.name}</h3>
        <p class="client-scope">${client.scope}</p>
      </div>
      <div class="client-card-footer" style="margin-top: 1rem;">
        <span class="client-feature-tag">🌿 ${client.feature}</span>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.client-filter-bar .filter-btn');
  
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        renderClients(filterValue);
      });
    });
  }

  renderClients('all');
});
