### ✅ 1. **Check branch aur uske changes**

**Terminal me run kar:**

```bash
git fetch origin
git checkout <branch-name>
```

> `branch-name` woh naam hai jo usne push kiya hai (jaise `feature-login`).

---

### ✅ 2. **Code Review kar**

* Code ko **locally chalaa ke test kar**.
* Changes ka purpose samajh (e.g., naye feature, bug fix, refactor).
* Agar koi issue ya suggestion hai, to usko discuss kar (GitHub comments ya direct).

---

### ✅ 3. **Merge karne ka decision**

Agar sab sahi hai, to:

* **Main branch pe jaa**:

```bash
git checkout main
git pull origin main
```

* Phir **merge kar**:

```bash
git merge <branch-name>
```

* Phir **push** kar:

```bash
git push origin main
```

---

## 🔁 Common Next Steps for Both of You:

* Dono apni local repo ko update rakho:

```bash
git pull origin main
```

