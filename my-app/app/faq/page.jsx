// Importe le composant FAQ depuis votre dossier de composants. 
// Assurez-vous que le chemin d'importation '@/components/Faq' est correct et que le composant existe.
import FAQ from '@/components/Faq';
// Définit les métadonnées pour la page FAQ. Ces informations peuvent être utilisées 
// pour enrichir les balises <head> de la page, ce qui est crucial pour le SEO.
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'FAQ | une liste des questions souvent poser',
    description: 'Je repond aux question concernant le demenagement, le travail hybrid, tele, ou sur place ainsi que ma place en frontend',
    openGraph: {
        title: 'FAQ | une liste des questions souvent poser',
        description: 'Je repond aux question concernant le demenagement, le travail hybrid, tele, ou sur place ainsi que ma place en frontend',
        images: ['/logo.png']
    }
}
// Composant fonctionnel Faq qui sert de conteneur pour le composant FAQ.
export default function Faq() {
    return (
        // Le composant FAQ est retourné ici. Aucune balise supplémentaire n'est nécessaire grâce à l'usage des fragments.
        // Cela simplifie le DOM en évitant l'ajout de div inutiles.
        <FAQ />
    );
}
