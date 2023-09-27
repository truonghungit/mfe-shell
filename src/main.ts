import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mfe.manifest.json')
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

