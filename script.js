const guidanceData = [
  {
    title: "Mindful Reading",
    desc: "A quiet 20-minute reading session to restore your inner calm.",
    detail:
      "ENTPs often feel mentally overstimulated after constant social interaction and idea-chasing. Slow reading helps stabilize emotional focus and reduces mental noise.",
    tag: "ENTP Recovery"
  },

  {
    title: "Gentle Walk Outside",
    desc: "Light outdoor movement to reset your nervous system.",
    detail:
      "Fresh air and low-pressure movement help intuitive personalities reconnect with the present moment instead of overthinking future possibilities.",
    tag: "Mental Reset"
  },

  {
    title: "Calming Playlist",
    desc: "Curated ambient sounds matched to your energy level.",
    detail:
      "Your emotional energy appears low today. Soft instrumental music can help regulate stimulation and prevent emotional burnout.",
    tag: "Recovery"
  }
];

const container = document.getElementById("guidance-cards");

guidanceData.forEach((item) => {
  container.innerHTML += `
  <div class="guidance-card">
    <div class="guidance-tag">
      ${item.tag}
    </div>

    <div class="guidance-title">
      ${item.title}
    </div>

    <div class="guidance-desc">
      ${item.desc}
    </div>

    <div class="guidance-detail">
      ${item.detail}
    </div>
  </div>
  `;
});

lucide.createIcons();