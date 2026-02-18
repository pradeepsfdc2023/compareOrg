// --- API Key Button Highlight Logic ---
function setApiKeyButtonStatus(isSet) {
  const btn = document.getElementById("apiKeyBtn");
  const btnText = document.getElementById("apiKeyBtnText");
  if (!btn || !btnText) return;
  if (isSet) {
    btn.classList.add("api-key-set");
    btnText.innerHTML =
      '⚙️ Configure ChatGPT API Key <span style="font-size:20px;margin-left:8px">✅</span>';
  } else {
    btn.classList.remove("api-key-set");
    btnText.textContent = "⚙️ Configure ChatGPT API Key";
  }
}

// Call this on page load and after saving/removing API key
function checkApiKeyStatus() {
  const apiKey = localStorage.getItem("openai_api_key");
  setApiKeyButtonStatus(!!apiKey);
}

// Patch saveApiKey to update button status
const _origSaveApiKey = window.saveApiKey;
window.saveApiKey = function () {
  if (_origSaveApiKey) _origSaveApiKey();
  checkApiKeyStatus();
};

// On page load
window.addEventListener("DOMContentLoaded", checkApiKeyStatus);
function openApiModal() {
  document.getElementById("apiModal").style.display = "block";
}

function closeApiModal() {
  document.getElementById("apiModal").style.display = "none";
}

async function saveApiKey() {
  const apiKey = document.getElementById("apiKey").value;
  const apiModel = document.getElementById("apiModel").value;

  if (!apiKey.trim()) {
    alert("Please enter an API key");
    return;
  }

  // Validate API key by making a test request to OpenAI
  showStatus("Checking API key...", "");
  const valid = await validateApiKey(apiKey, apiModel);
  if (valid) {
    localStorage.setItem("chatgptApiKey", apiKey);
    localStorage.setItem("chatgptModel", apiModel);
    showStatus("✓ API key is valid and saved", "success");
    setApiKeyButtonStatus(true);
    closeApiModal();
  } else {
    showStatus("❌ Invalid API key", "error");
  }
}

async function validateApiKey(apiKey, apiModel) {
  try {
    const response = await fetch("https://api.openai.com/v1/models", {
      headers: {
        Authorization: "Bearer " + apiKey,
      },
    });
    return response.ok;
  } catch (e) {
    return false;
  }
}

document.getElementById("compareForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const apiKey = localStorage.getItem("chatgptApiKey");
  if (!apiKey) {
    showStatus("⚠️ Please configure ChatGPT API key first", "error");
    return;
  }

  const org1 = {
    name: document.getElementById("org1Name").value,
    url: document.getElementById("org1Url").value,
    token: document.getElementById("org1Token").value,
  };

  const org2 = {
    name: document.getElementById("org2Name").value,
    url: document.getElementById("org2Url").value,
    token: document.getElementById("org2Token").value,
  };

  // Save org info locally
  localStorage.setItem("org1", JSON.stringify(org1));
  localStorage.setItem("org2", JSON.stringify(org2));

  console.log("Comparing organizations:", org1, org2);
  showStatus("✓ Comparison started. This may take a few moments...", "success");
});

// Connect Org 1
document
  .getElementById("connectOrg1Btn")
  .addEventListener("click", function () {
    const org1 = {
      name: document.getElementById("org1Name").value,
      url: document.getElementById("org1Url").value,
      token: document.getElementById("org1Token").value,
    };
    if (org1.name && org1.url && org1.token) {
      localStorage.setItem("org1", JSON.stringify(org1));
      setOrgConnected(1); // Update button state
      showStatus("Org 1 connected!", "success");
    } else {
      showStatus("Please fill all Org 1 fields", "error");
    }
  });

// Connect Org 2
document
  .getElementById("connectOrg2Btn")
  .addEventListener("click", function () {
    const org2 = {
      name: document.getElementById("org2Name").value,
      url: document.getElementById("org2Url").value,
      token: document.getElementById("org2Token").value,
    };
    if (org2.name && org2.url && org2.token) {
      localStorage.setItem("org2", JSON.stringify(org2));
      setOrgConnected(2); // Update button state
      showStatus("Org 2 connected!", "success");
    } else {
      showStatus("Please fill all Org 2 fields", "error");
    }
  });

function setOrgConnected(orgNumber) {
  if (orgNumber === 1) {
    const btn = document.getElementById("connectOrg1Btn");
    const btnText = document.getElementById("connectOrg1BtnText");
    btn.classList.add("api-key-set");
    btnText.innerHTML =
      '🔗 Connect Org 1 <span style="font-size:20px;margin-left:8px">✅</span>';
  } else if (orgNumber === 2) {
    const btn = document.getElementById("connectOrg2Btn");
    const btnText = document.getElementById("connectOrg2BtnText");
    btn.classList.add("api-key-set");
    btnText.innerHTML =
      '🔗 Connect Org 2 <span style="font-size:20px;margin-left:8px">✅</span>';
  }
}

function showStatus(message, type) {
  const statusEl = document.getElementById("status");
  statusEl.textContent = message;
  statusEl.className = "status " + type;
  statusEl.style.display = "block";
}

window.onclick = function (event) {
  const modal = document.getElementById("apiModal");
  if (event.target === modal) {
    closeApiModal();
  }
};

function reset() {
  localStorage.removeItem("chatgptApiKey");
  localStorage.removeItem("chatgptModel");
  localStorage.removeItem("org1");
  localStorage.removeItem("org2");

  // Reset UI indicators
  document.getElementById("apiKeyBtn").classList.remove("api-key-set");
  document.getElementById("apiKeyBtnText").textContent =
    "⚙️ Configure ChatGPT API Key";
  document.getElementById("org2Status").style.display = "none";

  // Reset form fields
  document.getElementById("compareForm").reset();
}

// On load, show green indicators if already connected/valid
window.onload = function () {
  // API key
  const apiKey = localStorage.getItem("chatgptApiKey");
  if (apiKey) {
    document.getElementById("apiKeyStatus").style.display = "inline";
  }
  // Org 1
  const org1 = localStorage.getItem("org1");
  if (org1) {
    document.getElementById("org1Status").style.display = "inline";
  }
  // Org 2
  const org2 = localStorage.getItem("org2");
  if (org2) {
    document.getElementById("org2Status").style.display = "inline";
  }
};
console.log("compareOrg.js loaded");
