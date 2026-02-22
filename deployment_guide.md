# Deployment Guide: staffpayai.com

To launch your "Luxe - Pure Efficiency" site on **staffpayai.com**, follow these steps.

## Option A: Vercel (Recommended)
Vercel is the easiest platform for React/Vite apps.

1.  **Sign Up**: Go to [vercel.com](https://vercel.com/).
2.  **Import**: Connect your GitHub and import the `staffai` repo.
3.  **Deploy**: It will auto-detect Vite. Click **Deploy**.

## Option B: Firebase Hosting
Firebase is a great choice if you plan to use other Firebase services (Auth, Firestore) later.

1.  **Create Project**: Go to [Firebase Console](https://console.firebase.google.com/) and create a project called `Staff AI`.
2.  **Install CLI**: In your terminal, run `npm install -g firebase-tools`.
3.  **Login & Init**: 
    ```bash
    firebase login
    firebase init hosting
    ```
    *   **Public directory**: `dist`
    *   **Configure as SPA**: Yes
    *   **GitHub Action**: Optional (No)
4.  **Deploy**:
    ```bash
    npm run build
    firebase deploy
    ```

## 2. Connect staffpayai.com
Once hosted (on either Vercel or Firebase), you'll need to add your domain in their respective **Settings > Domains** section. You will then get the DNS records (A and CNAME) to add to your registrar.

## 3. Registrar Setup (Cloudflare)
Since you are using Cloudflare, follow these exact steps:

1.  **Select Domain**: Log in to [Cloudflare](https://dash.cloudflare.com/) and click on `staffpayai.com`.
2.  **DNS Records**: Click **DNS** > **Records** in the left sidebar.
3.  **Add Records**:
    *   **A Record**: 
        *   Type: `A`
        *   Name: `@`
        *   IPv4 address: `76.76.21.21`
        *   **CRITICAL**: Toggle Proxy status to **DNS only** (Grey cloud).
    *   **CNAME Record**:
        *   Type: `CNAME`
        *   Name: `www`
        *   Target: `cname.vercel-dns.com`
        *   **CRITICAL**: Toggle Proxy status to **DNS only** (Grey cloud).
4.  **Wait**: Cloudflare updates almost instantly, but give it 2 minutes for Vercel to see the change.

> [!IMPORTANT]
> Vercel manages its own SSL certificates. Keeping the Cloudflare proxy **OFF** (Grey cloud) prevents "Too many redirects" errors.

## Summary of Active Local Ports
If you want to keep reviewing locally, here is your current environment:

| Port | Version | Identity |
| :--- | :--- | :--- |
| **5173** | **MAIN** | **Luxe - Pure Efficiency (staffpayai.com choice)** |
| 5182 | Preset B | Original Midnight Luxe |
| 5183 | Preset C | Original Brutalist Signal |
| 5185 | Hybrid | Industrial Luxe (B + C) |
| 5186 | Clinical | Clinical Minimalist |

> [!TIP]
> Once you are happy with the Vercel deployment, you can safely delete the other `time-and-pay-X` folders to save space.
