const fs = require('fs');

const file = 'd:/AI/napcen-2/src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The markers for each section
const markers = [
  { id: 'HERO', str: '        {/* HERO SECTION */}' },
  { id: 'ABOUT', str: '        {/* ABOUT NAPCEN SECTION */}' },
  { id: 'EXPLAINER', str: '        {/* WET SCRUBBER EXPLAINER SECTION */}' },
  { id: 'PROCESS', str: '        {/* PROCESS SEQUENCE SECTION */}' },
  { id: 'SOLUTIONS', str: '        {/* SOLUTIONS SECTION */}' }, // Features & benefits
  { id: 'PRODUCTS', str: '        {/* PRODUCTS SECTION */}' },
  { id: 'POLLUTANTS', str: '        {/* POLLUTANT CONTROL APPLICATIONS SECTION */}' },
  { id: 'ENGINEERING', str: '        {/* ENGINEERING INPUTS CHECKLIST SECTION */}' },
  { id: 'INDUSTRIES', str: '        {/* INDUSTRIES SECTION */}' },
  { id: 'INSTALLATION', str: '        {/* INSTALLATION SECTION */}' },
  { id: 'WHY_NAPCEN', str: '        {/* WHY NAPCEN SECTION */}' },
  { id: 'QUALITY', str: '        {/* QUALITY ASSURANCE SECTION */}' },
  { id: 'MAP', str: '        {/* NEW REGIONAL COVERAGE & REQUIREMENTS SECTION */}' },
  { id: 'FAQ', str: '        {/* FAQ SECTION */}' },
  { id: 'TESTIMONIALS', str: '        {/* TESTIMONIALS SECTION */}' },
  { id: 'FOOTER', str: '        {/* COMBINED CTA & FOOTER SECTION */}' }
];

// Extract sections
const sections = {};
let currentContent = content;

// Find the start of HERO (we will split there to keep everything before HERO intact)
const heroStartIndex = currentContent.indexOf(markers[0].str);
const headerPart = currentContent.substring(0, heroStartIndex);
currentContent = currentContent.substring(heroStartIndex);

// Now extract all sections up to FOOTER
const footerStartIndex = currentContent.indexOf(markers[markers.length - 1].str);
const footerPart = currentContent.substring(footerStartIndex);
currentContent = currentContent.substring(0, footerStartIndex);

// currentContent now contains only the sections from HERO to TESTIMONIALS (inclusive)
// Let's split it by markers
for (let i = 0; i < markers.length - 1; i++) {
  const marker = markers[i];
  const nextMarker = markers[i + 1];
  
  const startIndex = currentContent.indexOf(marker.str);
  let endIndex = currentContent.indexOf(nextMarker.str);
  
  // If next marker isn't found in currentContent, maybe it's not present. But they should be.
  if (endIndex === -1) endIndex = currentContent.length;
  
  sections[marker.id] = currentContent.substring(startIndex, endIndex);
}

// User requested order:
// 1. HERO
// 2. EXPLAINER (Wet scrubber working principle)
// 3. PRODUCTS (Wet scrubber portfolio)
// 4. PROCESS (Process sequence)
// 5. ENGINEERING (Wet scrubber design & performance)
// 6. INDUSTRIES (Applications across industry)
// 7. SOLUTIONS (Features & benefits)
// 8. INSTALLATION (Installation & commissioning)
// 9. ABOUT (About NAPCEN)
// 10. QUALITY (Quality assurance)
// 11. WHY_NAPCEN (Why industries choose NAPCEN)
// 12. TESTIMONIALS (Customer voice)
// 13. MAP (Wet scrubber manufacturer & supplier across India)
// 14. FAQ (Wet scrubber FAQ)
// (POLLUTANTS was omitted by user, let's put it right before FAQ just in case, or leave it out? The user didn't mention it, let's put it before FAQ to keep it on the page)

const newOrder = [
  'HERO',
  'EXPLAINER',
  'PRODUCTS',
  'PROCESS',
  'ENGINEERING',
  'INDUSTRIES',
  'SOLUTIONS',
  'INSTALLATION',
  'ABOUT',
  'QUALITY',
  'WHY_NAPCEN',
  'TESTIMONIALS',
  'MAP',
  'POLLUTANTS', // keeping it here
  'FAQ'
];

let newSectionsContent = '';
for (const id of newOrder) {
  if (sections[id]) {
    newSectionsContent += sections[id];
  }
}

let newFileContent = headerPart + newSectionsContent + footerPart;

// Now let's fix all the labels. The user wants them FULLY CAPITALIZED and SAME COLOR.
// The typical label looks like: <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">LABEL TEXT</span>
// We will replace all span classes that look like section labels with a uniform color class.
// We will use text-[#0a5cbb] to make them the same primary blue.

// Regex to find section labels. They are typically inside a span with tracking-[0.2em] uppercase.
const labelRegex = /<span className="([^"]*tracking-\[0\.2em\] uppercase[^"]*)">\s*([\s\S]*?)\s*<\/span>/g;
newFileContent = newFileContent.replace(labelRegex, (match, className, text) => {
  // Make the text fully uppercase
  const newText = text.trim().toUpperCase();
  // Replace text-slate-500, text-blue-500, etc. with text-[#0a5cbb]
  let newClass = className.replace(/text-[a-z]+-\d+/, 'text-[#0a5cbb]').replace(/text-\[#[0-9a-fA-F]+\]/, 'text-[#0a5cbb]');
  // Also ensure text-white isn't there (unless it's a dark background). 
  // Wait, if it's on a black background, text-[#0a5cbb] might be hard to read. 
  // Let's use text-[#0a5cbb] for everything, wait, black backgrounds usually use text-slate-400 or text-[#3b82f6].
  // Let's use text-[#3b82f6] for ALL labels to ensure they are visible on both white and black backgrounds, or text-[#0a5cbb].
  // Let's use text-blue-500 everywhere.
  newClass = className.replace(/text-[^\s]+/, 'text-[#0a5cbb]'); 
  if (className.includes('text-slate-') || className.includes('text-blue-') || className.includes('text-gray-') || className.includes('text-[#')) {
      newClass = className.replace(/text-(?:slate|blue|gray)-\d{3}/, 'text-[#0a5cbb]').replace(/text-\[#[a-fA-F0-9]+\]/, 'text-[#0a5cbb]');
  } else {
      newClass = newClass.replace('font-bold', 'text-[#0a5cbb] font-bold');
  }
  
  return `<span className="${newClass}">\n                    ${newText}\n                  </span>`;
});

// There is also a div label for Installation: 
// <div className="flex items-center justify-center gap-2 text-primary-gray font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
// Installation & commissioning
const instLabelRegex = /<div className="([^"]*tracking-\[0\.2em\][^"]*)">\s*(Installation & commissioning)\s*<\/div>/g;
newFileContent = newFileContent.replace(instLabelRegex, (match, className, text) => {
  const newClass = className.replace('text-primary-gray', 'text-[#0a5cbb]');
  return `<div className="${newClass}">\n                  INSTALLATION & COMMISSIONING\n                </div>`;
});


// Also update "Customer voice" label which is currently tracking-[0.2em] uppercase but we'll ensure it is caught.
// And "WET SCRUBBER WORKING PRINCIPLE"
// Make sure PROCESS label is "PROCESS SEQUENCE" as requested (currently "ENGINEERING APPROACH").
newFileContent = newFileContent.replace(/ENGINEERING APPROACH/g, 'PROCESS SEQUENCE');

fs.writeFileSync(file, newFileContent, 'utf8');
console.log('Successfully reordered sections and updated labels.');
