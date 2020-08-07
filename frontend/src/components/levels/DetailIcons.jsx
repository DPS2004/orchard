import HasClassics from "assets/classicTEMP.png";
import HasOneshots from "assets/oneshotTEMP.png";
import HasSquareshots from "assets/squareshotTEMP.png";
import HasSwing from "assets/swingTEMP.png";
import HasFreetimes from "assets/freetimeTEMP.png";
import HasHolds from "assets/heldbeatsTEMP.png";

function Icon({img, _class}) {
    return (
        <img class={_class} src={img}></img>
    )
}

export default function DetailIcons({level}) {
    const {has_classics, has_oneshots, has_squareshots, has_swing, has_freetimes, has_holds} = level;

    return (
        <div class="flex flex-row">
            {has_classics ? <Icon img={HasClassics} /> : <span></span>}
            {has_oneshots ? <Icon _class="ml-2" img={HasOneshots} /> : <span></span>}
            {has_swing ? <Icon _class="ml-2" img={HasSwing} /> : <span></span>}
            {has_freetimes ? <Icon _class="ml-2" img={HasFreetimes} /> : <span></span>}
            {has_squareshots ? <Icon _class="ml-2" img={HasSquareshots} /> : <span></span>}
            {has_holds ? <Icon _class="ml-2" img={HasHolds} /> : <span></span>}
        </div>
    )
}