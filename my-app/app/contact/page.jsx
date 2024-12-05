// Importe le composant ContactPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/Contact' est correct.
import ContactPage from '@/components/Contact';
// Composant fonctionnel Contact servant de wrapper ou d'interface pour le composant ContactPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans ContactPage si nécessaire
// Définit les métadonnées pour la page FAQ. Ces informations peuvent être utilisées 
// pour enrichir les balises <head> de la page, ce qui est crucial pour le SEO.
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'Contact | portfolio - contactez moi',
    description: 'Contactez moi si vous etes interessé',
    openGraph: {
        title: 'Contact | portfolio - contactez moi',
        description: 'Contactez moi si vous etes interessé',
        images: ['/logo.png']
    }
}
export default function Contact() {
    // Rendu du composant ContactPage pour afficher le contenu de la page de contact.
    return <ContactPage />;
}
