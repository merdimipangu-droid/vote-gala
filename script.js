// ========== CONNEXION SUPABASE ==========
const SUPABASE_URL = "https://vakxwklnrgtiqmlggcyq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_gAbwfY1VE4AskWcDs8wrkw_m9Cjor1K";

// Correction : utilisez supabase (pas supabaseClient)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ========== DONNÉES DES CATÉGORIES ET CANDIDATS ==========
const categories = [
    { id: "Meilleur_Maestro", name: "🏆 Meilleur(e) Maestro", icon: '<i class="fas fa-chalkboard-user"></i>', description: "Direction et coordination" },
    { id: "Ponctualite", name: "⏰ Ponctualité", icon: '<i class="fas fa-clock"></i>', description: "Respect des horaires" },
    { id: "Meilleur_Soliste", name: "🎤 Meilleur(e) Soliste", icon: '<i class="fas fa-microphone-alt"></i>', description: "Performance vocale" },
    { id: "Sociabilite", name: "🤝 Sociabilité", icon: '<i class="fas fa-handshake"></i>', description: "Esprit d'équipe" },
    { id: "Meilleure_Soprane", name: "🎵 Meilleure Soprane", icon: '<i class="fas fa-music"></i>', description: "Voix cristalline" },
    { id: "Meilleur_Alti", name: "🎶 Meilleur Alti", icon: '<i class="fas fa-drumstick-bite"></i>', description: "Chaleur vocale" },
    { id: "Meilleur_Tenor", name: "🎼 Meilleur Ténor", icon: '<i class="fas fa-voice"></i>', description: "Puissance et douceur" },
    { id: "Meilleur_Basse", name: "🎸 Meilleur Basse", icon: '<i class="fas fa-guitar"></i>', description: "Profondeur remarquable" },
    { id: "Innovation", name: "💡 Innovation", icon: '<i class="fas fa-lightbulb"></i>', description: "Créativité musicale" }
];

const candidats = {
    Meilleur_Maestro: [
        { id: "dt1", nom: "Maestro Noella", description: "Direction inspirante", photo: "assets/maestro/nono.jpeg" },
        { id: "dt2", nom: "Maestro Pauline", description: " passion", photo: "assets/maestro/pauline.jpeg" },
        { id: "dt3", nom: "Maestro Alain", description: "le maître", photo: "assets/maestro/alain.jpeg" },
        { id: "dt4", nom: "Maestro Gaby", description: "Précision", photo: "assets/maestro/gaby.jpeg" },
        { id: "dt5", nom: "Maestro Dany", description: "créativité", photo: "assets/maestro/dany.jpeg" }
    ],
    Ponctualite: [
        { id: "pon1", nom: "Manu", description: "arrive très en avance par peur d'être en retard.", photo: "assets/ponctualite/manu.jpeg" },
        { id: "pon2", nom: "Chloé", description: "arrive 10 minutes avant, prête à commencer.", photo: "assets/ponctualite/chloe.jpeg" },
        { id: "pon3", nom: "Djessy", description: "30 minutes minimum, désorganisée mais attachante", photo: "assets/ponctualite/djessy.jpeg" },
        { id: "pon4", nom: "Keren", description: "toujours pile à l'heure, pas une minute avant.", photo: "assets/ponctualite/keren.jpeg" },
        { id: "pon5", nom: "Emilie", description: "5 à 15 minutes, avec une bonne excuse", photo: "assets/ponctualite/emilie.jpeg" }
    ],
    Meilleur_Soliste: [
        { id: "sol1", nom: "Amélia", description: "Voix envoûtante", photo: "assets/soliste/amelia.jpeg" },
        { id: "sol2", nom: "Pace", description: "Talent exceptionnel", photo: "assets/soliste/pace.jpeg" },
        { id: "sol3", nom: "Francillia", description: "Émotion pure", photo: "assets/soliste/francillia.jpeg" },
        { id: "sol4", nom: "Winner", description: "Puissance vocale", photo: "assets/soliste/winner.jpeg" },
        { id: "sol5", nom: "Djessy", description: "Charisme scénique", photo: "assets/soliste/djessy.jpeg" }
    ],
    Sociabilite: [
        { id: "soc1", nom: "Dada", description: "très ouverte, réceptive et aimante", photo: "assets/social/dada.jpeg" },
        { id: "soc2", nom: "Manu", description: "parle à tout le monde, fédère le groupe.", photo: "assets/social/manu.jpeg" },
        { id: "soc3", nom: "Grâce-julie", description: "souriante mais peu bavard, préfère écouter", photo: "assets/social/julie.jpeg" },
        { id: "soc4", nom: "M.Noella", description: "La maman de tous", photo: "assets/social/luz.jpeg" },
        { id: "soc5", nom: "Emilie", description: "raconte des histoires animées, rit fort.", photo: "assets/social/emilie.jpeg" }
    ],
    Meilleure_Soprane: [
        { id: "sop1", nom: "Amélia", description: "Un frisson d'amour au creux de l'oreille.", photo: "assets/soprano/amelia.jpeg" },
        { id: "sop2", nom: "Pace", description: "Sa voix, un baiser déposé sur un pétale de rose.", photo: "assets/soprano/pace.jpeg" },
        { id: "sop3", nom: "Dada", description: "Un soupir de lune dans une nuit d'été.", photo: "assets/soprano/dada.jpeg" },
        { id: "sop4", nom: "M.Pauline", description: "Un je t'aime chuchoté par le vent.", photo: "assets/soprano/pauline.jpeg" },
        { id: "sop5", nom: "Cynthia", description: "Une caresse de soie sur la peau.", photo: "assets/soprano/cycy.jpeg" }
    ],
    Meilleur_Alti: [
        { id: "alt1", nom: "Grâce-Julie", description: "Voix grave et ronde, qui réchauffe comme une couverture.", photo:"assets/alto/grace.jpeg" },
        { id: "alt2", nom: "Ya Sandra", description: "Voix profonde, sensuelle et apaisante.", photo: "assets/alto/sandra.jpeg" },
        { id: "alt3", nom: "Bénie", description: "Voix sombre et vibrante, parfaite pour le blues", photo: "assets/alto/beni.jpeg" },
        { id: "alt4", nom: "Mizou", description: "Voix sombre et profonde", photo: "assets/alto/mizou.jpeg" },
        { id: "alt5", nom: "Laurence", description: "Voix chaude et un peu rauque", photo: "assets/alto/laura.jpeg" }
    ],
    Meilleur_Tenor: [
        { id: "ten1", nom: "Djessy", description: "Le grand chef", photo: "assets/tenor/djessy.jpeg" },
        { id: "ten2", nom: "Winner", description: "le charmeur", photo: "assets/tenor/winner.jpeg" },
        { id: "ten3", nom: "Manu", description: "Voix sombre et puissante, un peu théâtrale", photo: "assets/tenor/manu.jpeg" },
        { id: "ten4", nom: "Georges", description: "Voix grave mais vibrante", photo: "assets/tenor/george.jpeg" },
        { id: "ten5", nom: "Glodi Nsimukala", description: "Voix ronde et enveloppante", photo: "assets/tenor/nsimukala.jpeg" }
    ],
    Meilleur_Basse: [
        { id: "bas1", nom: "Andy", description: "le génie des génies", photo: "assets/basse/andy.jpeg" },
        { id: "bas2", nom: "Paul", description: "Le calme dans la tempête", photo: "assets/basse/bev.jpeg" },
        { id: "bas3", nom: "Levy", description: "Le rocher des âges", photo: "assets/basse/levy.jpeg" },
        { id: "bas4", nom: "Pascal Dramali", description: "La révélation", photo: "assets/basse/pascal.jpeg" },
        { id: "bas5", nom: "Maxime", description: "La puissance", photo: "assets/basse/maxime.jpeg" }
    ],
    Innovation: [
        { id: "inn1", nom: "M. Winner", description: "Chant du jubilé", photo: "assets/innovation/winner.jpeg" },
        { id: "inn2", nom: "M. Djessy", description: "Kyrié", photo: "assets/innovation/djessy.jpeg" },
        { id: "inn3", nom: "M. Noella", description: "Car wash", photo: "assets/innovation/luz.jpeg" },
        { id: "inn4", nom: "M. Hugues", description: "Gloria", photo: "assets/innovation/alain.jpeg" },
        { id: "inn5", nom: "Dada", description: "MEDIAS", photo: "assets/innovation/hamuli.jpeg" }
    ]
};

// ========== VARIABLES GLOBALES ==========
let currentUserVotes = new Set();
let localVotes = [];
let localVotants = {};
let comments = [];
let votesChart = null;
let voteClosedBanner = null;
let activeWarningToast = null;
let publicationTimerInterval = null;
let realtimeListener = null;
let publishedCategories = JSON.parse(localStorage.getItem('publishedCategories') || '[]');
let allResultsPublished = localStorage.getItem('allResultsPublished') === 'true';
const MAX_VOTES = 160;
const CLOSURE_DATE = new Date(2026, 4, 16, 23, 59, 0);

// ========== FONCTIONS SUPABASE ==========
async function loadVotesFromSupabase() {
    const { data, error } = await supabase.from('votes').select('*');
    if (error) { console.error("Erreur chargement votes:", error); return []; }
    return data;
}
async function loadVotantsFromSupabase() {
    const { data, error } = await supabase.from('votants').select('*');
    if (error) { console.error("Erreur chargement votants:", error); return {}; }
    const votantsObj = {};
    data.forEach(v => { if (!votantsObj[v.ip]) votantsObj[v.ip] = {}; votantsObj[v.ip][v.categorie] = true; });
    return votantsObj;
}
async function loadCommentsFromSupabase() {
    const { data, error } = await supabase.from('commentaires').select('*').order('created_at', { ascending: false });
    if (error) return [];
    return data;
}
async function loadAllData() {
    localVotes = await loadVotesFromSupabase();
    localVotants = await loadVotantsFromSupabase();
    comments = await loadCommentsFromSupabase();
}
async function saveVoteToSupabase(vote) {
    const { error } = await supabase.from('votes').insert([vote]);
    if (error) console.error("Erreur sauvegarde vote:", error);
    return !error;
}
async function markUserVotedInSupabase(ip, categorie) {
    const { error } = await supabase.from('votants').insert([{ ip: ip, categorie: categorie }]);
    if (error) console.error("Erreur marquage votant:", error);
    return !error;
}
async function addCommentToSupabase(comment) {
    const { error } = await supabase.from('commentaires').insert([comment]);
    if (error) console.error("Erreur ajout commentaire:", error);
    return !error;
}
async function deleteCommentFromSupabase(commentId) {
    const { error } = await supabase.from('commentaires').delete().eq('id', commentId);
    if (error) console.error("Erreur suppression commentaire:", error);
    return !error;
}

// ========== FONCTIONS UTILITAIRES ==========
function getIP() {
    let ip = localStorage.getItem('visitor_ip');
    if (!ip) { ip = 'visitor_' + Math.random().toString(36).substr(2, 9); localStorage.setItem('visitor_ip', ip); }
    return ip;
}
function escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
function isSiteClosed() { return new Date() > CLOSURE_DATE; }
async function isMaxVotesReached() { await loadAllData(); return localVotes.length >= MAX_VOTES; }

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    let icon = '', bgColor = '';
    switch(type) {
        case 'success': icon = '<i class="fas fa-gem"></i>'; bgColor = 'linear-gradient(135deg, #D4AF37, #B8960C)'; break;
        case 'error': icon = '<i class="fas fa-exclamation-triangle"></i>'; bgColor = 'linear-gradient(135deg, #c0392b, #e74c3c)'; break;
        case 'info': icon = '<i class="fas fa-info-circle"></i>'; bgColor = 'linear-gradient(135deg, #2980b9, #3498db)'; break;
        default: icon = '<i class="fas fa-gem"></i>'; bgColor = 'linear-gradient(135deg, #D4AF37, #B8960C)';
    }
    toast.style.background = bgColor;
    toast.innerHTML = `${icon} ${message}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

function showVoteClosedWarning() {
    if (activeWarningToast) { activeWarningToast.remove(); activeWarningToast = null; }
    const toast = document.createElement('div');
    toast.className = 'toast-warning';
    toast.innerHTML = `<div class="toast-warning-content"><div class="toast-warning-icon"><i class="fas fa-lock"></i></div><div class="toast-warning-message"><strong>🔒 Votes clôturés</strong><p>Les votes sont terminés.<br>Résultats disponibles bientôt.</p></div></div><div class="toast-warning-progress"><div class="toast-warning-progress-bar"></div></div>`;
    document.body.appendChild(toast);
    activeWarningToast = toast;
    setTimeout(() => toast.classList.add('show'), 10);
    const progressBar = toast.querySelector('.toast-warning-progress-bar');
    if (progressBar) { progressBar.offsetHeight; progressBar.style.width = '100%'; }
    setTimeout(() => { if (activeWarningToast) { activeWarningToast.classList.remove('show'); setTimeout(() => { if (activeWarningToast) { activeWarningToast.remove(); activeWarningToast = null; } }, 400); } }, 3000);
}

function showVoteClosedBanner() {
    if (voteClosedBanner) voteClosedBanner.remove();
    const banner = document.createElement('div');
    banner.className = 'vote-closed-banner';
    banner.id = 'voteClosedBanner';
    banner.innerHTML = `<div class="vote-closed-banner-content"><div class="vote-closed-message"><div class="vote-closed-icon"><i class="fas fa-bell"></i></div><div class="vote-closed-text"><h3><i class="fas fa-lock"></i> VOTES TERMINÉS</h3><p>Les votes sont officiellement clôturés. Les résultats seront annoncés prochainement.</p></div></div><div class="vote-closed-badge"><i class="fas fa-hourglass-half"></i> Fin du vote</div></div>`;
    document.body.insertBefore(banner, document.body.firstChild);
    setTimeout(() => banner.classList.add('show'), 100);
    voteClosedBanner = banner;
}
function hideVoteClosedBanner() { if (voteClosedBanner) { voteClosedBanner.classList.remove('show'); setTimeout(() => { if (voteClosedBanner) voteClosedBanner.remove(); voteClosedBanner = null; }, 500); } }
function checkAndShowVoteStatus() { const currentStatus = localStorage.getItem('voteStatus') || 'open'; if (currentStatus === 'closed') showVoteClosedBanner(); else hideVoteClosedBanner(); }

function lancerGouttesChampagne() { const container = document.getElementById('dropletsContainer'); if (!container) return; const nbGouttes = 4 + Math.floor(Math.random() * 4); for(let i = 0; i < nbGouttes; i++) { setTimeout(() => { const droplet = document.createElement('div'); droplet.className = 'droplet'; droplet.style.left = (20 + Math.random() * 60) + 'px'; droplet.style.top = (5 + Math.random() * 20) + 'px'; container.appendChild(droplet); setTimeout(() => droplet.remove(), 1200); }, i * 80); } }
function initChampagneAnimation() { setInterval(() => lancerGouttesChampagne(), 4000); }

function lancerFeuArtifice() {
    const dureeTotale = 3000; const debut = Date.now();
    function lancerVague() { if (Date.now() - debut >= dureeTotale) return; for(let i = 0; i < 30; i++) { const particle = document.createElement('div'); particle.style.position = 'fixed'; particle.style.width = '12px'; particle.style.height = '12px'; const colors = ['#D4AF37', '#E5C55E', '#FFD700', '#FFFFFF', '#B8960C']; particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; particle.style.borderRadius = '50%'; particle.style.left = Math.random() * window.innerWidth + 'px'; particle.style.bottom = '0px'; particle.style.pointerEvents = 'none'; particle.style.zIndex = '9999'; particle.style.transition = 'all 3s ease-out'; document.body.appendChild(particle); setTimeout(() => { particle.style.transform = `translateY(${-150 - Math.random() * 250}px) translateX(${-60 + Math.random() * 120}px)`; particle.style.opacity = '0'; }, 10); setTimeout(() => particle.remove(), 3000); } setTimeout(lancerVague, 200); }
    lancerVague();
    setTimeout(() => { for(let i = 0; i < 60; i++) { const particle = document.createElement('div'); particle.style.position = 'fixed'; particle.style.width = '10px'; particle.style.height = '10px'; particle.style.backgroundColor = `hsl(${45 + Math.random() * 20}, 100%, 58%)`; particle.style.borderRadius = '50%'; particle.style.left = Math.random() * window.innerWidth + 'px'; particle.style.bottom = '0px'; particle.style.pointerEvents = 'none'; particle.style.zIndex = '9999'; particle.style.transition = 'all 3s ease-out'; document.body.appendChild(particle); setTimeout(() => { particle.style.transform = `translateY(${-200 - Math.random() * 300}px) translateX(${-80 + Math.random() * 160}px)`; particle.style.opacity = '0'; }, 10); setTimeout(() => particle.remove(), 3000); } }, 1500);
    showToast("Joyeux 25e anniversaire à la chorale", "success");
}
function lancerFeuArtificeResultats() {
    for(let i = 0; i < 100; i++) { setTimeout(() => { const particle = document.createElement('div'); particle.style.position = 'fixed'; particle.style.width = (6 + Math.random() * 10) + 'px'; particle.style.height = particle.style.width; const colors = ['#D4AF37', '#E5C55E', '#FFD700', '#FFFFFF', '#B8960C', '#F5E056']; particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; particle.style.borderRadius = '50%'; particle.style.left = Math.random() * window.innerWidth + 'px'; particle.style.bottom = '0px'; particle.style.pointerEvents = 'none'; particle.style.zIndex = '9999'; particle.style.transition = 'all 3s ease-out'; document.body.appendChild(particle); const angle = -40 + Math.random() * 80; const distance = 100 + Math.random() * 300; setTimeout(() => { particle.style.transform = `translateY(${-distance}px) translateX(${angle}px)`; particle.style.opacity = '0'; }, 10); setTimeout(() => particle.remove(), 3000); }, i * 30); }
    setTimeout(() => { for(let i = 0; i < 80; i++) { setTimeout(() => { const particle = document.createElement('div'); particle.style.position = 'fixed'; particle.style.width = (8 + Math.random() * 12) + 'px'; particle.style.height = particle.style.width; particle.style.backgroundColor = `hsl(${45 + Math.random() * 20}, 100%, 58%)`; particle.style.borderRadius = '50%'; particle.style.left = Math.random() * window.innerWidth + 'px'; particle.style.bottom = '0px'; particle.style.pointerEvents = 'none'; particle.style.zIndex = '9999'; particle.style.transition = 'all 3s ease-out'; document.body.appendChild(particle); const angle = -50 + Math.random() * 100; const distance = 80 + Math.random() * 250; setTimeout(() => { particle.style.transform = `translateY(${-distance}px) translateX(${angle}px)`; particle.style.opacity = '0'; }, 10); setTimeout(() => particle.remove(), 3000); }, i * 20); } }, 800);
    showToast("🏆 Félicitations à tous les gagnants ! 🏆", "success");
}

async function chargerVotesExistants() {
    const ip = getIP();
    await loadAllData();
    currentUserVotes.clear();
    for (const [voterIp, categoriesVoted] of Object.entries(localVotants)) { if (voterIp === ip) { Object.keys(categoriesVoted).forEach(catId => { currentUserVotes.add(catId); }); } }
}

async function addComment(name, message) {
    if (!message.trim()) { showToast("Veuillez écrire un message avant d'envoyer.", "error"); return false; }
    const newComment = { nom: name.trim() || "Anonyme", message: message.trim(), ip: getIP(), created_at: new Date().toISOString() };
    const success = await addCommentToSupabase(newComment);
    if (success) { await displayComments(); showToast("✓ Merci pour votre message !", "success"); return true; }
    return false;
}
async function deleteComment(commentId, isAdmin = false) {
    const isAdminLogged = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isAdmin && !isAdminLogged) { showToast("Vous n'êtes pas autorisé à supprimer ce message.", "error"); return; }
    const success = await deleteCommentFromSupabase(commentId);
    if (success) { await displayComments(); if (document.getElementById('adminCommentsList')) await chargerAdminComments(); showToast("Message supprimé.", "info"); }
}
async function displayComments() {
    const container = document.getElementById('commentsList');
    if (!container) return;
    await loadAllData();
    if (comments.length === 0) { container.innerHTML = '<div class="empty-comments"><i class="fas fa-comment-dots"></i><p>Soyez le premier à laisser un message !</p></div>'; return; }
    container.innerHTML = '';
    comments.forEach(comment => { const commentDate = new Date(comment.created_at); const dateStr = commentDate.toLocaleString('fr-FR'); const card = document.createElement('div'); card.className = 'comment-card'; card.innerHTML = `<div class="comment-header"><div class="comment-author"><i class="fas fa-user-circle"></i><strong>${escapeHtml(comment.nom)}</strong></div><div class="comment-date"><i class="far fa-calendar-alt"></i> ${dateStr}</div></div><div class="comment-message">${escapeHtml(comment.message)}</div>`; container.appendChild(card); });
}
function initComments() {
    const submitBtn = document.getElementById('submitCommentBtn');
    const commentName = document.getElementById('commentName');
    const commentMessage = document.getElementById('commentMessage');
    const charCount = document.getElementById('charCount');
    if (!submitBtn) return;
    if (commentMessage && charCount) { commentMessage.addEventListener('input', () => { charCount.textContent = commentMessage.value.length; }); }
    submitBtn.onclick = async () => { const name = commentName ? commentName.value : ''; const message = commentMessage ? commentMessage.value : ''; if (await addComment(name, message)) { if (commentMessage) commentMessage.value = ''; if (charCount) charCount.textContent = '0'; } };
    displayComments();
}
async function chargerAdminComments() {
    const container = document.getElementById('adminCommentsList');
    if (!container) return;
    await loadAllData();
    if (comments.length === 0) { container.innerHTML = '<p style="text-align:center;padding:20px;">Aucun commentaire pour le moment.</p>'; return; }
    container.innerHTML = '';
    comments.forEach(comment => { const date = new Date(comment.created_at); const card = document.createElement('div'); card.className = 'admin-comment-card'; card.innerHTML = `<div class="admin-comment-header"><strong><i class="fas fa-user"></i> ${escapeHtml(comment.nom)}</strong><span>${date.toLocaleString('fr-FR')}</span></div><div class="admin-comment-message">${escapeHtml(comment.message)}</div><div class="admin-comment-ip">IP: ${comment.ip}</div><button class="admin-comment-delete-btn" data-id="${comment.id}"><i class="fas fa-trash-alt"></i> Supprimer</button>`; container.appendChild(card); const deleteBtn = card.querySelector('.admin-comment-delete-btn'); if (deleteBtn) deleteBtn.onclick = () => deleteComment(comment.id, true); });
}

function afficherCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    categories.forEach(cat => { const card = document.createElement('div'); card.className = 'category-card'; card.innerHTML = `<div class="category-icon">${cat.icon}</div><h3>${cat.name}</h3><p>${cat.description}</p>`; card.onclick = () => selectionnerCategorie(cat.id); grid.appendChild(card); });
}
function selectionnerCategorie(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return;
    document.querySelector('.categories-wrapper').style.display = 'none';
    document.getElementById('candidatesPanel').style.display = 'block';
    document.getElementById('currentCategoryTitle').innerHTML = `${cat.icon} ${cat.name}`;
    const grid = document.getElementById('candidatesGrid');
    const liste = candidats[categoryId] || [];
    if (liste.length === 0) { grid.innerHTML = '<p style="text-align:center;">Aucun candidat</p>'; return; }
    grid.innerHTML = '';
    liste.forEach(candidat => {
        const dejaVote = currentUserVotes.has(categoryId);
        const card = document.createElement('div');
        card.className = 'candidate-card';
        let photoHtml = '';
        if (candidat.photo) { photoHtml = `<div class="candidate-photo" data-nom="${candidat.nom}" data-photo="${candidat.photo}"><img src="${candidat.photo}" alt="${candidat.nom}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'no-photo\'><i class=\'fas fa-user-circle\'></i></div>'; this.parentElement.style.cursor='pointer';"></div>`; }
        else { photoHtml = `<div class="no-photo" data-nom="${candidat.nom}"><i class="fas fa-user-circle"></i></div>`; }
        card.innerHTML = `${photoHtml}<h3>${candidat.nom}</h3><p>${candidat.description}</p><button class="vote-btn" data-categorie="${categoryId}" data-candidat-nom="${candidat.nom}" ${dejaVote ? 'disabled' : ''}>${dejaVote ? '<i class="fas fa-check"></i> Déjà voté' : '<i class="fas fa-vote-yea"></i> Voter'}</button>`;
        grid.appendChild(card);
    });
    document.querySelectorAll('.candidate-photo, .no-photo').forEach(photoDiv => { photoDiv.style.cursor = 'pointer'; photoDiv.addEventListener('click', (e) => { e.stopPropagation(); const nom = photoDiv.dataset.nom || 'Candidat'; let photoUrl = photoDiv.dataset.photo; if (photoDiv.classList.contains('no-photo') || !photoUrl) openPhotoModal(null, nom); else openPhotoModal(photoUrl, nom); }); });
    document.querySelectorAll('.vote-btn:not([disabled])').forEach(btn => { btn.onclick = () => voter(btn.dataset.categorie, btn.dataset.candidatNom); });
}

async function voter(categorie, candidatNom) {
    if (isSiteClosed()) { showVoteClosedWarning(); return; }
    if (await isMaxVotesReached()) { showVoteClosedWarning(); localStorage.setItem('voteStatus', 'closed'); return; }
    const currentStatus = localStorage.getItem('voteStatus') || 'open';
    if (currentStatus !== 'open') { if (currentStatus === 'paused') showToast("⏸️ Les votes sont temporairement suspendus.", "error"); else showVoteClosedWarning(); return; }
    const ip = getIP();
    if (localVotants[ip] && localVotants[ip][categorie]) { const catName = categories.find(c => c.id === categorie)?.name || categorie; showToast(`⚠️ Vous avez déjà voté pour la catégorie "${catName}" !`, "error"); return; }
    if (currentUserVotes.has(categorie)) { showToast("Vous avez déjà voté pour cette catégorie !", "error"); return; }
    const catName = categories.find(c => c.id === categorie)?.name || categorie;
    const vote = { categorie: categorie, categorie_nom: catName, candidat_nom: candidatNom, ip: ip, created_at: new Date().toISOString() };
    const voteSuccess = await saveVoteToSupabase(vote);
    if (voteSuccess) { const markSuccess = await markUserVotedInSupabase(ip, categorie); if (markSuccess) { await loadAllData(); currentUserVotes.add(categorie); showToast(`✓ Vote pour ${candidatNom} (${catName}) enregistré !`, "success"); selectionnerCategorie(categorie); afficherDashboard(); updateVotesChart(); } }
    else { showToast("❌ Erreur lors de l'enregistrement du vote", "error"); }
}

async function afficherDashboard() {
    const dashboardDiv = document.getElementById('dashboardContent');
    if (!dashboardDiv) return;
    const ip = getIP();
    await loadAllData();
    const userVotes = localVotes.filter(vote => vote.ip === ip);
    if (userVotes.length === 0) { dashboardDiv.innerHTML = '<div class="loading-results"><i class="fas fa-spinner fa-pulse"></i> Vous n\'avez pas encore voté. Choisissez une catégorie ci-dessus !</div>'; return; }
    const resultatsParCategorie = {};
    categories.forEach(cat => { resultatsParCategorie[cat.id] = { nom: cat.name, monVote: null, aVote: false }; });
    userVotes.forEach(vote => { if (resultatsParCategorie[vote.categorie]) { resultatsParCategorie[vote.categorie].monVote = vote.candidat_nom; resultatsParCategorie[vote.categorie].aVote = true; } });
    dashboardDiv.innerHTML = '';
    for (const [catId, data] of Object.entries(resultatsParCategorie)) { const card = document.createElement('div'); card.className = 'result-card'; if (data.aVote) { card.innerHTML = `<h3><i class="fas fa-check-circle"></i> ${data.nom}</h3><div class="my-vote"><i class="fas fa-vote-yea"></i> Votre vote : <strong>${data.monVote}</strong></div><div class="vote-message">Merci pour votre participation !</div>`; } else { card.innerHTML = `<h3><i class="far fa-circle"></i> ${data.nom}</h3><div class="my-vote"><i class="fas fa-clock"></i> En attente de votre vote</div><div class="vote-message">Retournez voter pour cette catégorie</div>`; } dashboardDiv.appendChild(card); }
}

function markCategoryResultsAsDisplayed(categoryId) { let displayedCategories = JSON.parse(localStorage.getItem('displayedResultCategories') || '[]'); if (!displayedCategories.includes(categoryId)) { displayedCategories.push(categoryId); localStorage.setItem('displayedResultCategories', JSON.stringify(displayedCategories)); } }
function isCategoryResultsDisplayed(categoryId) { let displayedCategories = JSON.parse(localStorage.getItem('displayedResultCategories') || '[]'); return displayedCategories.includes(categoryId); }
function clearDisplayedCategories() { localStorage.removeItem('displayedResultCategories'); }

function startRealtimeResultsListener() { if (realtimeListener) return; realtimeListener = setInterval(() => { const currentPage = window.location.pathname; if (!currentPage.includes('resultat.html')) return; const allPublished = localStorage.getItem('allResultsPublished') === 'true'; const publishedCats = JSON.parse(localStorage.getItem('publishedCategories') || '[]'); const displayedCats = JSON.parse(localStorage.getItem('displayedResultCategories') || '[]'); const pendingCategory = localStorage.getItem('pendingResultCategory'); if (pendingCategory) { const timerEnd = localStorage.getItem('pendingCategoryTimerEnd'); if (timerEnd && parseInt(timerEnd) > Date.now()) { const remaining = Math.ceil((parseInt(timerEnd) - Date.now()) / 1000); showCategoryCountdown(pendingCategory, remaining); } else { localStorage.removeItem('pendingResultCategory'); localStorage.removeItem('pendingCategoryTimerEnd'); const categoryToShow = pendingCategory; markCategoryResultsAsDisplayed(categoryToShow); const resultsMessage = document.getElementById('resultsMessage'); const finalContainer = document.getElementById('finalResultsContainer'); if (resultsMessage && finalContainer) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherResultatsParCategorie(categoryToShow); lancerFeuArtificeResultats(); } } return; } const notDisplayed = publishedCats.filter(cat => !displayedCats.includes(cat)); if (notDisplayed.length > 0 && !allPublished) { const categoryToShow = notDisplayed[0]; localStorage.setItem('pendingResultCategory', categoryToShow); localStorage.setItem('pendingCategoryTimerEnd', Date.now() + 10000); showCategoryCountdown(categoryToShow, 10); } if (allPublished) { const finalContainer = document.getElementById('finalResultsContainer'); if (finalContainer && finalContainer.style.display !== 'block') { const resultsMessage = document.getElementById('resultsMessage'); if (resultsMessage) resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherTousResultatsFinaux(); lancerFeuArtificeResultats(); } } }, 500); }

function showCategoryCountdown(categoryId, remaining) {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return;
    const resultsMessage = document.getElementById('resultsMessage');
    const finalContainer = document.getElementById('finalResultsContainer');
    if (!resultsMessage || !finalContainer) return;
    resultsMessage.style.display = 'block';
    finalContainer.style.display = 'none';
    const waitingIcon = resultsMessage.querySelector('.waiting-icon');
    const titleEl = resultsMessage.querySelector('h2');
    const statusEl = resultsMessage.querySelector('.voting-status');
    const backLink = resultsMessage.querySelector('.back-to-vote');
    if (waitingIcon) waitingIcon.style.display = 'none';
    if (titleEl) titleEl.style.display = 'none';
    if (statusEl) statusEl.style.display = 'none';
    if (backLink) backLink.style.display = 'none';
    let timerElement = document.getElementById('resultsCountdownTimer');
    if (!timerElement) { timerElement = document.createElement('div'); timerElement.id = 'resultsCountdownTimer'; timerElement.className = 'results-countdown-timer'; resultsMessage.appendChild(timerElement); }
    const totalSeconds = 10;
    const initialPercent = (remaining / totalSeconds) * 100;
    timerElement.innerHTML = `<div class="countdown-container"><div class="countdown-header"><div class="countdown-icon"><i class="fas fa-champagne-glasses"></i></div><div class="countdown-title">ANNONCE DES RÉSULTATS</div><div class="countdown-category">${cat.icon} ${cat.name}</div></div><div class="countdown-timer-wrapper"><div class="countdown-circle"><svg class="countdown-svg" viewBox="0 0 120 120"><circle cx="60" cy="60" r="54" class="countdown-bg-circle"/><circle cx="60" cy="60" r="54" class="countdown-progress-circle" stroke-dasharray="339.292" stroke-dashoffset="0" transform="rotate(-90 60 60)"/></svg><div class="countdown-number"><span class="countdown-value" id="countdownValue">${remaining}</span><span class="countdown-unit">SEC</span></div></div><div class="countdown-progress-bar-wrapper"><div class="countdown-progress-bar" id="countdownProgressFill" style="width: ${initialPercent}%"></div></div></div><div class="countdown-footer"><div class="countdown-message"><i class="fas fa-hourglass-half"></i> Préparation en cours...</div><div class="countdown-suspense"><span class="suspense-dot"></span><span class="suspense-dot"></span><span class="suspense-dot"></span></div></div></div>`;
    timerElement.style.display = 'block';
    const circumference = 2 * Math.PI * 54;
    const circle = timerElement.querySelector('.countdown-progress-circle');
    const progressFill = timerElement.querySelector('#countdownProgressFill');
    const countdownValue = timerElement.querySelector('#countdownValue');
    let currentRemaining = remaining;
    if (circle) { const initialOffset = circumference * (1 - (currentRemaining / totalSeconds)); circle.style.strokeDashoffset = initialOffset; }
    const interval = setInterval(() => { currentRemaining--; if (countdownValue) { countdownValue.textContent = currentRemaining; countdownValue.style.transform = 'scale(1.2)'; setTimeout(() => { if (countdownValue) countdownValue.style.transform = 'scale(1)'; }, 200); } const percent = (currentRemaining / totalSeconds) * 100; if (progressFill) progressFill.style.width = `${percent}%`; if (circle) { const offset = circumference * (1 - (currentRemaining / totalSeconds)); circle.style.strokeDashoffset = offset; } if (currentRemaining <= 0) { clearInterval(interval); if (countdownValue) countdownValue.textContent = 'GO!'; if (progressFill) progressFill.style.width = '100%'; if (circle) circle.style.strokeDashoffset = '0'; const container = timerElement.querySelector('.countdown-container'); if (container) { container.style.animation = 'countdownFlash 0.5s ease'; setTimeout(() => { if (container) container.style.animation = ''; }, 500); } setTimeout(() => { timerElement.style.display = 'none'; localStorage.removeItem('pendingResultCategory'); localStorage.removeItem('pendingCategoryTimerEnd'); markCategoryResultsAsDisplayed(categoryId); const resultsMessage = document.getElementById('resultsMessage'); const finalContainer = document.getElementById('finalResultsContainer'); if (resultsMessage && finalContainer) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherResultatsParCategorie(categoryId); lancerFeuArtificeResultats(); } }, 500); } }, 1000);
}

async function initResultsPage() {
    const resultsMessage = document.getElementById('resultsMessage');
    const finalContainer = document.getElementById('finalResultsContainer');
    if (!resultsMessage || !finalContainer) return;
    await loadAllData();
    loadPublishedCategories();
    const currentStatus = localStorage.getItem('voteStatus') || 'open';
    const allPublished = localStorage.getItem('allResultsPublished') === 'true';
    const publishedCats = JSON.parse(localStorage.getItem('publishedCategories') || '[]');
    const pendingCategory = localStorage.getItem('pendingResultCategory');
    if (pendingCategory) { const timerEnd = localStorage.getItem('pendingCategoryTimerEnd'); if (timerEnd && parseInt(timerEnd) > Date.now()) { const remaining = Math.ceil((parseInt(timerEnd) - Date.now()) / 1000); showCategoryCountdown(pendingCategory, remaining); } else { localStorage.removeItem('pendingResultCategory'); localStorage.removeItem('pendingCategoryTimerEnd'); const categoryToShow = pendingCategory; markCategoryResultsAsDisplayed(categoryToShow); resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherResultatsParCategorie(categoryToShow); lancerFeuArtificeResultats(); } return; }
    const lastPublishedCategory = localStorage.getItem('lastPublishedCategory');
    if (lastPublishedCategory && !allPublished && publishedCats.length > 0) { localStorage.setItem('pendingResultCategory', lastPublishedCategory); localStorage.setItem('pendingCategoryTimerEnd', Date.now() + 10000); localStorage.removeItem('lastPublishedCategory'); const remaining = 10; showCategoryCountdown(lastPublishedCategory, remaining); return; }
    if (allPublished || currentStatus === 'published') { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherTousResultatsFinaux(); return; }
    if (publishedCats.length > 0) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; const lastCat = publishedCats[publishedCats.length - 1]; afficherResultatsParCategorie(lastCat); return; }
    resultsMessage.style.display = 'block'; finalContainer.style.display = 'none';
}

async function afficherResultatsParCategorie(categoryId) {
    const grid = document.getElementById('finalResultsGrid');
    const winnerPhotoContainer = document.getElementById('winnerPhotoContainer');
    if (!grid) return;
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return;
    await loadAllData();
    const votesByCandidate = {};
    localVotes.filter(v => v.categorie === categoryId).forEach(vote => { votesByCandidate[vote.candidat_nom] = (votesByCandidate[vote.candidat_nom] || 0) + 1; });
    const sorted = Object.entries(votesByCandidate).sort((a, b) => b[1] - a[1]);
    const winner = sorted[0];
    const second = sorted[1];
    const third = sorted[2];
    const total = sorted.reduce((sum, [, nb]) => sum + nb, 0);
    const winnerPercent = winner ? ((winner[1] / MAX_VOTES) * 100).toFixed(1) : 0;
    const isTie = winner && second && winner[1] === second[1];
    const winnerMedal = isTie ? '<i class="fas fa-handshake"></i> EX-AEQUO' : '<i class="fas fa-trophy"></i>';
    const secondMedal = '<i class="fas fa-medal"></i>';
    const thirdMedal = '<i class="fas fa-medal"></i>';
    const winnerDisplay = isTie ? `${winner[0]} <i class="fas fa-equals"></i> ${second[0]}` : (winner ? winner[0] : '<i class="fas fa-ban"></i> Aucun vote');
    const winnerVotesDisplay = winner ? `${winner[1]} <i class="fas fa-vote-yea"></i>` : '';
    let winnerPhotoUrl = null;
    let winnerNom = winner ? winner[0] : null;
    if (winnerNom && !isTie) { const categoryCandidates = candidats[categoryId] || []; const winnerCandidate = categoryCandidates.find(c => c.nom === winnerNom); if (winnerCandidate && winnerCandidate.photo) { winnerPhotoUrl = winnerCandidate.photo; } }
    if (winnerPhotoContainer && winnerNom && !isTie) { winnerPhotoContainer.style.display = 'flex'; const winnerPhotoDiv = document.getElementById('winnerPhoto'); const winnerPhotoNameSpan = document.getElementById('winnerPhotoName'); if (winnerPhotoUrl) { winnerPhotoDiv.innerHTML = `<img src="${winnerPhotoUrl}" alt="${winnerNom}" onclick="openPhotoModal('${winnerPhotoUrl}', '${winnerNom}')">`; } else { winnerPhotoDiv.innerHTML = `<div class="no-photo-result" onclick="openPhotoModal(null, '${winnerNom}')"><i class="fas fa-user-circle fa-5x"></i></div>`; } winnerPhotoNameSpan.innerHTML = `<i class="fas fa-crown"></i> ${winnerNom}`; } else if (winnerPhotoContainer) { winnerPhotoContainer.style.display = 'none'; }
    grid.innerHTML = `<div class="final-result-card winner-card" style="grid-column:1/-1; text-align:center; margin-bottom:20px;"><div class="final-category-icon" style="font-size:3rem;">${cat.icon}</div><h2 style="color:var(--gold); font-size:2rem;">${cat.name}</h2><div class="winner-medal" style="font-size:2.5rem;">${winnerMedal}</div><div class="winner-name" style="font-size:1.8rem;">${winnerDisplay}</div><div class="winner-stats">${winnerVotesDisplay}${winnerPercent ? ` <i class="fas fa-chart-line"></i> (${winnerPercent}%)` : ''}</div>${!isTie && second ? `<div class="second-place">${secondMedal} ${second[0]} <span class="candidate-stats">(${second[1]} voix)</span></div>` : ''}${!isTie && third ? `<div class="third-place">${thirdMedal} ${third[0]} <span class="candidate-stats">(${third[1]} voix)</span></div>` : ''}<div class="total-votes" style="margin-top:15px;"><i class="fas fa-users"></i> Total: ${total} votants</div></div>`;
    const congrats = document.createElement('div'); congrats.className = 'congrats-banner'; congrats.innerHTML = `<p><i class="fas fa-heart"></i> Félicitations à ${isTie ? 'nos ex-aequo' : (winner ? winner[0] : 'tous')} pour ce prix ! <i class="fas fa-heart"></i></p>`; grid.appendChild(congrats);
}

async function afficherTousResultatsFinaux() {
    const grid = document.getElementById('finalResultsGrid');
    const winnerPhotoContainer = document.getElementById('winnerPhotoContainer');
    if (!grid) return;
    if (winnerPhotoContainer) winnerPhotoContainer.style.display = 'none';
    await loadAllData();
    const resultats = {};
    categories.forEach(cat => { resultats[cat.id] = { nom: cat.name, icon: cat.icon, votes: {}, total: 0 }; });
    localVotes.forEach(vote => { if (resultats[vote.categorie]) { resultats[vote.categorie].votes[vote.candidat_nom] = (resultats[vote.categorie].votes[vote.candidat_nom] || 0) + 1; resultats[vote.categorie].total++; } });
    const categoriesAvecVotes = Object.entries(resultats).filter(([id, data]) => data.total > 0);
    if (categoriesAvecVotes.length === 0) { grid.innerHTML = '<div class="empty-comments"><i class="fas fa-chart-simple"></i><p>Aucun vote enregistré pour le moment.</p></div>'; return; }
    grid.innerHTML = '';
    for (const [catId, data] of categoriesAvecVotes) {
        const sorted = Object.entries(data.votes).sort((a, b) => b[1] - a[1]);
        const winner = sorted[0];
        const second = sorted[1];
        const third = sorted[2];
        const total = data.total;
        const winnerPercent = winner ? ((winner[1] / MAX_VOTES) * 100).toFixed(1) : 0;
        const isTie = winner && second && winner[1] === second[1];
        const winnerMedal = isTie ? '<i class="fas fa-handshake"></i>' : '<i class="fas fa-trophy"></i>';
        const winnerDisplay = isTie ? `${winner[0]} <i class="fas fa-equals"></i> ${second[0]}` : (winner ? winner[0] : '<i class="fas fa-ban"></i> Aucun vote');
        let winnerPhotoUrl = null;
        let winnerNom = winner ? winner[0] : null;
        if (winnerNom && !isTie) { const categoryCandidates = candidats[catId] || []; const winnerCandidate = categoryCandidates.find(c => c.nom === winnerNom); if (winnerCandidate && winnerCandidate.photo) { winnerPhotoUrl = winnerCandidate.photo; } }
        const card = document.createElement('div');
        card.className = 'final-result-card';
        card.style.animation = 'winnerReveal 0.6s ease-out forwards';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        const photoHtml = winnerPhotoUrl ? `<div class="winner-card-photo" onclick="openPhotoModal('${winnerPhotoUrl}', '${winnerNom}')"><img src="${winnerPhotoUrl}" alt="${winnerNom}"></div>` : `<div class="winner-card-photo no-photo" onclick="openPhotoModal(null, '${winnerNom || ''}')"><i class="fas fa-user-circle"></i></div>`;
        card.innerHTML = `<div class="final-category-icon">${data.icon}</div><h3>${data.nom}</h3>${!isTie ? photoHtml : '<div class="winner-card-photo no-photo"><i class="fas fa-handshake"></i></div>'}<div class="winner-medal">${winnerMedal}</div><div class="winner-name">${winnerDisplay}</div><div class="winner-stats"><i class="fas fa-chart-simple"></i> ${winner ? winner[1] + ' voix (' + winnerPercent + '%)' : '<i class="fas fa-ban"></i> Aucun vote'}</div>${!isTie && second ? `<div class="second-place"><i class="fas fa-medal"></i> ${second[0]} <span class="candidate-stats">(${second[1]} voix)</span></div>` : ''}${!isTie && third ? `<div class="third-place"><i class="fas fa-medal"></i> ${third[0]} <span class="candidate-stats">(${third[1]} voix)</span></div>` : ''}${isTie ? `<div class="second-place"><i class="fas fa-handshake"></i> Égalité parfaite !</div>` : ''}<div class="total-votes" style="margin-top:15px;"><i class="fas fa-users"></i> Total: ${total} votants</div>`;
        grid.appendChild(card);
        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 100);
    }
}

function updateVoteStatusUI() { const statusBadge = document.getElementById('statusBadge'); const statusText = document.getElementById('statusText'); const currentStatus = localStorage.getItem('voteStatus') || 'open'; if (!statusBadge) return; switch(currentStatus) { case 'open': statusBadge.className = 'status-badge open'; statusBadge.innerHTML = '🟢 Votes ouverts'; if(statusText) statusText.innerHTML = 'Les utilisateurs peuvent voter normalement'; break; case 'paused': statusBadge.className = 'status-badge paused'; statusBadge.innerHTML = '🟡 Votes en pause'; if(statusText) statusText.innerHTML = 'Les utilisateurs voient un message d\'attente'; break; case 'closed': statusBadge.className = 'status-badge closed'; statusBadge.innerHTML = '🔴 Votes clôturés'; if(statusText) statusText.innerHTML = 'Les votes sont terminés. Prêt à publier.'; break; case 'published': statusBadge.className = 'status-badge published'; statusBadge.innerHTML = '📢 Résultats publiés'; if(statusText) statusText.innerHTML = 'Les résultats ont été publiés !'; break; } }
function setVoteStatus(newStatus) { localStorage.setItem('voteStatus', newStatus); updateVoteStatusUI(); const messages = { 'open': '✅ Votes ouverts.', 'paused': '⏸️ Votes en pause.', 'closed': '🔴 Votes clôturés.', 'published': '📢 Résultats publiés !' }; showToast(messages[newStatus], "info"); if (newStatus === 'closed') showVoteClosedBanner(); else hideVoteClosedBanner(); }

function showPublicationTimer(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return;
    let timerModal = document.getElementById('publicationTimerModal');
    if (timerModal) timerModal.remove();
    timerModal = document.createElement('div');
    timerModal.id = 'publicationTimerModal';
    timerModal.className = 'publication-timer-modal';
    timerModal.innerHTML = `<div class="publication-timer-content"><div class="publication-timer-header"><i class="fas fa-champagne-glasses"></i><h3>Publication des résultats</h3></div><div class="publication-timer-body"><p>Préparez-vous à publier les résultats de :</p><h2>${cat.icon} ${cat.name}</h2><div class="publication-timer-circle"><span class="publication-timer-number" id="publicationTimerNumber">10</span><span class="publication-timer-label">secondes</span></div><div class="publication-timer-progress"><div class="publication-timer-progress-bar" id="publicationTimerProgress"></div></div><p class="publication-timer-warning">⚠️ La publication est imminente</p></div><div class="publication-timer-footer"><button id="cancelPublicationBtn" class="publication-cancel-btn"><i class="fas fa-times"></i> Annuler</button><button id="confirmPublicationBtn" class="publication-confirm-btn"><i class="fas fa-check"></i> Publier maintenant</button></div></div>`;
    document.body.appendChild(timerModal);
    setTimeout(() => timerModal.classList.add('show'), 10);
    let countdown = 10;
    const timerNumber = document.getElementById('publicationTimerNumber');
    const progressBar = document.getElementById('publicationTimerProgress');
    if (publicationTimerInterval) clearInterval(publicationTimerInterval);
    publicationTimerInterval = setInterval(() => { countdown--; if (timerNumber) timerNumber.textContent = countdown; if (progressBar) progressBar.style.width = `${(10 - countdown) * 10}%`; if (countdown <= 0) { clearInterval(publicationTimerInterval); publicationTimerInterval = null; closePublicationTimerModal(); executePublishCategory(categoryId); } }, 1000);
    const cancelBtn = document.getElementById('cancelPublicationBtn'); if (cancelBtn) { cancelBtn.onclick = () => { clearInterval(publicationTimerInterval); publicationTimerInterval = null; closePublicationTimerModal(); showToast("Publication annulée.", "info"); }; }
    const confirmBtn = document.getElementById('confirmPublicationBtn'); if (confirmBtn) { confirmBtn.onclick = () => { clearInterval(publicationTimerInterval); publicationTimerInterval = null; closePublicationTimerModal(); executePublishCategory(categoryId); }; }
}
function closePublicationTimerModal() { const modal = document.getElementById('publicationTimerModal'); if (modal) { modal.classList.remove('show'); setTimeout(() => modal.remove(), 300); } }
function executePublishCategory(categoryId) { publishedCategories.push(categoryId); savePublishedCategories(); localStorage.setItem('lastPublishedCategory', categoryId); localStorage.setItem('resultsDisplayed', 'false'); localStorage.removeItem('timerEndTime'); renderPublishCategoriesGrid(); window.dispatchEvent(new StorageEvent('storage', { key: 'lastPublishedCategory', newValue: categoryId, oldValue: null })); showToast(`✅ Résultats de la catégorie publiés !`, "success"); }
function loadPublishedCategories() { publishedCategories = JSON.parse(localStorage.getItem('publishedCategories') || '[]'); allResultsPublished = localStorage.getItem('allResultsPublished') === 'true'; }
function savePublishedCategories() { localStorage.setItem('publishedCategories', JSON.stringify(publishedCategories)); localStorage.setItem('allResultsPublished', allResultsPublished ? 'true' : 'false'); }
function isCategoryPublished(categoryId) { return publishedCategories.includes(categoryId); }
async function publishCategory(categoryId) { if (isCategoryPublished(categoryId)) { showToast(`Les résultats de cette catégorie ont déjà été publiés.`, "error"); return; } const currentStatus = localStorage.getItem('voteStatus') || 'open'; if (currentStatus !== 'closed') { showToast("Veuillez d'abord clôturer les votes.", "error"); return; } await loadAllData(); const votesForCategory = localVotes.filter(v => v.categorie === categoryId); if (votesForCategory.length === 0) { showToast("❌ Cette catégorie n'a reçu aucun vote. Publication impossible.", "error"); return; } showPublicationTimer(categoryId); }
function publishAllCategories() { if (allResultsPublished) { showToast("Tous les résultats ont déjà été publiés.", "error"); return; } const currentStatus = localStorage.getItem('voteStatus') || 'open'; if (currentStatus !== 'closed') { showToast("Veuillez d'abord clôturer les votes.", "error"); return; } const unpublished = categories.filter(cat => !isCategoryPublished(cat.id)); if (unpublished.length === 0) { showToast("Toutes les catégories sont déjà publiées.", "info"); return; } const noVotesCats = []; unpublished.forEach(cat => { const votesCount = localVotes.filter(v => v.categorie === cat.id).length; if (votesCount === 0) noVotesCats.push(cat.name); }); if (noVotesCats.length > 0) { showToast(`❌ Publication impossible : ${noVotesCats.join(', ')} n'ont aucun vote.`, "error"); return; } unpublished.forEach(cat => { if (!publishedCategories.includes(cat.id)) publishedCategories.push(cat.id); }); allResultsPublished = true; savePublishedCategories(); localStorage.setItem('voteStatus', 'published'); localStorage.setItem('resultsPublished', 'true'); localStorage.setItem('allResultsPublished', 'true'); localStorage.removeItem('resultsDisplayed'); localStorage.removeItem('timerEndTime'); renderPublishCategoriesGrid(); showToast("🎉 Tous les résultats ont été publiés !", "success"); }
async function renderPublishCategoriesGrid() { const container = document.getElementById('publishCategoriesGrid'); if (!container) return; loadPublishedCategories(); await loadAllData(); const votesByCategory = {}; categories.forEach(cat => { votesByCategory[cat.id] = {}; }); localVotes.forEach(vote => { if (votesByCategory[vote.categorie]) { votesByCategory[vote.categorie][vote.candidat_nom] = (votesByCategory[vote.categorie][vote.candidat_nom] || 0) + 1; } }); container.innerHTML = ''; const currentStatus = localStorage.getItem('voteStatus') || 'open'; const allCategoriesHaveVotes = categories.every(cat => { const votes = votesByCategory[cat.id]; const total = Object.entries(votes).reduce((sum, [, nb]) => sum + nb, 0); return total > 0; }); const allPublishedNow = categories.every(cat => isCategoryPublished(cat.id)); categories.forEach(cat => { const isPublished = isCategoryPublished(cat.id); const votes = votesByCategory[cat.id]; const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]); const winner = sorted[0]; const total = sorted.reduce((sum, [, nb]) => sum + nb, 0); const hasVotes = total > 0; const isDisabled = currentStatus !== 'closed' || !hasVotes; const card = document.createElement('div'); card.className = `publish-category-card ${isPublished ? 'published' : ''} ${isDisabled ? 'disabled' : ''}`; let winnerHtml = ''; if (!hasVotes) { winnerHtml = '❌ Aucun vote - Publication impossible'; } else if (isPublished) { winnerHtml = `✅ Publié : ${winner ? winner[0] : '-'} (${winner[1]} voix)`; } else { winnerHtml = winner ? `🏆 ${winner[0]}<br><small>${winner[1]} voix</small>` : '⏳ Aucun vote'; } card.innerHTML = `<div class="publish-category-icon">${cat.icon}</div><h4>${cat.name}</h4><div class="publish-category-stats">${total} vote${total !== 1 ? 's' : ''}</div><div class="publish-category-winner">${winnerHtml}</div>`; if (!isPublished && !isDisabled && hasVotes) card.onclick = () => publishCategory(cat.id); container.appendChild(card); }); const publishAllBtn = document.getElementById('publishAllResultsBtn'); if (publishAllBtn) { const allHaveVotes = allCategoriesHaveVotes; const allPublished = allPublishedNow; const canPublishAll = currentStatus === 'closed' && allHaveVotes && !allPublished; if (canPublishAll) { publishAllBtn.disabled = false; publishAllBtn.style.opacity = '1'; publishAllBtn.style.cursor = 'pointer'; publishAllBtn.innerHTML = '<i class="fas fa-fire"></i> 🎉 PUBLIER TOUS LES RÉSULTATS 🎉'; } else if (allPublished) { publishAllBtn.disabled = true; publishAllBtn.style.opacity = '0.5'; publishAllBtn.style.cursor = 'not-allowed'; publishAllBtn.innerHTML = '<i class="fas fa-check-circle"></i> ✅ TOUS LES RÉSULTATS SONT PUBLIÉS'; } else { publishAllBtn.disabled = true; publishAllBtn.style.opacity = '0.5'; publishAllBtn.style.cursor = 'not-allowed'; if (!allHaveVotes) { publishAllBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> ⚠️ ATTENTION : Certaines catégories n\'ont aucun vote'; } else { publishAllBtn.innerHTML = '<i class="fas fa-lock"></i> 🔒 Clôturez d\'abord les votes'; } } } }

function animateChartData(newData) { if (!votesChart) return; const steps = 20; const stepDuration = 30; const startData = votesChart.data.datasets[0].data; const diff = newData.map((val, idx) => val - startData[idx]); let step = 0; const interval = setInterval(() => { step++; const progress = step / steps; const intermediateData = startData.map((val, idx) => val + diff[idx] * progress); votesChart.data.datasets[0].data = intermediateData; votesChart.update('none'); if (step >= steps) { clearInterval(interval); votesChart.data.datasets[0].data = newData; votesChart.update(); } }, stepDuration); }
async function initVotesChart() { const ctx = document.getElementById('votesChart'); if (!ctx) return; await loadAllData(); const votesByCategory = {}; categories.forEach(cat => { votesByCategory[cat.id] = 0; }); localVotes.forEach(vote => { if (votesByCategory[vote.categorie] !== undefined) votesByCategory[vote.categorie]++; }); const votesData = categories.map(cat => votesByCategory[cat.id]); if (votesChart) votesChart.destroy(); votesChart = new Chart(ctx, { type: 'bar', data: { labels: categories.map(c => c.name), datasets: [{ label: 'Nombre de votes', data: votesData, backgroundColor: 'rgba(212, 175, 55, 0.7)', borderColor: 'rgba(212, 175, 55, 1)', borderWidth: 1, borderRadius: 8, barPercentage: 0.6, maxBarThickness: 60 }] }, options: { responsive: true, maintainAspectRatio: true, scales: { y: { beginAtZero: true, max: MAX_VOTES, grid: { color: 'rgba(212,175,55,0.1)' }, ticks: { color: '#b0b0b0', stepSize: 20 } }, x: { grid: { display: false }, ticks: { color: '#b0b0b0', rotation: 45, maxRotation: 45 } } }, plugins: { legend: { labels: { color: '#b0b0b0', font: { family: 'Montserrat' } } }, tooltip: { backgroundColor: '#111111', titleColor: '#D4AF37', bodyColor: '#ffffff', callbacks: { label: function(context) { const value = context.raw; const percentage = ((value / MAX_VOTES) * 100).toFixed(1); return `${value} voix (${percentage}% du maximum ${MAX_VOTES})`; } } } } } }); }
async function updateVotesChart() { await loadAllData(); const votesByCategory = {}; categories.forEach(cat => { votesByCategory[cat.id] = 0; }); localVotes.forEach(vote => { if (votesByCategory[vote.categorie] !== undefined) votesByCategory[vote.categorie]++; }); const votesData = categories.map(cat => votesByCategory[cat.id]); if (votesChart) { animateChartData(votesData); } else { await initVotesChart(); } }
function initTableFilters() { const filterCategory = document.getElementById('filterCategory'); const filterCandidate = document.getElementById('filterCandidate'); if (filterCategory) filterCategory.addEventListener('input', () => applyTableFilters()); if (filterCandidate) filterCandidate.addEventListener('input', () => applyTableFilters()); }
function applyTableFilters() { const filterCategory = document.getElementById('filterCategory')?.value.toLowerCase() || ''; const filterCandidate = document.getElementById('filterCandidate')?.value.toLowerCase() || ''; const tbody = document.getElementById('votesTableBody'); if (!tbody) return; const rows = tbody.querySelectorAll('tr'); rows.forEach(row => { const category = row.cells[1]?.textContent.toLowerCase() || ''; const candidate = row.cells[2]?.textContent.toLowerCase() || ''; row.style.display = (filterCategory === '' || category.includes(filterCategory)) && (filterCandidate === '' || candidate.includes(filterCandidate)) ? '' : 'none'; }); }
function checkAdminSession() { if (localStorage.getItem('adminLoggedIn') === 'true' && document.getElementById('adminZone')) { document.getElementById('loginZone').style.display = 'none'; document.getElementById('adminZone').style.display = 'block'; updateVoteStatusUI(); chargerAdminData(); chargerAdminComments(); initVotesChart(); initTableFilters(); renderPublishCategoriesGrid(); checkAndShowVoteStatus(); } }
function initAdmin() { checkAdminSession(); const loginBtn = document.getElementById('loginBtn'); const adminCode = document.getElementById('adminCode'); const loginError = document.getElementById('loginError'); if (loginBtn) { loginBtn.onclick = () => { if (adminCode.value === "GALA2026" || adminCode.value === "admin123") { localStorage.setItem('adminLoggedIn', 'true'); document.getElementById('loginZone').style.display = 'none'; document.getElementById('adminZone').style.display = 'block'; updateVoteStatusUI(); chargerAdminData(); chargerAdminComments(); initVotesChart(); initTableFilters(); renderPublishCategoriesGrid(); checkAndShowVoteStatus(); showToast("Bienvenue administrateur !", "success"); } else { loginError.textContent = "Code incorrect. Accès refusé."; } }; }
document.getElementById('refreshBtn')?.addEventListener('click', async () => { await loadAllData(); await chargerAdminData(); await initVotesChart(); await renderPublishCategoriesGrid(); await chargerAdminComments(); showToast("Données rafraîchies !", "info"); });
document.getElementById('exportBtn')?.addEventListener('click', exporterDonneesAdmin);
document.getElementById('openVotesBtn')?.addEventListener('click', () => { setVoteStatus('open'); localStorage.setItem('resultsPublished', 'false'); localStorage.removeItem('resultsDisplayed'); });
document.getElementById('pauseVotesBtn')?.addEventListener('click', () => setVoteStatus('paused'));
document.getElementById('closeVotesBtn')?.addEventListener('click', () => { if(confirm("Confirmez-vous la clôture des votes ?")) setVoteStatus('closed'); });
document.getElementById('publishAllResultsBtn')?.addEventListener('click', publishAllCategories);
document.getElementById('resetAllBtn')?.addEventListener('click', async () => { if(confirm("⚠️ RÉINITIALISATION COMPLÈTE ?\nCette action est IRRÉVERSIBLE !")) { await supabase.from('votes').delete().neq('id', 0); await supabase.from('votants').delete().neq('id', 0); await supabase.from('commentaires').delete().neq('id', 0); localVotes = []; localVotants = {}; currentUserVotes.clear(); comments = []; publishedCategories = []; allResultsPublished = false; savePublishedCategories(); localStorage.removeItem('visitor_ip'); localStorage.removeItem('adminLoggedIn'); localStorage.removeItem('resultsPublished'); localStorage.removeItem('resultsDisplayed'); localStorage.removeItem('timerEndTime'); localStorage.removeItem('voteStatus'); clearDisplayedCategories(); for(let i = 0; i < localStorage.length; i++) { const key = localStorage.key(i); if(key && key.startsWith('device_voted_')) localStorage.removeItem(key); } setVoteStatus('open'); localStorage.setItem('resultsPublished', 'false'); await chargerAdminData(); await chargerAdminComments(); if (votesChart) votesChart.destroy(); await initVotesChart(); await renderPublishCategoriesGrid(); showToast("✅ Toutes les données ont été réinitialisées !", "success"); } }); }
async function chargerAdminData() { await loadAllData(); const totalVotes = localVotes.length; const totalVotants = Object.keys(localVotants).length; const tauxParticipation = totalVotes > 0 ? ((totalVotes / MAX_VOTES) * 100).toFixed(1) : 0; const votesRestants = Math.max(0, MAX_VOTES - totalVotes); const statsGrid = document.getElementById('statsGrid'); if(statsGrid) statsGrid.innerHTML = `<div class="stat-card"><div class="stat-number">${totalVotes}</div><div class="stat-label">Votes totaux</div></div><div class="stat-card"><div class="stat-number">${totalVotants}</div><div class="stat-label">Votants uniques</div></div><div class="stat-card"><div class="stat-number">${categories.length}</div><div class="stat-label">Catégories</div></div><div class="stat-card"><div class="stat-number">${tauxParticipation}%</div><div class="stat-label">Objectif atteint</div></div><div class="stat-card"><div class="stat-number">${votesRestants}</div><div class="stat-label">Votes restants</div></div><div class="stat-card"><div class="stat-number">${MAX_VOTES}</div><div class="stat-label">Objectif max</div></div>`; const container = document.getElementById('categorySummary'); if(container) { const resultatsParCategorie = {}; categories.forEach(cat => { resultatsParCategorie[cat.id] = { nom: cat.name, votes: {}, total: 0 }; }); localVotes.forEach(vote => { if(resultatsParCategorie[vote.categorie]) { resultatsParCategorie[vote.categorie].votes[vote.candidat_nom] = (resultatsParCategorie[vote.categorie].votes[vote.candidat_nom] || 0) + 1; resultatsParCategorie[vote.categorie].total++; } }); container.innerHTML = ''; for (const [catId, data] of Object.entries(resultatsParCategorie)) { const sorted = Object.entries(data.votes).sort((a, b) => b[1] - a[1]); const winner = sorted[0]; const catIcon = categories.find(c => c.id === catId)?.icon || ''; const card = document.createElement('div'); card.className = 'category-summary-card'; card.innerHTML = `<h4>${catIcon} ${data.nom}</h4><div class="total"><i class="fas fa-chart-simple"></i> Total votes : ${data.total}</div><div class="winner"><i class="fas fa-crown"></i> Leader : ${winner ? winner[0] : 'Aucun vote'} (${winner ? winner[1] : 0} voix)</div>`; container.appendChild(card); } } const tbody = document.getElementById('votesTableBody'); if(tbody) { if(localVotes.length === 0) { tbody.innerHTML = '<tr><td colspan="4" class="loading-cell">Aucun vote enregistré</td></tr>'; } else { tbody.innerHTML = ''; [...localVotes].reverse().forEach(vote => { const date = new Date(vote.created_at); tbody.innerHTML += `<tr><td>${date.toLocaleString('fr-FR')}</td><td><strong>${vote.categorie_nom}</strong></td><td>${vote.candidat_nom}</td><td><code>${vote.ip}</code></td></tr>`; }); applyTableFilters(); } } }
function exporterDonneesAdmin() { const data = { exportDate: new Date().toISOString(), evenement: "Gala 25 ans", statistiques: { totalVotes: localVotes.length, totalVotants: Object.keys(localVotants).length, categories: categories.length, voteStatus: localStorage.getItem('voteStatus'), maxVotes: MAX_VOTES }, votes: localVotes, votants: localVotants, commentaires: comments, publishedCategories: publishedCategories, allResultsPublished: allResultsPublished }; const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `votes_gala_${new Date().toISOString().slice(0,19)}.json`; a.click(); URL.revokeObjectURL(a.href); showToast("Export JSON généré !", "success"); }
function openPhotoModal(photoUrl, nom) { const modal = document.getElementById('photoModal'); const modalImg = document.getElementById('modalImage'); const modalCaption = document.getElementById('modalCaption'); if (!modal || !modalImg || !modalCaption) return; if (photoUrl) { modalImg.src = photoUrl; modalImg.alt = nom; modalCaption.innerHTML = `<i class="fas fa-user"></i> ${nom}`; modalImg.style.display = 'block'; } else { modalImg.style.display = 'none'; modalCaption.innerHTML = `<i class="fas fa-user-circle fa-5x"></i><br><br>${nom}<br><span style="font-size:0.8rem;">Photo non disponible</span>`; } modal.style.display = 'block'; document.body.style.overflow = 'hidden'; }
function closePhotoModal() { const modal = document.getElementById('photoModal'); if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; } }
function initPhotoModal() { const modal = document.getElementById('photoModal'); const closeBtn = document.querySelector('.photo-modal-close'); if (!modal) return; if (closeBtn) closeBtn.onclick = closePhotoModal; modal.onclick = (e) => { if (e.target === modal) closePhotoModal(); }; document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'block') closePhotoModal(); }); }
function setupCrossTabSync() { window.addEventListener('storage', (e) => { if (e.key === 'publishedCategories' || e.key === 'allResultsPublished' || e.key === 'lastPublishedCategory') { console.log('🔄 Synchronisation détectée :', e.key, e.newValue); if (window.location.pathname.includes('resultat.html')) { initResultsPage(); } if (window.location.pathname.includes('admin.html')) { renderPublishCategoriesGrid(); } } }); }
function addForceRefreshButton() { if (!window.location.pathname.includes('resultat.html')) return; if (document.getElementById('forceRefreshBtn')) return; const btn = document.createElement('button'); btn.id = 'forceRefreshBtn'; btn.innerHTML = '<i class="fas fa-sync-alt"></i> Voir les résultats publiés'; btn.style.cssText = `position: fixed; bottom: 20px; right: 20px; background: linear-gradient(135deg, #D4AF37, #B8960C); border: none; padding: 10px 20px; border-radius: 40px; color: #0a0a0a; font-weight: bold; cursor: pointer; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.3); font-family: 'Montserrat', sans-serif; transition: all 0.3s;`; btn.onmouseover = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 4px 15px rgba(212,175,55,0.5)'; }; btn.onmouseout = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)'; }; btn.onclick = async () => { await loadAllData(); loadPublishedCategories(); const publishedCats = JSON.parse(localStorage.getItem('publishedCategories') || '[]'); const allPublished = localStorage.getItem('allResultsPublished') === 'true'; const resultsMessage = document.getElementById('resultsMessage'); const finalContainer = document.getElementById('finalResultsContainer'); if (allPublished || publishedCats.length === categories.length) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; await afficherTousResultatsFinaux(); lancerFeuArtificeResultats(); } else if (publishedCats.length > 0) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; const lastCat = publishedCats[publishedCats.length - 1]; await afficherResultatsParCategorie(lastCat); lancerFeuArtificeResultats(); } else { showToast("Aucun résultat publié pour le moment.", "info"); } showToast("Résultats rechargés !", "success"); }; document.body.appendChild(btn); }

document.addEventListener('DOMContentLoaded', async () => {
    if (isSiteClosed()) { document.body.innerHTML = '<div class="site-closed"><i class="fas fa-lock"></i><h1>Votes terminés</h1><p>Merci pour votre participation !</p><p>Le gala du 25e anniversaire est maintenant clos.</p></div>'; document.body.style.background = '#0a0a0a'; document.body.style.color = '#fff'; document.body.style.display = 'flex'; document.body.style.justifyContent = 'center'; document.body.style.alignItems = 'center'; document.body.style.minHeight = '100vh'; return; }
    checkAndShowVoteStatus();
    initPhotoModal();
    document.getElementById('fireworksBtn')?.addEventListener('click', lancerFeuArtifice);
    document.getElementById('backBtn')?.addEventListener('click', () => { document.getElementById('candidatesPanel').style.display = 'none'; document.querySelector('.categories-wrapper').style.display = 'block'; });
    if (document.getElementById('champagneGlasses')) initChampagneAnimation();
    initComments();
    setupCrossTabSync();
    const path = window.location.pathname;
    if (path.includes('resultat.html')) { await initResultsPage(); addForceRefreshButton(); }
    else if (path.includes('admin.html')) { initAdmin(); }
    else { await chargerVotesExistants(); afficherCategories(); await afficherDashboard(); startRealtimeResultsListener(); }
});
