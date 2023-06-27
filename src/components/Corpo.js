import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Corpo(){
    return(
    <div class="corpo">
        <Feed />
        <Sidebar imgsrc="assets/img/catanacomics.svg" username="catanacomics" name="Catana"/>
    </div>
    );
}