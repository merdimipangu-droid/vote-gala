// ========== CONFIGURATION FIREBASE ==========
const firebaseConfig = {
    apiKey: "AIzaSyCvJfKJ2lVwOGindjudGdD7VGC1AHi72Yo",
    authDomain: "vote-gala-25an.firebaseapp.com",
    projectId: "vote-gala-25an",
    storageBucket: "vote-gala-25an.firebasestorage.app",
    messagingSenderId: "439355806150",
    appId: "1:439355806150:web:3be1ad0e9c07d6e0d9e2c7"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
        { id: "pon1", nom: "Manu", description: "arrive très en avance", photo: "assets/ponctualite/manu.jpeg" },
        { id: "pon2", nom: "Chloé", description: "arrive 10 minutes avant", photo: "assets/ponctualite/chloe.jpeg" },
        { id: "pon3", nom: "Djessy", description: "30 minutes minimum", photo: "assets/ponctualite/djessy.jpeg" },
        { id: "pon4", nom: "Keren", description: "toujours pile à l'heure", photo: "assets/ponctualite/keren.jpeg" },
        { id: "pon5", nom: "Emilie", description: "5 à 15 minutes", photo: "assets/ponctualite/emilie.jpeg" }
    ],
    Meilleur_Soliste: [
        { id: "sol1", nom: "Amélia", description: "Voix envoûtante", photo: "assets/soliste/amelia.jpeg" },
        { id: "sol2", nom: "Pace", description: "Talent exceptionnel", photo: "assets/soliste/pace.jpeg" },
        { id: "sol3", nom: "Francillia", description: "Émotion pure", photo: "assets/soliste/francillia.jpeg" },
        { id: "sol4", nom: "Winner", description: "Puissance vocale", photo: "assets/soliste/winner.jpeg" },
        { id: "sol5", nom: "Djessy", description: "Charisme scénique", photo: "assets/soliste/djessy.jpeg" }
    ],
    Sociabilite: [
        { id: "soc1", nom: "Dada", description: "très ouverte", photo: "assets/social/dada.jpeg" },
        { id: "soc2", nom: "Manu", description: "parle à tout le monde", photo: "assets/social/manu.jpeg" },
        { id: "soc3", nom: "Grâce-Julie", description: "souriante", photo: "assets/social/julie.jpeg" },
        { id: "soc4", nom: "M.Noella", description: "La maman de tous", photo: "assets/social/luz.jpeg" },
        { id: "soc5", nom: "Emilie", description: "raconte des histoires", photo: "assets/social/emilie.jpeg" }
    ],
    Meilleure_Soprane: [
        { id: "sop1", nom: "Amélia", description: "Un frisson d'amour", photo: "assets/soprano/amelia.jpeg" },
        { id: "sop2", nom: "Pace", description: "Sa voix, un baiser", photo: "assets/soprano/pace.jpeg" },
        { id: "sop3", nom: "Dada", description: "Un soupir de lune", photo: "assets/soprano/dada.jpeg" },
        { id: "sop4", nom: "M.Pauline", description: "Un je t'aime", photo: "assets/soprano/pauline.jpeg" },
        { id: "sop5", nom: "Cynthia", description: "Une caresse de soie", photo: "assets/soprano/cycy.jpeg" }
    ],
    Meilleur_Alti: [
        { id: "alt1", nom: "Grâce-Julie", description: "Voix grave", photo:"assets/alto/grace.jpeg" },
        { id: "alt2", nom: "Ya Sandra", description: "Voix profonde", photo: "assets/alto/sandra.jpeg" },
        { id: "alt3", nom: "Bénie", description: "Voix sombre", photo: "assets/alto/beni.jpeg" },
        { id: "alt4", nom: "Mizou", description: "Voix profonde", photo: "assets/alto/mizou.jpeg" },
        { id: "alt5", nom: "Laurence", description: "Voix chaude", photo: "assets/alto/laura.jpeg" }
    ],
    Meilleur_Tenor: [
        { id: "ten1", nom: "Djessy", description: "Le grand chef", photo: "assets/tenor/djessy.jpeg" },
        { id: "ten2", nom: "Winner", description: "le charmeur", photo: "assets/tenor/winner.jpeg" },
        { id: "ten3", nom: "Manu", description: "Voix puissante", photo: "assets/tenor/manu.jpeg" },
        { id: "ten4", nom: "Georges", description: "Voix grave", photo: "assets/tenor/george.jpeg" },
        { id: "ten5", nom: "Glodi Nsimukala", description: "Voix ronde", photo: "assets/tenor/nsimukala.jpeg" }
    ],
    Meilleur_Basse: [
        { id: "bas1", nom: "Andy", description: "le génie", photo: "assets/basse/andy.jpeg" },
        { id: "bas2", nom: "Paul", description: "Le calme", photo: "assets/basse/bev.jpeg" },
        { id: "bas3", nom: "Levy", description: "Le rocher", photo: "assets/basse/levy.jpeg" },
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
let localVotants = [];
let comments = [];
let publishedCategories = JSON.parse(localStorage.getItem('publishedCategories') || '[]');
let allResultsPublished = localStorage.getItem('allResultsPublished') === 'true';
const MAX_VOTES = 160;
const CLOSURE_DATE = new Date(2026, 4, 16, 23, 59, 0);

// ========== FONCTIONS BASE DE DONNÉES ==========
async function loadData() {
    const votesSnapshot = await db.collection('votes').get();
    const votantsSnapshot = await db.collection('votants').get();
    const commentsSnapshot = await db.collection('comments').get();
    
    localVotes = votesSnapshot.docs.map(doc => doc.data());
    localVotants = {};
    votantsSnapshot.docs.forEach(doc => { localVotants[doc.id] = doc.data(); });
    comments = commentsSnapshot.docs.map(doc => doc.data());
}

async function saveData() {
    const votesRef = db.collection('votes');
    const existingVotes = await votesRef.get();
    const batch = db.batch();
    existingVotes.docs.forEach(doc => batch.delete(doc.ref));
    localVotes.forEach(vote => { const newRef = votesRef.doc(); batch.set(newRef, vote); });
    await batch.commit();
    
    const votantsRef = db.collection('votants');
    const existingVotants = await votantsRef.get();
    const batch2 = db.batch();
    existingVotants.docs.forEach(doc => batch2.delete(doc.ref));
    Object.keys(localVotants).forEach(ip => { const newRef = votantsRef.doc(ip); batch2.set(newRef, localVotants[ip]); });
    await batch2.commit();
}

async function loadPublishedCategories() {
    const publishedSnapshot = await db.collection('settings').doc('publication').get();
    if (publishedSnapshot.exists) {
        publishedCategories = publishedSnapshot.data().publishedCategories || [];
        allResultsPublished = publishedSnapshot.data().allResultsPublished || false;
    }
}

async function savePublishedCategories() {
    await db.collection('settings').doc('publication').set({
        publishedCategories: publishedCategories,
        allResultsPublished: allResultsPublished,
        lastUpdated: new Date().toISOString()
    });
}

loadData();

// ========== TOAST ==========
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    let icon = '';
    switch(type) {
        case 'success': icon = '<i class="fas fa-gem"></i>'; break;
        case 'error': icon = '<i class="fas fa-exclamation-triangle"></i>'; break;
        default: icon = '<i class="fas fa-info-circle"></i>';
    }
    toast.innerHTML = `${icon} ${message}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// ========== IP ==========
function getIP() {
    let ip = localStorage.getItem('visitor_ip');
    if (!ip) {
        ip = 'visitor_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('visitor_ip', ip);
    }
    return ip;
}

function chargerVotesExistants() {
    const ip = getIP();
    loadData();
    categories.forEach(cat => {
        if (localStorage.getItem(`device_voted_${ip}_${cat.id}`) === 'true') {
            currentUserVotes.add(cat.id);
        }
    });
}

// ========== COMMENTAIRES ==========
function escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

async function addComment(name, message) {
    if (!message.trim()) { showToast("Veuillez écrire un message.", "error"); return false; }
    const newComment = { id: Date.now(), name: name.trim() || "Anonyme", message: message.trim(), date: new Date().toISOString(), ip: getIP() };
    comments.unshift(newComment);
    await db.collection('comments').add(newComment);
    displayComments();
    showToast("✓ Merci pour votre message !", "success");
    return true;
}

async function deleteComment(commentId) {
    const isAdminLogged = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isAdminLogged) { showToast("Non autorisé.", "error"); return; }
    comments = comments.filter(c => c.id !== commentId);
    const snapshot = await db.collection('comments').get();
    const batch = db.batch();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    comments.forEach(c => { const newRef = db.collection('comments').doc(); batch.set(newRef, c); });
    await batch.commit();
    displayComments();
    if (document.getElementById('adminCommentsList')) chargerAdminComments();
    showToast("Message supprimé.", "info");
}

async function displayComments() {
    const container = document.getElementById('commentsList');
    if (!container) return;
    if (comments.length === 0) { container.innerHTML = '<div class="empty-comments"><i class="fas fa-comment-dots"></i><p>Soyez le premier à laisser un message !</p></div>'; return; }
    container.innerHTML = '';
    comments.forEach(comment => {
        const date = new Date(comment.date);
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `<div class="comment-header"><div class="comment-author"><i class="fas fa-user-circle"></i><strong>${escapeHtml(comment.name)}</strong></div><div class="comment-date">${date.toLocaleString('fr-FR')}</div></div><div class="comment-message">${escapeHtml(comment.message)}</div>`;
        container.appendChild(card);
    });
}

async function chargerAdminComments() {
    const container = document.getElementById('adminCommentsList');
    if (!container) return;
    if (comments.length === 0) { container.innerHTML = '<p style="text-align:center;">Aucun commentaire.</p>'; return; }
    container.innerHTML = '';
    comments.forEach(comment => {
        const date = new Date(comment.date);
        const card = document.createElement('div');
        card.className = 'admin-comment-card';
        card.innerHTML = `<div class="admin-comment-header"><strong>${escapeHtml(comment.name)}</strong><span>${date.toLocaleString('fr-FR')}</span></div><div class="admin-comment-message">${escapeHtml(comment.message)}</div><button class="admin-comment-delete-btn" data-id="${comment.id}"><i class="fas fa-trash-alt"></i> Supprimer</button>`;
        container.appendChild(card);
        card.querySelector('.admin-comment-delete-btn').onclick = () => deleteComment(comment.id);
    });
}

function initComments() {
    const submitBtn = document.getElementById('submitCommentBtn');
    const commentName = document.getElementById('commentName');
    const commentMessage = document.getElementById('commentMessage');
    const charCount = document.getElementById('charCount');
    if (!submitBtn) return;
    if (commentMessage && charCount) { commentMessage.addEventListener('input', () => { charCount.textContent = commentMessage.value.length; }); }
    submitBtn.onclick = () => {
        const name = commentName?.value || '';
        const message = commentMessage?.value || '';
        addComment(name, message);
        if (commentMessage) commentMessage.value = '';
        if (charCount) charCount.textContent = '0';
    };
    displayComments();
}

// ========== AFFICHAGE ==========
function afficherCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `<div class="category-icon">${cat.icon}</div><h3>${cat.name}</h3><p>${cat.description}</p>`;
        card.onclick = () => selectionnerCategorie(cat.id);
        grid.appendChild(card);
    });
}

async function selectionnerCategorie(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return;
    document.querySelector('.categories-wrapper').style.display = 'none';
    document.getElementById('candidatesPanel').style.display = 'block';
    document.getElementById('currentCategoryTitle').innerHTML = `${cat.icon} ${cat.name}`;
    const grid = document.getElementById('candidatesGrid');
    const liste = candidats[categoryId] || [];
    if (liste.length === 0) { grid.innerHTML = '<p>Aucun candidat</p>'; return; }
    grid.innerHTML = '';
    const ip = getIP();
    const votantDoc = await db.collection('votants').doc(ip).get();
    const alreadyVoted = votantDoc.exists && votantDoc.data()[categoryId];
    liste.forEach(candidat => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        const photoHtml = candidat.photo ? `<div class="candidate-photo" data-nom="${candidat.nom}" data-photo="${candidat.photo}"><img src="${candidat.photo}" alt="${candidat.nom}" onerror="this.parentElement.innerHTML='<div class=\'no-photo\'><i class=\'fas fa-user-circle\'></i></div>'"></div>` : `<div class="no-photo"><i class="fas fa-user-circle"></i></div>`;
        card.innerHTML = `${photoHtml}<h3>${candidat.nom}</h3><p>${candidat.description}</p><button class="vote-btn" data-categorie="${categoryId}" data-candidat-nom="${candidat.nom}" ${alreadyVoted ? 'disabled' : ''}>${alreadyVoted ? '<i class="fas fa-check"></i> Déjà voté' : '<i class="fas fa-vote-yea"></i> Voter'}</button>`;
        grid.appendChild(card);
    });
    document.querySelectorAll('.candidate-photo, .no-photo').forEach(photoDiv => { photoDiv.onclick = (e) => { e.stopPropagation(); const nom = photoDiv.dataset.nom; const photoUrl = photoDiv.dataset.photo; openPhotoModal(photoUrl, nom); }; });
    document.querySelectorAll('.vote-btn:not([disabled])').forEach(btn => { btn.onclick = () => voter(btn.dataset.categorie, btn.dataset.candidatNom); });
}

async function voter(categorie, candidatNom) {
    const currentStatus = localStorage.getItem('voteStatus') || 'open';
    if (currentStatus !== 'open') { showToast("Les votes sont terminés.", "error"); return; }
    const ip = getIP();
    const votantRef = db.collection('votants').doc(ip);
    const votantDoc = await votantRef.get();
    if (votantDoc.exists && votantDoc.data()[categorie]) { showToast("Vous avez déjà voté pour cette catégorie.", "error"); return; }
    if (currentUserVotes.has(categorie)) { showToast("Vous avez déjà voté.", "error"); return; }
    const catName = categories.find(c => c.id === categorie)?.name || categorie;
    await db.collection('votes').add({ categorie, categorieNom: catName, candidatNom, timestamp: firebase.firestore.FieldValue.serverTimestamp(), ip });
    await votantRef.set({ [categorie]: true }, { merge: true });
    currentUserVotes.add(categorie);
    localStorage.setItem(`device_voted_${ip}_${categorie}`, 'true');
    showToast(`✓ Vote pour ${candidatNom} enregistré !`, "success");
    selectionnerCategorie(categorie);
    afficherDashboard();
}

async function afficherDashboard() {
    const dashboardDiv = document.getElementById('dashboardContent');
    if (!dashboardDiv) return;
    const ip = getIP();
    const votesSnapshot = await db.collection('votes').get();
    const userVotes = votesSnapshot.docs.filter(doc => doc.data().ip === ip).map(doc => doc.data());
    if (userVotes.length === 0) { dashboardDiv.innerHTML = '<div class="loading-results">Vous n\'avez pas encore voté.</div>'; return; }
    const resultats = {};
    categories.forEach(cat => { resultats[cat.id] = { nom: cat.name, monVote: null, aVote: false }; });
    userVotes.forEach(vote => { if (resultats[vote.categorie]) { resultats[vote.categorie].monVote = vote.candidatNom; resultats[vote.categorie].aVote = true; } });
    dashboardDiv.innerHTML = '';
    for (const [catId, data] of Object.entries(resultats)) {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = data.aVote ? `<h3><i class="fas fa-check-circle"></i> ${data.nom}</h3><div class="my-vote">Votre vote : ${data.monVote}</div>` : `<h3><i class="far fa-circle"></i> ${data.nom}</h3><div class="my-vote">En attente de votre vote</div>`;
        dashboardDiv.appendChild(card);
    }
}

// ========== PAGE RÉSULTATS ==========
async function initResultsPage() {
    const resultsMessage = document.getElementById('resultsMessage');
    const finalContainer = document.getElementById('finalResultsContainer');
    if (!resultsMessage || !finalContainer) return;
    await loadPublishedCategories();
    const votesSnapshot = await db.collection('votes').get();
    const votesData = votesSnapshot.docs.map(doc => doc.data());
    const allPublished = localStorage.getItem('allResultsPublished') === 'true';
    const pendingCategory = localStorage.getItem('pendingResultCategory');
    if (pendingCategory) {
        const timerEnd = localStorage.getItem('pendingCategoryTimerEnd');
        if (timerEnd && parseInt(timerEnd) > Date.now()) { showCategoryCountdown(pendingCategory, Math.ceil((parseInt(timerEnd) - Date.now()) / 1000)); }
        else { localStorage.removeItem('pendingResultCategory'); localStorage.removeItem('pendingCategoryTimerEnd'); markCategoryResultsAsDisplayed(pendingCategory); resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherResultatsParCategorie(pendingCategory, votesData); lancerFeuArtificeResultats(); }
        return;
    }
    const lastPublishedCategory = localStorage.getItem('lastPublishedCategory');
    if (lastPublishedCategory && !allPublished && publishedCategories.length > 0) { localStorage.setItem('pendingResultCategory', lastPublishedCategory); localStorage.setItem('pendingCategoryTimerEnd', Date.now() + 10000); localStorage.removeItem('lastPublishedCategory'); showCategoryCountdown(lastPublishedCategory, 10); return; }
    if (allPublished) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherTousResultatsFinaux(votesData); return; }
    if (publishedCategories.length > 0) { resultsMessage.style.display = 'none'; finalContainer.style.display = 'block'; afficherResultatsParCategorie(publishedCategories[publishedCategories.length - 1], votesData); return; }
    resultsMessage.style.display = 'block'; finalContainer.style.display = 'none';
}

function showCategoryCountdown(categoryId, remaining) {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return;
    const resultsMessage = document.getElementById('resultsMessage');
    const finalContainer = document.getElementById('finalResultsContainer');
    resultsMessage.style.display = 'block'; finalContainer.style.display = 'none';
    const waitingIcon = resultsMessage.querySelector('.waiting-icon');
    if (waitingIcon) waitingIcon.style.display = 'none';
    let timerElement = document.getElementById('resultsCountdownTimer');
    if (!timerElement) { timerElement = document.createElement('div'); timerElement.id = 'resultsCountdownTimer'; timerElement.className = 'results-countdown-timer'; resultsMessage.appendChild(timerElement); }
    timerElement.innerHTML = `<div class="countdown-container"><div class="countdown-header"><div class="countdown-icon"><i class="fas fa-champagne-glasses"></i></div><div class="countdown-title">ANNONCE DES RÉSULTATS</div><div class="countdown-category">${cat.name}</div></div><div class="countdown-timer-wrapper"><div class="countdown-circle"><div class="countdown-number"><span class="countdown-value" id="countdownValue">${remaining}</span><span class="countdown-unit">SEC</span></div></div></div><div class="countdown-footer"><div class="countdown-message">Préparation...</div></div></div>`;
    let currentRemaining = remaining;
    const interval = setInterval(() => { currentRemaining--; const valSpan = document.getElementById('countdownValue'); if (valSpan) valSpan.textContent = currentRemaining; if (currentRemaining <= 0) { clearInterval(interval); timerElement.style.display = 'none'; localStorage.removeItem('pendingResultCategory'); localStorage.removeItem('pendingCategoryTimerEnd'); markCategoryResultsAsDisplayed(categoryId); const vm = document.getElementById('resultsMessage'); const fc = document.getElementById('finalResultsContainer'); if (vm && fc) { vm.style.display = 'none'; fc.style.display = 'block'; db.collection('votes').get().then(snap => { afficherResultatsParCategorie(categoryId, snap.docs.map(d => d.data())); lancerFeuArtificeResultats(); }); } } }, 1000);
}

function markCategoryResultsAsDisplayed(categoryId) {
    let displayed = JSON.parse(localStorage.getItem('displayedResultCategories') || '[]');
    if (!displayed.includes(categoryId)) { displayed.push(categoryId); localStorage.setItem('displayedResultCategories', JSON.stringify(displayed)); }
}

async function afficherResultatsParCategorie(categoryId, votesData) {
    const grid = document.getElementById('finalResultsGrid');
    const winnerPhotoContainer = document.getElementById('winnerPhotoContainer');
    if (!grid) return;
    const cat = categories.find(c => c.id === categoryId);
    const votesByCandidate = {};
    votesData.filter(v => v.categorie === categoryId).forEach(vote => { votesByCandidate[vote.candidatNom] = (votesByCandidate[vote.candidatNom] || 0) + 1; });
    const sorted = Object.entries(votesByCandidate).sort((a, b) => b[1] - a[1]);
    const winner = sorted[0]; const total = sorted.reduce((s, [, n]) => s + n, 0);
    const winnerPercent = winner ? ((winner[1] / MAX_VOTES) * 100).toFixed(1) : 0;
    let winnerPhotoUrl = null;
    if (winner) { const catCandidates = candidats[categoryId] || []; const wc = catCandidates.find(c => c.nom === winner[0]); if (wc) winnerPhotoUrl = wc.photo; }
    if (winnerPhotoContainer && winnerPhotoUrl) { winnerPhotoContainer.style.display = 'flex'; document.getElementById('winnerPhoto').innerHTML = `<img src="${winnerPhotoUrl}" onclick="openPhotoModal('${winnerPhotoUrl}', '${winner[0]}')">`; document.getElementById('winnerPhotoName').innerHTML = winner[0]; }
    grid.innerHTML = `<div class="final-result-card winner-card"><div class="final-category-icon">${cat.icon}</div><h2>${cat.name}</h2><div class="winner-medal">🏆</div><div class="winner-name">${winner ? winner[0] : 'Aucun vote'}</div><div class="winner-stats">${winner ? winner[1] + ' voix (' + winnerPercent + '%)' : ''}</div><div class="total-votes">Total: ${total} votants</div></div>`;
}

async function afficherTousResultatsFinaux(votesData) {
    const grid = document.getElementById('finalResultsGrid');
    const winnerPhotoContainer = document.getElementById('winnerPhotoContainer');
    if (winnerPhotoContainer) winnerPhotoContainer.style.display = 'none';
    const resultats = {};
    categories.forEach(cat => { resultats[cat.id] = { nom: cat.name, icon: cat.icon, votes: {}, total: 0 }; });
    votesData.forEach(vote => { if (resultats[vote.categorie]) { resultats[vote.categorie].votes[vote.candidatNom] = (resultats[vote.categorie].votes[vote.candidatNom] || 0) + 1; resultats[vote.categorie].total++; } });
    const catsWithVotes = Object.entries(resultats).filter(([_, d]) => d.total > 0);
    if (catsWithVotes.length === 0) { grid.innerHTML = '<div class="empty-comments"><i class="fas fa-chart-simple"></i><p>Aucun vote.</p></div>'; return; }
    grid.innerHTML = '';
    for (const [catId, data] of catsWithVotes) {
        const sorted = Object.entries(data.votes).sort((a, b) => b[1] - a[1]);
        const winner = sorted[0]; const winnerPercent = winner ? ((winner[1] / MAX_VOTES) * 100).toFixed(1) : 0;
        let winnerPhotoUrl = null;
        if (winner) { const catCandidates = candidats[catId] || []; const wc = catCandidates.find(c => c.nom === winner[0]); if (wc) winnerPhotoUrl = wc.photo; }
        const card = document.createElement('div'); card.className = 'final-result-card';
        const photoHtml = winnerPhotoUrl ? `<div class="winner-card-photo" onclick="openPhotoModal('${winnerPhotoUrl}', '${winner[0]}')"><img src="${winnerPhotoUrl}"></div>` : '<div class="winner-card-photo no-photo"><i class="fas fa-user-circle"></i></div>';
        card.innerHTML = `<div class="final-category-icon">${data.icon}</div><h3>${data.nom}</h3>${photoHtml}<div class="winner-medal">🏆</div><div class="winner-name">${winner ? winner[0] : 'Aucun vote'}</div><div class="winner-stats">${winner ? winner[1] + ' voix (' + winnerPercent + '%)' : ''}</div><div class="total-votes">Total: ${data.total} votants</div>`;
        grid.appendChild(card);
    }
}

// ========== ADMIN ==========
function updateVoteStatusUI() { const badge = document.getElementById('statusBadge'); const text = document.getElementById('statusText'); const status = localStorage.getItem('voteStatus') || 'open'; if (!badge) return; switch(status) { case 'open': badge.className = 'status-badge open'; badge.innerHTML = '🟢 Votes ouverts'; if(text) text.innerHTML = 'Les utilisateurs peuvent voter'; break; case 'paused': badge.className = 'status-badge paused'; badge.innerHTML = '🟡 Votes en pause'; break; case 'closed': badge.className = 'status-badge closed'; badge.innerHTML = '🔴 Votes clôturés'; break; } }
function setVoteStatus(newStatus) { localStorage.setItem('voteStatus', newStatus); updateVoteStatusUI(); showToast(`État : ${newStatus}`, "info"); }

function showPublicationTimer(categoryId) {
    const cat = categories.find(c => c.id === categoryId);
    let modal = document.getElementById('publicationTimerModal');
    if (modal) modal.remove();
    modal = document.createElement('div'); modal.id = 'publicationTimerModal'; modal.className = 'publication-timer-modal';
    modal.innerHTML = `<div class="publication-timer-content"><div class="publication-timer-header"><i class="fas fa-champagne-glasses"></i><h3>Publication</h3></div><div class="publication-timer-body"><h2>${cat.icon} ${cat.name}</h2><div class="publication-timer-circle"><span class="publication-timer-number" id="pubTimerNum">10</span><span class="publication-timer-label">secondes</span></div><div class="publication-timer-progress"><div class="publication-timer-progress-bar" id="pubTimerBar"></div></div></div><div class="publication-timer-footer"><button id="cancelPubBtn">❌ Annuler</button><button id="confirmPubBtn">✅ Publier maintenant</button></div></div>`;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    let countdown = 10;
    if (publicationTimerInterval) clearInterval(publicationTimerInterval);
    publicationTimerInterval = setInterval(() => { countdown--; const numSpan = document.getElementById('pubTimerNum'); const bar = document.getElementById('pubTimerBar'); if (numSpan) numSpan.textContent = countdown; if (bar) bar.style.width = `${(10 - countdown) * 10}%`; if (countdown <= 0) { clearInterval(publicationTimerInterval); closePublicationTimerModal(); executePublishCategory(categoryId); } }, 1000);
    document.getElementById('cancelPubBtn').onclick = () => { clearInterval(publicationTimerInterval); closePublicationTimerModal(); showToast("Publication annulée.", "info"); };
    document.getElementById('confirmPubBtn').onclick = () => { clearInterval(publicationTimerInterval); closePublicationTimerModal(); executePublishCategory(categoryId); };
}

function closePublicationTimerModal() { const modal = document.getElementById('publicationTimerModal'); if (modal) { modal.classList.remove('show'); setTimeout(() => modal.remove(), 300); } }
async function executePublishCategory(categoryId) { if (!publishedCategories.includes(categoryId)) publishedCategories.push(categoryId); await savePublishedCategories(); localStorage.setItem('lastPublishedCategory', categoryId); renderPublishCategoriesGrid(); showToast(`✅ Résultats de la catégorie publiés !`, "success"); }
async function publishCategory(categoryId) { if (publishedCategories.includes(categoryId)) { showToast("Déjà publiée.", "error"); return; } if ((localStorage.getItem('voteStatus') || 'open') !== 'closed') { showToast("Clôturez d'abord les votes.", "error"); return; } const votes = await db.collection('votes').get(); const votesForCat = votes.docs.filter(d => d.data().categorie === categoryId); if (votesForCat.length === 0) { showToast("Aucun vote.", "error"); return; } showPublicationTimer(categoryId); }
async function publishAllCategories() { if (allResultsPublished) { showToast("Déjà tous publiés.", "error"); return; } const allVotes = await db.collection('votes').get(); for (const cat of categories) { if (!publishedCategories.includes(cat.id)) { const votesForCat = allVotes.docs.filter(d => d.data().categorie === cat.id); if (votesForCat.length > 0) publishedCategories.push(cat.id); } } allResultsPublished = true; await savePublishedCategories(); localStorage.setItem('voteStatus', 'published'); renderPublishCategoriesGrid(); showToast("🎉 Tous les résultats publiés !", "success"); }
async function renderPublishCategoriesGrid() { const container = document.getElementById('publishCategoriesGrid'); if (!container) return; await loadPublishedCategories(); const allVotes = await db.collection('votes').get(); const currentStatus = localStorage.getItem('voteStatus') || 'open'; container.innerHTML = ''; for (const cat of categories) { const isPub = publishedCategories.includes(cat.id); const votesForCat = allVotes.docs.filter(d => d.data().categorie === cat.id); const votesMap = {}; votesForCat.forEach(v => { votesMap[v.data().candidatNom] = (votesMap[v.data().candidatNom] || 0) + 1; }); const sorted = Object.entries(votesMap).sort((a,b) => b[1] - a[1]); const winner = sorted[0]; const total = votesForCat.length; const card = document.createElement('div'); card.className = `publish-category-card ${isPub ? 'published' : ''}`; card.innerHTML = `<div class="publish-category-icon">${cat.icon}</div><h4>${cat.name}</h4><div class="publish-category-stats">${total} vote(s)</div><div class="publish-category-winner">${winner ? `🏆 ${winner[0]}<br><small>${winner[1]} voix</small>` : '⏳ Aucun vote'}</div>`; if (!isPub && currentStatus === 'closed' && total > 0) card.onclick = () => publishCategory(cat.id); container.appendChild(card); } const allPublishedNow = categories.every(c => publishedCategories.includes(c.id)); const allHaveVotes = categories.every(c => { const votes = allVotes.docs.filter(d => d.data().categorie === c.id); return votes.length > 0; }); const pubAllBtn = document.getElementById('publishAllResultsBtn'); if (pubAllBtn) { if (currentStatus === 'closed' && allHaveVotes && !allPublishedNow) { pubAllBtn.disabled = false; pubAllBtn.style.opacity = '1'; pubAllBtn.innerHTML = '🎉 PUBLIER TOUS LES RÉSULTATS 🎉'; } else if (allPublishedNow) { pubAllBtn.disabled = true; pubAllBtn.innerHTML = '✅ TOUS PUBLIÉS'; } else { pubAllBtn.disabled = true; pubAllBtn.innerHTML = allHaveVotes ? '🔒 Clôturez d\'abord' : '⚠️ Certaines catégories n\'ont pas de votes'; } } }

async function chargerAdminData() {
    const allVotes = await db.collection('votes').get();
    const votesData = allVotes.docs.map(d => d.data());
    const totalVotes = votesData.length;
    const uniqueIps = new Set(votesData.map(v => v.ip));
    const totalVotants = uniqueIps.size;
    const taux = totalVotes > 0 ? ((totalVotes / MAX_VOTES) * 100).toFixed(1) : 0;
    const statsGrid = document.getElementById('statsGrid');
    if (statsGrid) statsGrid.innerHTML = `<div class="stat-card"><div class="stat-number">${totalVotes}</div><div class="stat-label">Votes totaux</div></div><div class="stat-card"><div class="stat-number">${totalVotants}</div><div class="stat-label">Votants uniques</div></div><div class="stat-card"><div class="stat-number">${categories.length}</div><div class="stat-label">Catégories</div></div><div class="stat-card"><div class="stat-number">${taux}%</div><div class="stat-label">Objectif atteint</div></div><div class="stat-card"><div class="stat-number">${Math.max(0, MAX_VOTES - totalVotes)}</div><div class="stat-label">Votes restants</div></div><div class="stat-card"><div class="stat-number">${MAX_VOTES}</div><div class="stat-label">Objectif max</div></div>`;
    const cats = document.getElementById('categorySummary');
    if (cats) {
        const resultats = {}; categories.forEach(c => { resultats[c.id] = { nom: c.name, votes: {}, total: 0 }; });
        votesData.forEach(v => { if (resultats[v.categorie]) { resultats[v.categorie].votes[v.candidatNom] = (resultats[v.categorie].votes[v.candidatNom] || 0) + 1; resultats[v.categorie].total++; } });
        cats.innerHTML = '';
        for (const [id, data] of Object.entries(resultats)) {
            const sorted = Object.entries(data.votes).sort((a, b) => b[1] - a[1]);
            const winner = sorted[0];
            const card = document.createElement('div'); card.className = 'category-summary-card';
            card.innerHTML = `<h4>${categories.find(c => c.id === id)?.icon} ${data.nom}</h4><div class="total">Total: ${data.total} votes</div><div class="winner">🏆 ${winner ? winner[0] : 'Aucun'} (${winner ? winner[1] : 0})</div>`;
            cats.appendChild(card);
        }
    }
    const tbody = document.getElementById('votesTableBody');
    if (tbody) {
        if (votesData.length === 0) tbody.innerHTML = '<tr><td colspan="4">Aucun vote</td></tr>';
        else {
            tbody.innerHTML = '';
            [...votesData].reverse().forEach(vote => {
                const date = vote.timestamp ? new Date(vote.timestamp.toDate()) : new Date();
                tbody.innerHTML += `<tr><td>${date.toLocaleString('fr-FR')}</td><td>${vote.categorieNom}</td><td>${vote.candidatNom}</td><td><code>${vote.ip}</code></td></tr>`;
            });
        }
    }
}

function checkAdminSession() { if (localStorage.getItem('adminLoggedIn') === 'true' && document.getElementById('adminZone')) { document.getElementById('loginZone').style.display = 'none'; document.getElementById('adminZone').style.display = 'block'; updateVoteStatusUI(); chargerAdminData(); chargerAdminComments(); renderPublishCategoriesGrid(); } }

function initAdmin() { checkAdminSession(); const loginBtn = document.getElementById('loginBtn'); if (loginBtn) { loginBtn.onclick = () => { const code = document.getElementById('adminCode').value; if (code === "GALA2026" || code === "admin123") { localStorage.setItem('adminLoggedIn', 'true'); document.getElementById('loginZone').style.display = 'none'; document.getElementById('adminZone').style.display = 'block'; updateVoteStatusUI(); chargerAdminData(); chargerAdminComments(); renderPublishCategoriesGrid(); showToast("Bienvenue !", "success"); } else { document.getElementById('loginError').textContent = "Code incorrect"; } }; } document.getElementById('refreshBtn')?.addEventListener('click', () => { chargerAdminData(); renderPublishCategoriesGrid(); chargerAdminComments(); }); document.getElementById('exportBtn')?.addEventListener('click', () => { const data = { exportDate: new Date().toISOString(), votes: localVotes, commentaires: comments }; const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `votes_${new Date().toISOString().slice(0,19)}.json`; a.click(); URL.revokeObjectURL(a.href); showToast("Export JSON généré !", "success"); }); document.getElementById('openVotesBtn')?.addEventListener('click', () => setVoteStatus('open')); document.getElementById('pauseVotesBtn')?.addEventListener('click', () => setVoteStatus('paused')); document.getElementById('closeVotesBtn')?.addEventListener('click', () => { if (confirm("Clôturer les votes ?")) setVoteStatus('closed'); }); document.getElementById('publishAllResultsBtn')?.addEventListener('click', publishAllCategories); }

function lancerFeuArtifice() { showToast("Joyeux 25e anniversaire !", "success"); }
function lancerFeuArtificeResultats() { showToast("🏆 Félicitations ! 🏆", "success"); }
function lancerGouttesChampagne() {}
function initChampagneAnimation() {}
function openPhotoModal(photoUrl, nom) { const modal = document.getElementById('photoModal'); const modalImg = document.getElementById('modalImage'); const caption = document.getElementById('modalCaption'); if (!modal) return; modalImg.src = photoUrl || ''; caption.innerHTML = nom; modal.style.display = 'flex'; }
function closePhotoModal() { const modal = document.getElementById('photoModal'); if (modal) modal.style.display = 'none'; }
function initPhotoModal() { document.getElementById('photoModal')?.addEventListener('click', closePhotoModal); document.querySelector('.photo-modal-close')?.addEventListener('click', closePhotoModal); }

function isSiteClosed() { return false; }

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    if (isSiteClosed()) { document.body.innerHTML = '<div class="site-closed"><h1>Votes terminés</h1></div>'; return; }
    initPhotoModal();
    document.getElementById('fireworksBtn')?.addEventListener('click', lancerFeuArtifice);
    document.getElementById('backBtn')?.addEventListener('click', () => { document.getElementById('candidatesPanel').style.display = 'none'; document.querySelector('.categories-wrapper').style.display = 'block'; });
    if (document.getElementById('champagneGlasses')) initChampagneAnimation();
    initComments();
    const path = window.location.pathname;
    if (path.includes('resultat.html')) initResultsPage();
    else if (path.includes('admin.html')) initAdmin();
    else { chargerVotesExistants(); afficherCategories(); afficherDashboard(); }
});
