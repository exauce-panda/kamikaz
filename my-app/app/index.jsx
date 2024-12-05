import pagePrincipal from './layout';
// Composant fonctionnel Contact servant de wrapper ou d'interface pour le composant pagePrincipal.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans pagePrincipal si nécessaire.
export default function Contact() {
    // Rendu du composant pagePrincipal pour afficher le contenu de la page de contact.
    return <pagePrincipal />;
}