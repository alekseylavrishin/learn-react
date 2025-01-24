import {Avatar} from "@/pages/components/profile_props";
import {GalleryProps} from "@/types/gallery";
import {ProfileDetails} from "@/pages/qcomps/profileDetails_item";


function Profile({scientist, size = 100}: GalleryProps) {
  return (
      <div>
        <h2>{scientist.name}</h2>
        <Avatar person={{name: scientist.name, imageId: scientist.imageId}} size={size}/>
          <ProfileDetails profession={scientist.profession}
                          awards={scientist.awards}
                          discoveries={scientist.discovery}/>
      </div>
  );
}

export default function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile scientist={{
            name: "Maria Skłodowska-Curie", imageId: "szV5sdG", profession: "physicist and chemist",
            awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"],
            discovery: ["polonium (element)"
            ]}} size={70}/>

          <Profile scientist={{
              name: "Katsuko Saruhashi", imageId: "YfeOqp2", profession: "geochemist",
              awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
              discovery: ["a method for measuring carbon dioxide in seawater"]
          }} size={70}/>
    </div>
  );
}
