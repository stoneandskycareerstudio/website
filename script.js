// Accordion
document.querySelectorAll('.acc-item').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const next = btn.nextElementSibling;
    const open = next.style.display === 'block';
    document.querySelectorAll('.acc-panel').forEach(p=>p.style.display='none');
    document.querySelectorAll('.acc-item').forEach(b=>b.setAttribute('aria-expanded', 'false'));
    if(!open) {
      next.style.display='block';
      btn.setAttribute('aria-expanded', 'true');
    }
  })
});

// Simple chat widget (stub)
const chatOpen = document.getElementById('chat-open');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatLog = document.getElementById('chat-log');

function appendMessage(who, text){
  const el = document.createElement('div');
  el.className = 'msg ' + (who==='bot'?'bot':'user');
  el.textContent = text;
  chatLog.appendChild(el);
  chatLog.scrollTop = chatLog.scrollHeight;
}

chatOpen.addEventListener('click', ()=>{
  chatBox.style.display = 'flex';
  chatBox.setAttribute('aria-hidden','false');
  appendMessage('bot', 'Hi — I\'m careerBot. I can answer questions about our services, events, FAQs, and bookings.');
});
chatClose.addEventListener('click', ()=>{
  chatBox.style.display = 'none';
  chatBox.setAttribute('aria-hidden','true');
});

chatForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const q = chatInput.value.trim();
  if(!q) return;
  appendMessage('user', q);
  chatInput.value = '';
  // Very simple local FAQ matching
  const lc = q.toLowerCase();
  if(lc.includes('free') || lc.includes('free session')){
    setTimeout(()=>appendMessage('bot','Free sessions are 30 minutes orientation meetings. Book via the Book Free Session link.'),600);
  } else if(lc.includes('paid') || lc.includes('paid session')){
    setTimeout(()=>appendMessage('bot','Paid sessions are 60–90 minutes with tailored plans and follow-ups. Book via the Book Paid Session link.'),600);
  } else if(lc.includes('events') || lc.includes('event')){
    setTimeout(()=>appendMessage('bot','Upcoming: Grad School Application Masterclass — Mar 8, 2026 • Register via the event card.'),600);
  } else if(lc.includes('book')){
    setTimeout(()=>appendMessage('bot','You can book a session: click Book a Free Session or Book Paid Session on the page, or email info@stoneandsky.org.'),600);
  } else if(lc.includes('who') || lc.includes('who can')){
    setTimeout(()=>appendMessage('bot','We support high school, undergraduate, masters, PhD students and career transitions, domestic and international.'),600);
  } else {
    setTimeout(()=>appendMessage('bot',"I couldn't find a clear answer in the site content. Would you like to view the FAQ, see events, or book a short free session?"),600);
  }
});

// Ensure chat starts minimized
chatBox.style.display = 'none';

// Setup testimonials horizontal scrolling (right-to-left)
(function(){
  const section = document.querySelector('.testimonials');
  if(!section) return;
  const items = Array.from(section.querySelectorAll('.testimonial'));
  if(items.length === 0) return;

  // create track and move items into it
  const track = document.createElement('div');
  track.className = 'testimonial-track';
  items.forEach(it => track.appendChild(it));

  // insert track after the heading inside section
  const heading = section.querySelector('h3');
  if(heading) heading.parentNode.insertBefore(track, heading.nextSibling);
  else section.appendChild(track);

  // clone items to create seamless loop
  items.forEach(it => track.appendChild(it.cloneNode(true)));

  // compute width and set animation vars
  requestAnimationFrame(()=>{
    const total = track.scrollWidth;
    const single = total / 2 || total;
    track.style.setProperty('--scroll-end', `-${single}px`);
    const speed = 60; // px per second
    const duration = Math.max(12, Math.round(single / speed));
    track.style.setProperty('--scroll-duration', `${duration}s`);
  });
})();
