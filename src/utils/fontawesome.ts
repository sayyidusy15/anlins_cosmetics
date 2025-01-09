// src/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disable auto CSS injection (karena Next.js menangani CSS secara berbeda)

// Tambahkan ikon yang kamu butuhkan ke library
library.add(faAngleDown);
