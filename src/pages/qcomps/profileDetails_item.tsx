import {ProfileDetailsProps} from "@/types/profileDetails";

/**
 * Utilizes the ProfileDetailsProps interface to generate the unordered list which
 *    displays the profession, awards, and discoveries of the scientists listed in
 *    src/pages/qcomps/gallery_props.tsx
 * @param profession The profession of the scientist
 * @param awards The awards earned by the scientist
 * @param discoveries The discoveries discovered by the scientists
 */
export function ProfileDetails({profession, awards, discoveries}: ProfileDetailsProps) {
    return(
        <div>
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>
                    ({awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discoveries.join(", ")}
                </li>
            </ul>
        </div>
    );
}