import {defaults as defaultControls} from "ol/control/util";
import {Attribution, OverviewMap, Zoom, ZoomToExtent} from "ol/control";
import {CR} from "./geo/known_polygons";

const controls = defaultControls().extend([
    //new OverviewMap(),
    new Attribution(),
    new Zoom(),
    new ZoomToExtent({extent: CR.extentOL()})
]);

export default controls;