// CSS FAMILY
import "@/styles/style.css"
import "@/styles/bootstrap-drawer.min.css"
import "@/styles/bootstrap.css"
import "@/styles/drawer.min.css"
// import "@/styles/fontawesome.css"
import "@/styles/jquery.modal.min.css"
import "@/styles/slick.min.css"
// import "@/styles/star-rating.min.css"


// Icon
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import AppShell from "@/components/layouts/AppShell"; // Layout Component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
