/**
 * Interface for the unordered list containing the profession, awards, and discoveries
 *     in the Gallery function located in src/pages/qcomps/gallery_props.tsx.
 */
export interface ProfileDetailsProps {
    profession: string;
    awards: string[];
    discoveries: string[];
}