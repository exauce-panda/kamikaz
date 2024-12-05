// Importation du composant Eve depuis le dossier des composants
// Assurez-vous que le chemin d'importation correspond à l'emplacement réel du fichier dans votre projet
import Eve from '@/components/Projets.jsx';
import styles from './page.module.css';
// Composant fonctionnel Event qui sert de page d'événements
// Définit les métadonnées pour la page FAQ. Ces informations peuvent être utilisées 
// pour enrichir les balises <head> de la page, ce qui est crucial pour le SEO.
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'Mes projets | une liste des projets sur lequel j\'ai travaillé',
    description: 'Je vous details une liste des mes projets en expliquant le pourquoi du comment ainsi que les technologies utiliser',
    openGraph: {
        title: 'Mes projets | une liste des projets sur lequel j\'ai travaillé',
        description: 'Je vous details une liste des mes projets en expliquant le pourquoi du comment ainsi que les technologies utiliser',
        images: ['/logo.png']
    }
}
export default function Event() {
    // Le composant retourne simplement le composant Eve pour le rendu
    // Ceci implique que tout le contenu spécifique aux événements est géré par le composant Eve
    return (
    <div>
    <div className={styles.all}>
    <Eve />
</div>
</div>
);
}
